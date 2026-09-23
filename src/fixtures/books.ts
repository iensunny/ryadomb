import type { Book } from "../domain/book";
import { seedStories } from "./stories";

export const emptyBook: Book = {
  id: "book-family",
  title: "Наша семейная книга",
  cover: "linen",
  coverDesign: {
    photoX: 0, photoY: 0, photoZoom: 1,
    textX: 50, textY: 32, textScale: 1,
    logoX: 50, logoY: 90, logoScale: 1,
    textColor: "dark", logoColor: "dark",
    overlay: "none", overlayIntensity: 30,
  },
  items: [],
};

export const seedBooks: Book[] = [
  {
    ...emptyBook,
    items: seedStories.map((story) => ({ id: `story-${story.id}`, type: "story" as const, storyId: story.id })),
  },
];
