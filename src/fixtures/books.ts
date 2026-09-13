import type { Book } from "../domain/book";
import { seedStories } from "./stories";

export const emptyBook: Book = {
  id: "book-family",
  title: "Наша семейная книга",
  cover: "linen",
  storyIds: [],
};

export const seedBooks: Book[] = [
  {
    ...emptyBook,
    storyIds: seedStories.map((story) => story.id),
  },
];
