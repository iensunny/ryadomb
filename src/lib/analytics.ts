import type { VkUserProfile } from "../vk/session";

const endpoint = String(import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
const SESSION_KEY = "family-stories-analytics-session";

function sessionId() {
  let value = window.sessionStorage.getItem(SESSION_KEY);
  if (!value) {
    value = crypto.randomUUID();
    window.sessionStorage.setItem(SESSION_KEY, value);
  }
  return value;
}

function profile(user?: VkUserProfile) {
  return user ? { firstName: user.firstName, lastName: user.lastName, photoUrl: user.photoUrl } : undefined;
}

export function trackEvent(eventName: string, options: { screen?: string; properties?: Record<string, string | number | boolean | null>; user?: VkUserProfile } = {}) {
  if (!endpoint || import.meta.env.DEV || !window.location.search.includes("sign=")) return;
  void fetch(`${endpoint}/api/analytics/events`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-vk-launch-params": window.location.search.slice(1) },
    body: JSON.stringify({ eventName, sessionId: sessionId(), screen: options.screen || "", properties: options.properties || {}, profile: profile(options.user) }),
    keepalive: true,
  }).catch(() => undefined);
}

export function statisticsEndpoint() {
  return endpoint ? `${endpoint}/api/statistics` : "";
}
