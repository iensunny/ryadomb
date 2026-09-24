import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { createServer } from "node:http";
import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const required = ["S3_ENDPOINT", "S3_BUCKET", "S3_ACCESS_KEY", "S3_SECRET_KEY", "VK_APP_SECRET"];
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
  const stateKey = `users/${userId}/state.json`;
  try {
    if (request.method === "GET") {
      const stored = await getObject(stateKey);
      return send(response, 200, stored ? { state: await loadMedia(JSON.parse(stored.toString("utf8"))) } : { state: null });
    }
    if (request.method === "PUT") {
      const state = await storeMedia(await body(request), userId);
      await putObject(stateKey, Buffer.from(JSON.stringify(state)), "application/json");
      return send(response, 200, { ok: true });
    }
    return send(response, 405, { error: "method not allowed" });
  } catch (error) {
    console.error(error);
    return send(response, error.status || 500, { error: "storage operation failed" });
  }
}).listen(Number(process.env.PORT) || 8080, "0.0.0.0", () => console.log("Family Stories API is running"));
