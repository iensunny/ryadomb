import type { Story } from "../domain/story";

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
