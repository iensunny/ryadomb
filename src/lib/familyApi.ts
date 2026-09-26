import type { FamilyPerson } from "../domain/family";
import type { VkUserProfile } from "../vk/session";

const endpoint = String(import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

type ApiMember = {
  vk_user_id: string;
  first_name: string;
  last_name: string;
  photo_url?: string;
  role: "owner" | "member";
};

type ApiFamily = { id: string; name: string; members: ApiMember[] };

function headers() {
  return { "content-type": "application/json", "x-vk-launch-params": window.location.search.slice(1) };
}

function profile(user: VkUserProfile) {
  return { firstName: user.firstName, lastName: user.lastName, photoUrl: user.photoUrl };
}

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${endpoint}${path}`, { ...init, headers: { ...headers(), ...init?.headers } });
  const value = await response.json().catch(() => ({})) as T & { code?: string; error?: string };
  if (!response.ok) throw Object.assign(new Error(value.error || `Family request failed: ${response.status}`), { code: value.code, status: response.status });
  return value;
}

export function familyApiEnabled() {
  return Boolean(endpoint && !import.meta.env.DEV);
}

export async function readFamily(userId: number): Promise<{ name: string; members: FamilyPerson[] } | null> {
  if (!familyApiEnabled()) return null;
  const { family } = await api<{ family: ApiFamily | null }>("/api/family");
  if (!family) return null;
  return {
    name: family.name,
    members: family.members.map((member) => ({
      id: String(member.vk_user_id),
      name: `${member.first_name} ${member.last_name}`.trim() || `Пользователь VK ${member.vk_user_id}`,
      role: member.role === "owner" ? "Владелец семьи" : "Участник",
      initials: `${member.first_name.at(0) ?? ""}${member.last_name.at(0) ?? ""}`.toUpperCase() || "VK",
      photoUrl: member.photo_url,
      isYou: String(member.vk_user_id) === String(userId),
    })),
  };
}

export async function createFamilyInvite(familyName: string, user: VkUserProfile) {
  if (!familyApiEnabled()) return { token: crypto.randomUUID().replaceAll("-", ""), expiresInDays: 30 };
  return api<{ token: string; expiresInDays: number }>("/api/family/invite", {
    method: "POST",
    body: JSON.stringify({ familyName, profile: profile(user) }),
  });
}

export async function joinRemoteFamily(token: string, user: VkUserProfile) {
  if (!familyApiEnabled()) return { familyId: "local-family", familyName: "Семья Ивановых", joined: true };
  return api<{ familyId: string; familyName: string; joined: boolean }>("/api/family/join", {
    method: "POST",
    body: JSON.stringify({ token, profile: profile(user) }),
  });
}
