import type { Story } from "../domain/story";
import { fairyTales, rhymes } from "../fixtures/catalog";

export function rhymeStory(item: (typeof rhymes)[number]): Story {
  return {
    id: `rhyme-${item.id}`,
    kind: "text",
    title: item.title,
    author: "Потешка",
    when: "из общей библиотеки",
    body: item.body,
  };
}

export function fairyTaleStory(item: (typeof fairyTales)[number]): Story {
  return {
    id: `tale-${item.id}`,
    kind: "text",
    title: item.title,
    author: "Сказка",
    when: "из общей библиотеки",
    body: item.body,
  };
}

export function buildAllBookStories(stories: Story[]) {
  return [
    ...stories,
    ...rhymes.map(rhymeStory),
    ...fairyTales.map(fairyTaleStory),
  ];
}
