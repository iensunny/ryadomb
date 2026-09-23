export type CoverKind = "linen" | "botanical" | "familyLine" | "walnut";

export type BookItem =
  | { id: string; type: "story"; storyId: string }
  | { id: string; type: "page"; text: string };

export type BookCoverDesign = {
  image?: string;
  photoX: number;
  photoY: number;
  photoZoom: number;
  textX: number;
  textY: number;
  textScale: number;
  logoX: number;
  logoY: number;
  logoScale: number;
  textColor: "light" | "dark";
  logoColor: "light" | "dark";
  overlay: "none" | "light" | "dark";
  overlayIntensity: number;
};

export type Book = {
  id: string;
  title: string;
  coverSubtitle?: string;
  cover: CoverKind;
  coverDesign?: BookCoverDesign;
  items: BookItem[];
};
