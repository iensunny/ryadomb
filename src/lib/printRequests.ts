import type { CoverKind } from "../domain/book";
import type { VkUserProfile } from "../vk/session";

const endpoint = String(import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export async function createPrintRequest(input: {
  bookId: string;
  bookTitle: string;
  pageCount: number;
  cover: CoverKind;
  copies: number;
  name: string;
  contact: string;
  comment?: string;
  user: VkUserProfile;
}) {
  if (!endpoint && import.meta.env.DEV) {
    const id = crypto.randomUUID();
    const stored = JSON.parse(window.localStorage.getItem("family-stories-print-requests-dev") || "[]") as unknown[];
    window.localStorage.setItem("family-stories-print-requests-dev", JSON.stringify([...stored, { ...input, id, status: "new", createdAt: new Date().toISOString() }]));
    return { id, status: "new" };
  }
  const response = await fetch(`${endpoint}/api/print-requests`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-vk-launch-params": window.location.search.slice(1) },
    body: JSON.stringify({ ...input, profile: { firstName: input.user.firstName, lastName: input.user.lastName, photoUrl: input.user.photoUrl } }),
  });
  const value = await response.json().catch(() => ({})) as { id?: string; status?: string; error?: string };
  if (!response.ok) throw new Error(value.error || "Print request failed");
  return value;
}
