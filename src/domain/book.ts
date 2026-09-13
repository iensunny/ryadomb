export type CoverKind = "linen" | "dark" | "walnut";

export type Book = {
  id: string;
  title: string;
  cover: CoverKind;
  storyIds: string[];
};
