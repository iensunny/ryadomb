import type { Story } from "../domain/story";

export type TextBlock = { type: "text"; key: string; value: string };
export type PhotoBlock = { type: "photo"; key: string; url: string };
export type EditorBlock = TextBlock | PhotoBlock;

let blockSeq = 0;

function nextKey(prefix: string) {
  blockSeq += 1;
  return `${prefix}-${blockSeq}`;
}

export function storyPhotoTokenRe() {
  return /\[\[photo:([^\]]+)\]\]/g;
}

export function storyPhotoTokenSplitRe() {
  return /(\[\[photo:[^\]]+\]\])/g;
}

export function firstStoryPhoto(
  story: Pick<Story, "body" | "photoUrl" | "photos">,
) {
  const photos = story.photos ?? {};
  if (story.body) {
    for (const match of story.body.matchAll(storyPhotoTokenRe())) {
      const url = photos[match[1]];
      if (url) return url;
    }
  }
  return Object.values(photos)[0] ?? story.photoUrl;
}

export function storyPlainText(body?: string) {
  return (body ?? "")
    .replace(storyPhotoTokenRe(), "\n\n")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/•••/g, "· · ·")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function storyPlainExcerpt(body?: string, max = 86) {
  const text = storyPlainText(body).replace(/\s+/g, " ").trim();
  return text.slice(0, max) || "Семейная история";
}

export function storyKindLabel(story: Story) {
  if (story.kind === "audio") return `Аудио · ${story.duration ?? "0:00"}`;
  if (firstStoryPhoto(story)) return "С фото";
  return "Текст";
}

export function blocksFromStory(story?: Story): EditorBlock[] {
  const photos = { ...(story?.photos ?? {}) };
  if (story?.photoUrl && Object.keys(photos).length === 0) {
    photos.cover = story.photoUrl;
  }

  const source = story?.body ?? "";
  const chunks = source.length
    ? source.split(storyPhotoTokenSplitRe()).filter((chunk) => chunk.length > 0)
    : [""];

  const blocks: EditorBlock[] = [];
  for (const chunk of chunks) {
    const photo = chunk.match(/^\[\[photo:([^\]]+)\]\]$/);
    if (photo) {
      const url = photos[photo[1]];
      if (url) blocks.push({ type: "photo", key: photo[1], url });
      continue;
    }

    blocks.push({
      type: "text",
      key: nextKey("t"),
      value: chunk.replace(/^\n+/, "").replace(/\n+$/, ""),
    });
  }

  if (!blocks.some((block) => block.type === "photo")) {
    const fallback = firstStoryPhoto(story ?? {});
    if (fallback) {
      blocks.push({ type: "photo", key: nextKey("p"), url: fallback });
    }
  }

  if (blocks.length === 0 || blocks[0].type !== "text") {
    blocks.unshift({ type: "text", key: nextKey("t"), value: "" });
  }
  if (blocks[blocks.length - 1].type !== "text") {
    blocks.push({ type: "text", key: nextKey("t"), value: "" });
  }

  return blocks;
}

export function createPhotoBlock(url: string): PhotoBlock {
  return { type: "photo", key: nextKey("p"), url };
}

export function createTextBlock(value = ""): TextBlock {
  return { type: "text", key: nextKey("t"), value };
}

export function isPhotoBlock(block: EditorBlock): block is PhotoBlock {
  return block.type === "photo";
}

export function serializeBlocks(blocks: EditorBlock[]) {
  const photos: Record<string, string> = {};
  const parts: string[] = [];

  for (const block of blocks) {
    if (block.type === "text") {
      const value = block.value.trim();
      if (value) parts.push(value);
      continue;
    }
    photos[block.key] = block.url;
    parts.push(`[[photo:${block.key}]]`);
  }

  const photoUrl = Object.values(photos)[0];
  return {
    body: parts.join("\n\n"),
    photos,
    photoUrl,
  };
}
