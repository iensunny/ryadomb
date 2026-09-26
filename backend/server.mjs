import { createHash, createHmac, randomBytes, randomUUID, timingSafeEqual } from "node:crypto";
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
  response.setHeader("access-control-allow-methods", "GET,POST,PUT,OPTIONS");
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
      first_name TEXT NOT NULL DEFAULT '',
      last_name TEXT NOT NULL DEFAULT '',
      photo_url TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    ALTER TABLE app_users ADD COLUMN IF NOT EXISTS first_name TEXT NOT NULL DEFAULT '';
    ALTER TABLE app_users ADD COLUMN IF NOT EXISTS last_name TEXT NOT NULL DEFAULT '';
    ALTER TABLE app_users ADD COLUMN IF NOT EXISTS photo_url TEXT;
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
    CREATE TABLE IF NOT EXISTS family_invites (
      token_hash TEXT PRIMARY KEY,
      family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
      created_by BIGINT NOT NULL REFERENCES app_users(vk_user_id) ON DELETE CASCADE,
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS analytics_events (
      id BIGSERIAL PRIMARY KEY,
      vk_user_id BIGINT NOT NULL REFERENCES app_users(vk_user_id) ON DELETE CASCADE,
      family_id UUID REFERENCES families(id) ON DELETE SET NULL,
      session_id TEXT NOT NULL DEFAULT '',
      event_name TEXT NOT NULL,
      screen TEXT NOT NULL DEFAULT '',
      properties JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
    CREATE TABLE IF NOT EXISTS print_requests (
      id UUID PRIMARY KEY,
      family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
      vk_user_id BIGINT NOT NULL REFERENCES app_users(vk_user_id) ON DELETE CASCADE,
      book_id TEXT NOT NULL,
      book_title TEXT NOT NULL,
      page_count INTEGER NOT NULL DEFAULT 0,
      cover TEXT NOT NULL DEFAULT '',
      copies INTEGER NOT NULL DEFAULT 1,
      contact_name TEXT NOT NULL,
      contact_value TEXT NOT NULL,
      comment TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL DEFAULT 'new',
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
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
    CREATE INDEX IF NOT EXISTS analytics_events_created_idx ON analytics_events(created_at);
    CREATE INDEX IF NOT EXISTS analytics_events_name_created_idx ON analytics_events(event_name,created_at);
    CREATE INDEX IF NOT EXISTS analytics_events_user_created_idx ON analytics_events(vk_user_id,created_at);
    CREATE INDEX IF NOT EXISTS print_requests_created_idx ON print_requests(created_at);
  `);
}

const allowedEvents = new Set([
  "app_open", "screen_view", "onboarding_completed", "story_created", "story_updated", "story_deleted",
  "photo_added", "book_previewed", "book_pdf_started", "book_pdf_downloaded", "book_pdf_failed",
  "book_cover_changed", "book_custom_page_added", "invite_copied", "invite_shared", "invite_opened",
  "print_request_opened", "print_request_created", "performance_sample", "client_error",
]);

function safeProperties(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value).slice(0, 30).map(([key, item]) => {
    if (typeof item === "string") return [key.slice(0, 80), item.slice(0, 300)];
    if (typeof item === "number" || typeof item === "boolean" || item === null) return [key.slice(0, 80), item];
    return [key.slice(0, 80), String(item).slice(0, 300)];
  }));
}

async function recordEvent(userId, payload) {
  const eventName = typeof payload?.eventName === "string" ? payload.eventName : "";
  if (!allowedEvents.has(eventName)) throw Object.assign(new Error("unknown analytics event"), { status: 400 });
  const db = await pool.connect();
  try {
    await upsertUser(db, userId, payload?.profile);
    const family = await familyFor(db, userId);
    await db.query(
      "INSERT INTO analytics_events(vk_user_id,family_id,session_id,event_name,screen,properties) VALUES($1,$2,$3,$4,$5,$6)",
      [userId, family?.id || null, String(payload?.sessionId || "").slice(0, 100), eventName, String(payload?.screen || "").slice(0, 100), safeProperties(payload?.properties)],
    );
  } finally { db.release(); }
}

async function createPrintRequest(userId, payload) {
  const db = await pool.connect();
  try {
    await db.query("BEGIN");
    await upsertUser(db, userId, payload?.profile);
    const family = await familyFor(db, userId, true);
    const name = String(payload?.name || "").trim().slice(0, 160);
    const contact = String(payload?.contact || "").trim().slice(0, 300);
    if (!name || !contact) throw Object.assign(new Error("name and contact are required"), { status: 400 });
    const id = randomUUID();
    await db.query(
      `INSERT INTO print_requests(id,family_id,vk_user_id,book_id,book_title,page_count,cover,copies,contact_name,contact_value,comment)
       VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [id, family.id, userId, String(payload?.bookId || "family-book").slice(0, 160), String(payload?.bookTitle || "Семейная книга").slice(0, 300), Math.max(0, Number(payload?.pageCount) || 0), String(payload?.cover || "").slice(0, 80), Math.max(1, Math.min(100, Number(payload?.copies) || 1)), name, contact, String(payload?.comment || "").slice(0, 2000)],
    );
    await db.query("COMMIT");
    return { id, status: "new" };
  } catch (error) {
    await db.query("ROLLBACK");
    throw error;
  } finally { db.release(); }
}

