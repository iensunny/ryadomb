import { createHash, createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { createServer } from "node:http";
import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import pg from "pg";

const required = ["DATABASE_URL", "S3_ENDPOINT", "S3_BUCKET", "S3_ACCESS_KEY", "S3_SECRET_KEY", "VK_APP_SECRET"];
const missing = required.filter((name) => !process.env[name]);
const client = new S3Client({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION || "ru-1",
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY || "missing",
    secretAccessKey: process.env.S3_SECRET_KEY || "missing",
  },
});
const bucket = process.env.S3_BUCKET;
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.DATABASE_SSL === "false" ? false : { rejectUnauthorized: false } });
const allowedOrigins = new Set((process.env.APP_ORIGINS || "").split(",").map((value) => value.trim()).filter(Boolean));
const jsonHeaders = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };

function send(response, status, value, extra = {}) {
  response.writeHead(status, { ...jsonHeaders, ...extra });
  response.end(JSON.stringify(value));
}

function cors(request, response) {
  const origin = request.headers.origin;
  if (origin && (allowedOrigins.has(origin) || /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/.test(origin))) {
    response.setHeader("access-control-allow-origin", origin);
    response.setHeader("vary", "Origin");
  }
  response.setHeader("access-control-allow-methods", "GET,PUT,OPTIONS");
  response.setHeader("access-control-allow-headers", "content-type,x-vk-launch-params");
}

function verifyLaunchParams(raw) {
  const params = new URLSearchParams(raw || "");
  const sign = params.get("sign");
  const userId = Number(params.get("vk_user_id"));
  if (!sign || !Number.isSafeInteger(userId) || userId <= 0) return null;
  const signed = new URLSearchParams(
    [...params.entries()].filter(([key]) => key.startsWith("vk_")).sort(([a], [b]) => a.localeCompare(b)),
  ).toString();
  const expected = createHmac("sha256", process.env.VK_APP_SECRET).update(signed).digest("base64url");
  const actualBuffer = Buffer.from(sign);
  const expectedBuffer = Buffer.from(expected);
  if (actualBuffer.length !== expectedBuffer.length || !timingSafeEqual(actualBuffer, expectedBuffer)) return null;
  return userId;
}

async function body(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 25 * 1024 * 1024) throw Object.assign(new Error("payload too large"), { status: 413 });
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

async function getObject(key) {
  try {
    const result = await client.send(new GetObjectCommand({ Bucket: bucket, Key: key }));
    return Buffer.from(await result.Body.transformToByteArray());
  } catch (error) {
    if (error?.name === "NoSuchKey" || error?.$metadata?.httpStatusCode === 404) return null;
    throw error;
  }
}

async function putObject(key, value, contentType) {
  await client.send(new PutObjectCommand({ Bucket: bucket, Key: key, Body: value, ContentType: contentType }));
}

