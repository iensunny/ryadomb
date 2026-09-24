import type { Book } from "../domain/book";
import type { Story } from "../domain/story";

export type RemoteState = { stories: Story[]; book: Book };
const endpoint = String(import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

function headers() {
  return { "content-type": "application/json", "x-vk-launch-params": window.location.search.slice(1) };
}

export function remoteStateEnabled() {
  return Boolean(endpoint && !import.meta.env.DEV);
}

export async function readRemoteState(): Promise<RemoteState | null> {
  const response = await fetch(`${endpoint}/api/state`, { headers: headers() });
  if (!response.ok) throw new Error(`State loading failed: ${response.status}`);
  return (await response.json() as { state: RemoteState | null }).state;
}

export async function writeRemoteState(state: RemoteState) {
  const response = await fetch(`${endpoint}/api/state`, { method: "PUT", headers: headers(), body: JSON.stringify(state) });
  if (!response.ok) throw new Error(`State saving failed: ${response.status}`);
}
