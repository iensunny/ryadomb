export type StoryKind = "audio" | "text" | "photo";
export type StoryCategory =
  | "История"
  | "Сказка"
  | "Потешка"
  | "Пестушка"
  | "Традиция"
  | "Рецепт"
  | "Другое";

export type StoryFormat = {
  dropCap?: boolean;
};

export type PhotoAspect = "landscape" | "portrait";
export type PhotoBackdrop = "none" | "dark" | "light";

export type PhotoEdit = {
  sourceUrl: string;
  aspect: PhotoAspect;
  zoom: number;
  panX: number;
  panY: number;
  backdrop: PhotoBackdrop;
  backdropIntensity: number;
  caption: string;
};

export type Story = {
  id: string;
  kind: StoryKind;
  title: string;
  author: string;
  when: string;
  categories?: StoryCategory[];
  duration?: string;
  body?: string;
  photoUrl?: string;
  photos?: Record<string, string>;
  photoEdits?: Record<string, PhotoEdit>;
  format?: StoryFormat;
  selected?: boolean;
};
