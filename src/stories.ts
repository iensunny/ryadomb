export type StoryKind = "audio" | "text" | "photo";
export type CoverKind = "linen" | "dark" | "walnut";

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

export function storyPhotoTokenRe() {
  return /\[\[photo:([^\]]+)\]\]/g;
}

export function firstStoryPhoto(
  story: Pick<Story, "body" | "photoUrl" | "photos">,
) {
  const photos = story.photos ?? {};
  if (story.body) {
    for (const match of story.body.matchAll(storyPhotoTokenRe())) {
      const url = photos[match[1]];
      if (url) return url;
    }
  }
  return Object.values(photos)[0] ?? story.photoUrl;
}

export function storyPlainExcerpt(body?: string, max = 86) {
  const text = (body ?? "")
    .replace(storyPhotoTokenRe(), " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.slice(0, max) || "Семейная история";
}

export function storyKindLabel(story: Story) {
  if (story.kind === "audio") return `Аудио · ${story.duration ?? "0:00"}`;
  if (firstStoryPhoto(story)) return "С фото";
  return "Текст";
}

export type Book = {
  id: string;
  title: string;
  cover: CoverKind;
  storyIds: string[];
};

export const seedStories: Story[] = [
  {
    id: "2",
    kind: "text",
    title: "Как мы ездили на дачу",
    author: "Мама",
    when: "3 дня назад",
    body: "В тот год мы впервые поехали на дачу всей семьёй. Дедушка вёз банки с вареньем, а я всю дорогу считала берёзы за окном.",
    selected: true,
  },
  {
    id: "4",
    kind: "text",
    title: "Первый снег в Нягани",
    author: "Папа",
    when: "в ноябре",
    body: "Снег выпал так тихо, что утром двор казался новой белой страницей.\n\n[[photo:snow]]\n\nМы вышли во двор в валенках и долго стояли, боясь ступить на чистый снег.",
    photoUrl:
      "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=900&q=80",
    photos: {
      snow: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=900&q=80",
    },
    selected: true,
  },
];

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

export const rhymes = [
  {
    id: "r1",
    title: "Сорока-белобока",
    body: "Сорока-белобока кашку варила, деток кормила...",
  },
  {
    id: "r2",
    title: "Ладушки",
    body: "Ладушки, ладушки, где были? У бабушки.",
  },
  {
    id: "r3",
    title: "Баю-баюшки-баю",
    body: "Баю-баюшки-баю, не ложися на краю.",
  },
];

export const fairyTales = [
  {
    id: "f1",
    title: "Репка",
    body: "Посадил дед репку. Выросла репка большая-пребольшая.",
  },
  {
    id: "f2",
    title: "Колобок",
    body: "Жили-были старик со старухой. Испекла старуха колобок.",
  },
  {
    id: "f3",
    title: "Теремок",
    body: "Стоит в поле теремок. Он не низок, не высок.",
  },
];

export const familyMembers = [
  { id: "m1", name: "Мама", role: "Владелец семьи", initials: "М" },
  { id: "m2", name: "Бабушка Валя", role: "Участник", initials: "В" },
  { id: "m3", name: "Дедушка Игорь", role: "Участник", initials: "И" },
  { id: "m4", name: "Папа", role: "Участник", initials: "П" },
];
