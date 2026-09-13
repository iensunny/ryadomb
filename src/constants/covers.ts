import type { CoverKind } from "../domain/book";

export const covers: Array<{ id: CoverKind; title: string; pdfColor: string }> = [
  { id: "linen", title: "Лён", pdfColor: "#cdb894" },
  { id: "dark", title: "Тёмная", pdfColor: "#2c1a11" },
  { id: "walnut", title: "Орех", pdfColor: "#6d452a" },
];

export const coverTitles: Record<CoverKind, string> = covers.reduce(
  (acc, cover) => ({ ...acc, [cover.id]: cover.title }),
  {} as Record<CoverKind, string>,
);

export const coverPdfColors: Record<CoverKind, string> = covers.reduce(
  (acc, cover) => ({ ...acc, [cover.id]: cover.pdfColor }),
  {} as Record<CoverKind, string>,
);
