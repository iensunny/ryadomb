import type { VkUserProfile } from "../vk/session";

const endpoint = String(import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export async function recordPrivacyConsent(version: string, user: VkUserProfile) {
  if (!endpoint || import.meta.env.DEV) return;
  const response = await fetch(`${endpoint}/api/privacy-consent`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-vk-launch-params": window.location.search.slice(1),
    },
    body: JSON.stringify({
      version,
      acceptedAt: new Date().toISOString(),
      profile: {
        firstName: user.firstName,
        lastName: user.lastName,
        photoUrl: user.photoUrl,
      },
    }),
  });
  if (!response.ok) throw new Error("Privacy consent recording failed");
}
