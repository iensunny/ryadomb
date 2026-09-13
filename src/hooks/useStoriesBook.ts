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

const initialStories = usingBridgeMock ? seedStories : [];
const initialBook = usingBridgeMock ? seedBooks[0] : emptyBook;

export function useStoriesBook(session: AppSession | null) {
  const [stories, setStories] = useState<Story[]>(initialStories);
  const [book, setBook] = useState<Book>(initialBook);

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
      storyIds: current.storyIds.includes(storyId)
        ? current.storyIds.filter((id) => id !== storyId)
        : [...current.storyIds, storyId],
    }));
  }

  function updateActiveBook(changes: Partial<Book>) {
    setBook((current) => ({ ...current, ...changes }));
  }

  function reorderBookStories(activeId: string, overId: string) {
    setBook((current) => {
      const from = current.storyIds.indexOf(activeId);
      const to = current.storyIds.indexOf(overId);
      if (from < 0 || to < 0) return current;
      const next = [...current.storyIds];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return { ...current, storyIds: next };
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
      storyIds: current.storyIds.filter((id) => id !== storyId),
    }));
  }

  function setCover(cover: CoverKind) {
    updateActiveBook({ cover });
  }

  return {
    stories,
    book,
    members,
    allBookStories,
    toggleBook,
    updateActiveBook,
    reorderBookStories,
    saveStory,
    deleteStory,
    setCover,
  };
}
