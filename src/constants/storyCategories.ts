import type { StoryCategory } from "../domain/story";

export const storyCategories: StoryCategory[] = [
  "История",
  "Сказка",
  "Потешка",
  "Пестушка",
  "Традиция",
  "Рецепт",
  "Другое",
];

export function storyCategoryLabel(category: StoryCategory) {
  return category;
}
