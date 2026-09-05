export type StoryKind = "audio" | "text" | "photo";
export type CoverKind = "linen" | "dark" | "walnut";

export type Story = {
  id: string;
  kind: StoryKind;
  title: string;
  author: string;
  when: string;
  duration?: string;
  body?: string;
  photoUrl?: string;
  selected?: boolean;
};

export const seedStories: Story[] = [
  {
    id: "1",
    kind: "audio",
    title: "Колыбельная бабушки Вали",
    author: "Бабушка Валя",
    when: "вчера",
    duration: "2:14",
    body: "Спи, моя радость, усни, в доме погасли огни...",
    selected: true,
  },
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
    id: "3",
    kind: "audio",
    title: "Сказка про лису и зайца",
    author: "Дедушка Игорь",
    when: "на прошлой неделе",
    duration: "5:40",
    body: "Жили-были лиса да заяц. У лисы была избушка ледяная, а у зайца лубяная...",
  },
  {
    id: "4",
    kind: "photo",
    title: "Первый снег в Нягани",
    author: "Папа",
    when: "в ноябре",
    body: "Снег выпал так тихо, что утром двор казался новой белой страницей.",
    photoUrl:
      "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=900&q=80",
    selected: true,
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