async function publicStatistics() {
  const [summary, daily, events, screens, transitions, errors, retention, categories, covers, requestStatuses, platforms] = await Promise.all([
    pool.query(`SELECT
      (SELECT count(*) FROM app_users) unique_users,
      (SELECT count(*) FROM families) families,
      (SELECT count(*) FROM family_members WHERE role='member') invited_members,
      (SELECT count(*) FROM family_invites) invites_created,
      (SELECT count(*) FROM stories) stories,
      (SELECT count(*) FROM books) books,
      (SELECT count(*) FROM analytics_events WHERE event_name='book_pdf_downloaded') pdf_downloads,
      (SELECT count(*) FROM print_requests) print_requests,
      (SELECT round(avg(value),1) FROM (SELECT count(*) value FROM family_members GROUP BY family_id) x) avg_members_per_family,
      (SELECT round(avg(value),1) FROM (SELECT count(*) value FROM stories GROUP BY family_id) x) avg_stories_per_family,
      (SELECT round(avg(value),1) FROM (SELECT count(*) value FROM book_items GROUP BY family_id,book_id) x) avg_pages_per_book,
      (SELECT count(DISTINCT vk_user_id) FROM analytics_events WHERE created_at>=now()-interval '1 day') dau,
      (SELECT count(DISTINCT vk_user_id) FROM analytics_events WHERE created_at>=now()-interval '7 days') wau,
      (SELECT count(DISTINCT vk_user_id) FROM analytics_events WHERE created_at>=now()-interval '30 days') mau,
      (SELECT round(avg((properties->>'loadMs')::numeric)) FROM analytics_events WHERE event_name='performance_sample' AND properties ? 'loadMs') avg_load_ms`),
    pool.query(`WITH days AS (SELECT generate_series(current_date-29,current_date,interval '1 day')::date AS event_date)
      SELECT d.event_date AS day,count(DISTINCT e.vk_user_id) users,count(e.id) events
      FROM days d LEFT JOIN analytics_events e ON e.created_at>=d.event_date AND e.created_at<d.event_date+interval '1 day'
      GROUP BY d.event_date ORDER BY d.event_date`),
    pool.query("SELECT event_name,count(*) value,count(DISTINCT vk_user_id) users FROM analytics_events GROUP BY event_name ORDER BY value DESC"),
    pool.query("SELECT screen,count(*) views,count(DISTINCT vk_user_id) users FROM analytics_events WHERE event_name='screen_view' AND screen<>'' GROUP BY screen ORDER BY views DESC"),
    pool.query(`WITH ordered AS (SELECT session_id,screen,lag(screen) OVER(PARTITION BY session_id ORDER BY created_at,id) previous FROM analytics_events WHERE event_name='screen_view' AND session_id<>'')
      SELECT previous source,screen target,count(*) value FROM ordered WHERE previous IS NOT NULL AND previous<>screen GROUP BY previous,screen ORDER BY value DESC LIMIT 30`),
    pool.query("SELECT COALESCE(properties->>'kind','unknown') kind,count(*) value FROM analytics_events WHERE event_name IN ('client_error','book_pdf_failed') GROUP BY kind ORDER BY value DESC LIMIT 20"),
    pool.query(`WITH first_seen AS (SELECT vk_user_id,min(created_at)::date first_day FROM analytics_events GROUP BY vk_user_id)
      SELECT count(*) users,
        count(*) FILTER (WHERE EXISTS(SELECT 1 FROM analytics_events e WHERE e.vk_user_id=f.vk_user_id AND e.created_at::date>=f.first_day+1)) d1,
        count(*) FILTER (WHERE EXISTS(SELECT 1 FROM analytics_events e WHERE e.vk_user_id=f.vk_user_id AND e.created_at::date>=f.first_day+7)) d7,
        count(*) FILTER (WHERE EXISTS(SELECT 1 FROM analytics_events e WHERE e.vk_user_id=f.vk_user_id AND e.created_at::date>=f.first_day+30)) d30
      FROM first_seen f`),
    pool.query("SELECT c.category,count(*) value FROM stories CROSS JOIN LATERAL jsonb_array_elements_text(COALESCE(data->'categories','[]'::jsonb)) AS c(category) GROUP BY c.category ORDER BY value DESC"),
    pool.query("SELECT COALESCE(data->>'cover','unknown') cover,count(*) value FROM books GROUP BY cover ORDER BY value DESC"),
    pool.query("SELECT status,count(*) value FROM print_requests GROUP BY status ORDER BY value DESC"),
    pool.query("SELECT COALESCE(properties->>'platform','unknown') platform,count(*) value FROM analytics_events WHERE event_name='app_open' GROUP BY platform ORDER BY value DESC"),
  ]);
  const normalize = (rows) => rows.map((row) => Object.fromEntries(Object.entries(row).map(([key, value]) => [key, typeof value === "string" && /^\d+$/.test(value) ? Number(value) : value])));
  const resultSummary = normalize(summary.rows)[0];
  resultSummary.invite_conversion = resultSummary.invites_created ? Math.round(resultSummary.invited_members / resultSummary.invites_created * 1000) / 10 : 0;
  resultSummary.pdf_conversion = Number(resultSummary.books) ? Math.round(Number(resultSummary.pdf_downloads) / Number(resultSummary.books) * 1000) / 10 : 0;
  return { generatedAt: new Date().toISOString(), summary: resultSummary, daily: normalize(daily.rows), events: normalize(events.rows), screens: normalize(screens.rows), transitions: normalize(transitions.rows), errors: normalize(errors.rows), retention: normalize(retention.rows)[0], categories: normalize(categories.rows), covers: normalize(covers.rows), requestStatuses: normalize(requestStatuses.rows), platforms: normalize(platforms.rows) };
}

