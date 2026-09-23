import type { Story } from "../../domain/story";

const DRAFT_KEY = "family-stories-draft-v1";

export type StoredStoryDraft = Pick<
  Story,
  "title" | "body" | "photoUrl" | "photos" | "photoEdits" | "format" | "categories"
>;

export function readStoryDraft(): Partial<Story> | null {
  try {
    const value = window.localStorage.getItem(DRAFT_KEY);
    return value ? (JSON.parse(value) as Partial<Story>) : null;
  } catch {
    return null;
  }
}

export function writeStoryDraft(draft: StoredStoryDraft) {
  window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

export function clearStoryDraft() {
  window.localStorage.removeItem(DRAFT_KEY);
}