async function migrate() {
  if (missing.length) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS app_users (
      vk_user_id BIGINT PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS families (
      id UUID PRIMARY KEY,
      name TEXT NOT NULL DEFAULT '',
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS family_members (
      family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
      vk_user_id BIGINT NOT NULL REFERENCES app_users(vk_user_id) ON DELETE CASCADE,
      role TEXT NOT NULL DEFAULT 'owner',
      joined_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      PRIMARY KEY (family_id, vk_user_id)
    );
    CREATE TABLE IF NOT EXISTS stories (
      id TEXT NOT NULL,
      family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
      data JSONB NOT NULL,
      position INTEGER NOT NULL DEFAULT 0,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      PRIMARY KEY (family_id, id)
    );
    CREATE TABLE IF NOT EXISTS books (
      id TEXT NOT NULL,
      family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      PRIMARY KEY (family_id, id)
    );
    CREATE TABLE IF NOT EXISTS book_items (
      id TEXT NOT NULL,
      family_id UUID NOT NULL,
      book_id TEXT NOT NULL,
      position INTEGER NOT NULL,
      data JSONB NOT NULL,
      PRIMARY KEY (family_id, book_id, id),
      FOREIGN KEY (family_id, book_id) REFERENCES books(family_id, id) ON DELETE CASCADE
    );
    CREATE INDEX IF NOT EXISTS stories_family_position_idx ON stories(family_id, position);
    CREATE INDEX IF NOT EXISTS book_items_position_idx ON book_items(family_id, book_id, position);
  `);
}

async function familyFor(client, userId, create = false) {
  const found = await client.query(
    "SELECT f.id, f.name FROM families f JOIN family_members m ON m.family_id=f.id WHERE m.vk_user_id=$1 ORDER BY m.joined_at LIMIT 1",
    [userId],
  );
  if (found.rows[0] || !create) return found.rows[0] || null;
  const id = randomUUID();
  await client.query("INSERT INTO app_users(vk_user_id) VALUES($1) ON CONFLICT(vk_user_id) DO UPDATE SET updated_at=now()", [userId]);
  await client.query("INSERT INTO families(id) VALUES($1)", [id]);
  await client.query("INSERT INTO family_members(family_id,vk_user_id,role) VALUES($1,$2,'owner')", [id, userId]);
  return { id, name: "" };
}

async function readState(userId) {
  const db = await pool.connect();
  try {
    const family = await familyFor(db, userId);
    if (!family) return null;
    const [stories, books] = await Promise.all([
      db.query("SELECT id,data FROM stories WHERE family_id=$1 ORDER BY position", [family.id]),
      db.query("SELECT id,data FROM books WHERE family_id=$1 ORDER BY updated_at DESC LIMIT 1", [family.id]),
    ]);
    if (!books.rows[0]) return null;
    const bookRow = books.rows[0];
    const items = await db.query("SELECT data FROM book_items WHERE family_id=$1 AND book_id=$2 ORDER BY position", [family.id, bookRow.id]);
    return {
      stories: stories.rows.map((row) => ({ ...row.data, id: row.id })),
      book: { ...bookRow.data, id: bookRow.id, items: items.rows.map((row) => row.data) },
    };
  } finally { db.release(); }
}

async function writeState(userId, state) {
  const db = await pool.connect();
  try {
    await db.query("BEGIN");
    const family = await familyFor(db, userId, true);
    const stories = Array.isArray(state.stories) ? state.stories : [];
    const storyIds = stories.map((story) => String(story.id));
    await db.query("DELETE FROM stories WHERE family_id=$1 AND NOT (id = ANY($2::text[]))", [family.id, storyIds]);
    for (const [position, story] of stories.entries()) {
      const { id, ...data } = story;
      await db.query(
        "INSERT INTO stories(id,family_id,data,position) VALUES($1,$2,$3,$4) ON CONFLICT(family_id,id) DO UPDATE SET data=excluded.data,position=excluded.position,updated_at=now()",
        [String(id), family.id, data, position],
      );
    }
    const book = state.book || { id: "family-book", title: "Семейная книга", items: [] };
    const { id: bookId = "family-book", items = [], ...bookData } = book;
    await db.query(
      "INSERT INTO books(id,family_id,data) VALUES($1,$2,$3) ON CONFLICT(family_id,id) DO UPDATE SET data=excluded.data,updated_at=now()",
      [String(bookId), family.id, bookData],
    );
    await db.query("DELETE FROM book_items WHERE family_id=$1 AND book_id=$2", [family.id, String(bookId)]);
    for (const [position, item] of items.entries()) {
      await db.query("INSERT INTO book_items(id,family_id,book_id,position,data) VALUES($1,$2,$3,$4,$5)", [String(item.id), family.id, String(bookId), position, item]);
    }
    await db.query("COMMIT");
  } catch (error) {
    await db.query("ROLLBACK");
    throw error;
  } finally { db.release(); }
}

const dataImage = /^data:(image\/(?:jpeg|png|webp));base64,(.+)$/s;
const extension = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

async function storeMedia(value, userId) {
  if (typeof value === "string") {
    const match = value.match(dataImage);
    if (!match) return value;
    const bytes = Buffer.from(match[2], "base64");
    const digest = createHash("sha256").update(bytes).digest("hex");
    const key = `users/${userId}/media/${digest}.${extension[match[1]]}`;
    await putObject(key, bytes, match[1]);
    return `s3://${key}`;
  }
  if (Array.isArray(value)) return Promise.all(value.map((item) => storeMedia(item, userId)));
  if (value && typeof value === "object") {
    const entries = await Promise.all(Object.entries(value).map(async ([key, item]) => [key, await storeMedia(item, userId)]));
    return Object.fromEntries(entries);
  }
  return value;
}

async function loadMedia(value) {
  if (typeof value === "string" && value.startsWith("s3://")) {
    const key = value.slice(5);
    const bytes = await getObject(key);
    if (!bytes) return "";
    const ext = key.split(".").pop();
    const mime = ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg";
    return `data:${mime};base64,${bytes.toString("base64")}`;
  }
  if (Array.isArray(value)) return Promise.all(value.map(loadMedia));
  if (value && typeof value === "object") {
    const entries = await Promise.all(Object.entries(value).map(async ([key, item]) => [key, await loadMedia(item)]));
    return Object.fromEntries(entries);
  }
  return value;
}

createServer(async (request, response) => {
  cors(request, response);
  if (request.method === "OPTIONS") return response.writeHead(204).end();
  const url = new URL(request.url, "http://api.local");
  if (url.pathname === "/health") return send(response, missing.length ? 503 : 200, { ok: missing.length === 0, missing });
  if (url.pathname !== "/api/state") return send(response, 404, { error: "not found" });
  if (missing.length) return send(response, 503, { error: "server is not configured" });
  const userId = verifyLaunchParams(request.headers["x-vk-launch-params"]);
  if (!userId) return send(response, 401, { error: "invalid VK launch parameters" });
  try {
    if (request.method === "GET") {
      const state = await readState(userId);
      return send(response, 200, { state: state ? await loadMedia(state) : null });
    }
    if (request.method === "PUT") {
      const state = await storeMedia(await body(request), userId);
      await writeState(userId, state);
      return send(response, 200, { ok: true });
    }
    return send(response, 405, { error: "method not allowed" });
  } catch (error) {
    console.error(error);
    return send(response, error.status || 500, { error: "storage operation failed" });
  }
}).listen(Number(process.env.PORT) || 8080, "0.0.0.0", async () => {
  try {
    await migrate();
    console.log("Family Stories API is running");
  } catch (error) {
    console.error("Database migration failed", error);
    process.exitCode = 1;
  }
});
