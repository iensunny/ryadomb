import type { Story } from "../domain/story";

export const seedStories: Story[] = [
  {
    id: "demo-history",
    kind: "text",
    title: "Как дедка посадил репку",
    author: "Дедка",
    when: "демонстрация",
    categories: ["История", "Традиция"],
    body: "Весной дедка выбрал самое солнечное место в огороде, разрыхлил землю и посадил маленькое семечко. Каждый день он поливал грядку, а вскоре над землёй появились первые зелёные листочки.",
    selected: true,
  },
  {
    id: "demo-pestushka",
    kind: "text",
    title: "Пестушка от бабки",
    author: "Бабка",
    when: "демонстрация",
    categories: ["Пестушка"],
    body: "Потягунушки, порастунушки, поперёк толстунушки, а в ножки — ходунушки, а в ручки — хватунушки.",
    selected: true,
  },
  {
    id: "demo-rhyme",
    kind: "text",
    title: "Потешка про кошку и мышку",
    author: "Внучка",
    when: "демонстрация",
    categories: ["Потешка"],
    body: "Кошка песенку поёт, мышка зёрнышки несёт. Жучка хвостиком виляет — всех на ужин приглашает.",
    selected: true,
  },
  {
    id: "demo-tale",
    kind: "text",
    title: "Репка",
    author: "Семья",
    when: "демонстрация",
    categories: ["Сказка"],
    body: "Посадил дед репку. Выросла репка большая-пребольшая. Позвал дед бабку, бабка — внучку, внучка — Жучку, Жучка — кошку, а кошка — мышку. Взялись все дружно и вытянули репку.",
    selected: true,
  },
  {
    id: "demo-photo",
    kind: "text",
    title: "День большого урожая",
    author: "Внучка",
    when: "демонстрация",
    categories: ["История", "Традиция"],
    body: "Когда репку наконец вытянули, все собрались у грядки и сфотографировались на память.\n\n[[photo:harvest]]\n\nА вечером бабка накрыла стол, и каждый рассказал, как помогал общему делу.",
    photoUrl:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80",
    photos: {
      harvest: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80",
    },
    selected: true,
  },
];