async function upsertUser(db, userId, profile = {}) {
  const firstName = typeof profile.firstName === "string" ? profile.firstName.trim().slice(0, 100) : "";
  const lastName = typeof profile.lastName === "string" ? profile.lastName.trim().slice(0, 100) : "";
  const photoUrl = typeof profile.photoUrl === "string" ? profile.photoUrl.slice(0, 1000) : null;
  await db.query(
    `INSERT INTO app_users(vk_user_id,first_name,last_name,photo_url)
     VALUES($1,$2,$3,$4)
     ON CONFLICT(vk_user_id) DO UPDATE SET
       first_name=CASE WHEN excluded.first_name='' THEN app_users.first_name ELSE excluded.first_name END,
       last_name=CASE WHEN excluded.last_name='' THEN app_users.last_name ELSE excluded.last_name END,
       photo_url=COALESCE(excluded.photo_url,app_users.photo_url),updated_at=now()`,
    [userId, firstName, lastName, photoUrl],
  );
}

async function familyFor(client, userId, create = false) {
  const found = await client.query(
    "SELECT f.id, f.name FROM families f JOIN family_members m ON m.family_id=f.id WHERE m.vk_user_id=$1 ORDER BY m.joined_at LIMIT 1",
    [userId],
  );
  if (found.rows[0] || !create) return found.rows[0] || null;
  const id = randomUUID();
  await upsertUser(client, userId);
  await client.query("INSERT INTO families(id) VALUES($1)", [id]);
  await client.query("INSERT INTO family_members(family_id,vk_user_id,role) VALUES($1,$2,'owner')", [id, userId]);
  return { id, name: "" };
}

async function readFamily(userId) {
  const db = await pool.connect();
  try {
    const family = await familyFor(db, userId);
    if (!family) return null;
    const members = await db.query(
      `SELECT u.vk_user_id,u.first_name,u.last_name,u.photo_url,m.role,m.joined_at
       FROM family_members m JOIN app_users u ON u.vk_user_id=m.vk_user_id
       WHERE m.family_id=$1 ORDER BY CASE WHEN m.role='owner' THEN 0 ELSE 1 END,m.joined_at`,
      [family.id],
    );
    return { id: family.id, name: family.name, members: members.rows };
  } finally { db.release(); }
}

function tokenHash(token) {
  return createHash("sha256").update(token).digest("hex");
}

