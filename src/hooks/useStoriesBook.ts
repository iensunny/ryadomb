import { useEffect, useMemo, useState } from "react";
import type { Book, CoverKind } from "../domain/book";
import type { Story } from "../domain/story";
import { emptyBook, seedBooks } from "../fixtures/books";
import { familyMembers } from "../fixtures/family";
import { seedStories } from "../fixtures/stories";
import { buildAllBookStories } from "../lib/catalogStories";
import { buildFamilyMembers } from "../lib/familyMembers";
import { usingBridgeMock } from "../vk/bridge";
import type { AppSession } from "../vk/session";

export type StoryDraft = Omit<Story, "id" | "author" | "when">;

const initialStories = seedStories;
const initialBook = usingBridgeMock ? seedBooks[0] : emptyBook;
const STORIES_KEY = "family-stories-data-v1";
const BOOK_KEY = "family-stories-book-v1";
const DATA_VERSION_KEY = "family-stories-data-version";
const DATA_VERSION = "4";
const LEGACY_DEMO_IDS = new Set(["2", "4"]);

function readStored<T>(key: string, fallback: T): T {
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function readInitialStories(): Story[] {
  const stored = readStored<Story[]>(STORIES_KEY, initialStories);
  if (window.localStorage.getItem(DATA_VERSION_KEY) === DATA_VERSION) {
    return stored;
  }

  const cleanDemoPestushka = seedStories.find((story) => story.id === "demo-pestushka");
  const cleaned = stored.map((story) => story.id === "demo-pestushka" && cleanDemoPestushka ? cleanDemoPestushka : story);
  const userStories = cleaned.filter((story) => !LEGACY_DEMO_IDS.has(story.id));
  const existingIds = new Set(userStories.map((story) => story.id));
  const migrated = [
    ...seedStories.filter((story) => !existingIds.has(story.id)),
    ...userStories,
  ];
  window.localStorage.setItem(DATA_VERSION_KEY, DATA_VERSION);
  window.localStorage.setItem(STORIES_KEY, JSON.stringify(migrated));
  return migrated;
}

function readInitialBook(): Book {
  const stored = readStored<Book & { storyIds?: string[] }>(BOOK_KEY, initialBook);
  // Previous fixed section dividers are intentionally not migrated: custom pages replace them.
  const ids = stored.items
    ? stored.items.filter((item) => item.type !== "story" || !LEGACY_DEMO_IDS.has(item.storyId))
    : (stored.storyIds ?? []).filter((id) => !LEGACY_DEMO_IDS.has(id)).map((storyId) => ({ id: `story-${storyId}`, type: "story" as const, storyId }));
  const currentIds = new Set(ids.filter((item) => item.type === "story").map((item) => item.storyId));
  return {
    ...stored,
    items: [...seedStories.filter((story) => !currentIds.has(story.id)).map((story) => ({ id: `story-${story.id}`, type: "story" as const, storyId: story.id })), ...ids],
  };
}

export function useStoriesBook(session: AppSession | null) {
  const [stories, setStories] = useState<Story[]>(() =>
    readInitialStories().map((story) => ({
      ...story,
      categories: story.categories?.length ? story.categories : ["История"],
    })),
  );
  const [book, setBook] = useState<Book>(readInitialBook);

  useEffect(() => {
    window.localStorage.setItem(STORIES_KEY, JSON.stringify(stories));
  }, [stories]);

  useEffect(() => {
    window.localStorage.setItem(BOOK_KEY, JSON.stringify(book));
  }, [book]);

  useEffect(() => {
    if (!session) return;
    setStories((list) =>
      list.map((story) =>
        story.author === "Мама"
          ? { ...story, author: session.user.firstName }
          : story,
      ),
    );
  }, [session]);

  const members = useMemo(
    () => buildFamilyMembers(session?.user, familyMembers, usingBridgeMock),
    [session],
  );

  const allBookStories = useMemo(() => buildAllBookStories(stories), [stories]);

  function toggleBook(storyId: string) {
    setBook((current) => ({
      ...current,
      items: current.items.some((item) => item.type === "story" && item.storyId === storyId)
        ? current.items.filter((item) => item.type !== "story" || item.storyId !== storyId)
        : [...current.items, { id: crypto.randomUUID(), type: "story", storyId }],
    }));
  }

  function updateActiveBook(changes: Partial<Book>) {
    setBook((current) => ({ ...current, ...changes }));
  }

  function reorderBookItems(activeId: string, overId: string) {
    setBook((current) => {
      const from = current.items.findIndex((item) => item.id === activeId);
      const to = current.items.findIndex((item) => item.id === overId);
      if (from < 0 || to < 0) return current;
      const next = [...current.items];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return { ...current, items: next };
    });
  }

  function saveStory(
    draft: StoryDraft,
    editingStoryId: string | null,
    author: string,
  ) {
    if (editingStoryId) {
      setStories((list) =>
        list.map((story) =>
          story.id === editingStoryId ? { ...story, ...draft } : story,
        ),
      );
      return editingStoryId;
    }

    const id = crypto.randomUUID();
    const story: Story = {
      ...draft,
      id,
      author,
      when: "сейчас",
    };
    setStories((list) => [story, ...list]);
    return id;
  }

  function deleteStory(storyId: string) {
    setStories((list) => list.filter((story) => story.id !== storyId));
    setBook((current) => ({
      ...current,
      items: current.items.filter((item) => item.type !== "story" || item.storyId !== storyId),
    }));
  }

  function setCover(cover: CoverKind) {
    updateActiveBook({ cover });
  }

  function addBookPage() {
    setBook((current) => ({
      ...current,
      items: [...current.items, { id: crypto.randomUUID(), type: "page", text: "" }],
    }));
  }

  function updateBookPage(pageId: string, text: string) {
    setBook((current) => ({
      ...current,
      items: current.items.map((item) => item.type === "page" && item.id === pageId ? { ...item, text } : item),
    }));
  }

  function removeBookPage(pageId: string) {
    setBook((current) => ({ ...current, items: current.items.filter((item) => item.id !== pageId) }));
  }

  function deleteFamily() {
    setStories([]);
    setBook({ ...emptyBook, items: [] });
  }

  return {
    stories,
    book,
    members,
    allBookStories,
    toggleBook,
    updateActiveBook,
    reorderBookItems,
    saveStory,
    deleteStory,
    setCover,
    addBookPage,
    updateBookPage,
    removeBookPage,
    deleteFamily,
  };
}
