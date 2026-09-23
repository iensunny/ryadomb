import type { CoverKind } from "../domain/book";

export const covers: Array<{ id: CoverKind; title: string; pdfColor: string }> = [
  { id: "linen", title: "Тёплый лён", pdfColor: "#D7C4B1" },
  { id: "botanical", title: "Семейная ветвь", pdfColor: "#E8DDCE" },
  { id: "familyLine", title: "Одна линия", pdfColor: "#EEE5DA" },
  { id: "walnut", title: "Орех", pdfColor: "#8B6F56" },
];

export const coverTitles: Record<CoverKind, string> = covers.reduce(
  (acc, cover) => ({ ...acc, [cover.id]: cover.title }),
  {} as Record<CoverKind, string>,
);

export const coverPdfColors: Record<CoverKind, string> = covers.reduce(
  (acc, cover) => ({ ...acc, [cover.id]: cover.pdfColor }),
  {} as Record<CoverKind, string>,
);
