export type StoryKind = "audio" | "text" | "photo";

export type StoryFormat = {
  dropCap?: boolean;
};

export type Story = {
  id: string;
  kind: StoryKind;
  title: string;
  author: string;
  when: string;
  duration?: string;
  body?: string;
  photoUrl?: string;
  photos?: Record<string, string>;
  format?: StoryFormat;
  selected?: boolean;
};