async function createInvite(userId, payload) {
  const db = await pool.connect();
  try {
    await db.query("BEGIN");
    await upsertUser(db, userId, payload?.profile);
    const family = await familyFor(db, userId, true);
    const name = typeof payload?.familyName === "string" ? payload.familyName.trim().slice(0, 160) : "";
    if (name) await db.query("UPDATE families SET name=$2,updated_at=now() WHERE id=$1", [family.id, name]);
    const token = randomBytes(24).toString("base64url");
    await db.query(
      "INSERT INTO family_invites(token_hash,family_id,created_by,expires_at) VALUES($1,$2,$3,now()+interval '30 days')",
      [tokenHash(token), family.id, userId],
    );
    await db.query("INSERT INTO analytics_events(vk_user_id,family_id,event_name,properties) VALUES($1,$2,'invite_created',$3)", [userId, family.id, { expiresInDays: 30 }]);
    await db.query("COMMIT");
    return { token, expiresInDays: 30 };
  } catch (error) {
    await db.query("ROLLBACK");
    throw error;
  } finally { db.release(); }
}

async function joinFamily(userId, payload) {
  const token = typeof payload?.token === "string" ? payload.token.trim() : "";
  if (!token) throw Object.assign(new Error("missing invite token"), { status: 400, code: "INVALID_INVITE" });
  const db = await pool.connect();
  try {
    await db.query("BEGIN");
    const inviteResult = await db.query(
      `SELECT i.family_id,f.name FROM family_invites i JOIN families f ON f.id=i.family_id
       WHERE i.token_hash=$1 AND i.expires_at>now() FOR UPDATE`,
      [tokenHash(token)],
    );
    const invite = inviteResult.rows[0];
    if (!invite) throw Object.assign(new Error("invite is invalid or expired"), { status: 404, code: "INVALID_INVITE" });
    await upsertUser(db, userId, payload?.profile);
    const existing = await db.query("SELECT family_id,role FROM family_members WHERE vk_user_id=$1 ORDER BY joined_at", [userId]);
    if (!existing.rows.some((row) => row.family_id === invite.family_id)) {
      for (const membership of existing.rows) {
        const counts = await db.query(
          `SELECT
             (SELECT count(*) FROM family_members WHERE family_id=$1) members,
             (SELECT count(*) FROM stories WHERE family_id=$1 AND id NOT LIKE 'demo-%') user_stories,
             (SELECT name FROM families WHERE id=$1) family_name`,
          [membership.family_id],
        );
        const row = counts.rows[0];
        const disposable = membership.role === "owner" && Number(row.members) === 1 && Number(row.user_stories) === 0 && !row.family_name;
        if (!disposable) throw Object.assign(new Error("user already belongs to another family"), { status: 409, code: "ALREADY_IN_FAMILY" });
        await db.query("DELETE FROM families WHERE id=$1", [membership.family_id]);
      }
      await db.query("INSERT INTO family_members(family_id,vk_user_id,role) VALUES($1,$2,'member')", [invite.family_id, userId]);
      await db.query("INSERT INTO analytics_events(vk_user_id,family_id,event_name,properties) VALUES($1,$2,'invite_joined',$3)", [userId, invite.family_id, {}]);
    }
    await db.query("COMMIT");
    return { familyId: invite.family_id, familyName: invite.name, joined: true };
  } catch (error) {
    await db.query("ROLLBACK");
    throw error;
  } finally { db.release(); }
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
  if (url.pathname === "/api/statistics" && request.method === "GET") {
    if (missing.length) return send(response, 503, { error: "server is not configured" });
    try { return send(response, 200, await publicStatistics()); }
    catch (error) { console.error(error); return send(response, 500, { error: "statistics unavailable" }); }
  }
  if (missing.length) return send(response, 503, { error: "server is not configured" });
  const userId = verifyLaunchParams(request.headers["x-vk-launch-params"]);
  if (!userId) return send(response, 401, { error: "invalid VK launch parameters" });
  try {
    if (url.pathname === "/api/family" && request.method === "GET") {
      return send(response, 200, { family: await readFamily(userId) });
    }
    if (url.pathname === "/api/family/invite" && request.method === "POST") {
      return send(response, 201, await createInvite(userId, await body(request)));
    }
    if (url.pathname === "/api/family/join" && request.method === "POST") {
      return send(response, 200, await joinFamily(userId, await body(request)));
    }
    if (url.pathname === "/api/analytics/events" && request.method === "POST") {
      await recordEvent(userId, await body(request));
      return send(response, 202, { ok: true });
    }
    if (url.pathname === "/api/print-requests" && request.method === "POST") {
      return send(response, 201, await createPrintRequest(userId, await body(request)));
    }
    if (url.pathname !== "/api/state") return send(response, 404, { error: "not found" });
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
    return send(response, error.status || 500, {
      error: error.code ? error.message : "storage operation failed",
      ...(error.code ? { code: error.code } : {}),
    });
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
