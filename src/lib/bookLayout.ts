import { jsPDF } from "jspdf";
import type { BookCoverDesign, BookItem, CoverKind } from "../domain/book";
import type { Story } from "../domain/story";
import { blocksFromStory, storyPlainText } from "./storyFormat";

export type BookOptions = { bookTitle: string; cover: CoverKind; coverSubtitle?: string; coverDesign?: BookCoverDesign; items: BookItem[]; stories: Story[] };
export type BookText = { text: string; x: number; y: number; size: number; italic?: boolean; center?: boolean };
export type BookImage = { url: string; x: number; y: number; w: number; h: number };
export type PrintPage = { text: BookText[]; images: BookImage[]; number: number };
export const PAPER = "#fbf7ef";
export const INK = "#432d21";
let fonts: Promise<string[]> | undefined;
export async function bookDocument() {
  fonts ??= Promise.all(["Regular", "Italic"].map(async (name) => {
    const response = await fetch(`/fonts/NotoSerif-${name}.ttf`);
    if (!response.ok) throw new Error("Не удалось загрузить шрифт книги");
    const bytes = new Uint8Array(await response.arrayBuffer());
    let binary = "";
    for (let i = 0; i < bytes.length; i += 8192) binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
    return btoa(binary);
  })).catch((error) => { fonts = undefined; throw error; });
  const data = await fonts;
  const doc = new jsPDF({ unit: "mm", format: [148, 210], compress: true });
  ["normal", "italic"].forEach((style, index) => {
    doc.addFileToVFS(`Book-${style}.ttf`, data[index]);
    doc.addFont(`Book-${style}.ttf`, "Book", style);
  });
  return doc;
}

export async function imageDimensions(url: string) {
  return new Promise<{ w: number; h: number }>((resolve, reject) => {
    const image = new Image();
    const timer = setTimeout(() => reject(new Error("Истекло время загрузки изображения книги")), 15000);
    image.onload = () => { clearTimeout(timer); resolve({ w: image.naturalWidth, h: image.naturalHeight }); };
    image.onerror = () => { clearTimeout(timer); reject(new Error("Не удалось загрузить изображение книги")); };
    image.src = url;
  });
}

// Millimetres and the same embedded font are used by both the reader and PDF.
export async function layoutBook(options: BookOptions): Promise<PrintPage[]> {
  const doc = await bookDocument();
  const pages: PrintPage[] = [];
  const newPage = () => {
    const page: PrintPage = { text: [], images: [], number: pages.length + 1 };
    pages.push(page);
    return page;
  };
  function lines(text: string, size: number, italic = false, width = 112): string[] {
    doc.setFont("Book", italic ? "italic" : "normal");
    doc.setFontSize(size);
    return doc.splitTextToSize(text, width);
  }
  for (const item of options.items) {
    if (item.type === "page") {
      if (!item.text.trim()) { newPage(); continue; }
      const wrapped = lines(item.text, 22);
      for (let offset = 0; offset < wrapped.length; offset += 15) {
        const page = newPage();
        const chunk = wrapped.slice(offset, offset + 15);
        chunk.forEach((text, index) => page.text.push({ text, x: 74, y: 105 - (chunk.length - 1) * 5 + index * 10, size: 22, center: true }));
      }
      continue;
    }
    const story = options.stories.find((candidate) => candidate.id === item.storyId);
    if (!story) continue;
    let page = newPage();
    let y = 22;
    for (const text of lines(story.author, 10)) {
      page.text.push({ text, x: 18, y, size: 10 }); y += 5;
    }
    y += 13;
    const continuePage = () => { page = newPage(); y = 24; };
    for (const text of lines(story.title, 25)) {
      if (y > 174) continuePage();
      page.text.push({ text, x: 18, y, size: 25 }); y += 11;
    }
    y += 11;
    for (const block of blocksFromStory(story)) {
      if (block.type === "photo") {
        const dimensions = await imageDimensions(block.url);
        const scale = Math.min(112 / dimensions.w, 95 / dimensions.h);
        const w = dimensions.w * scale, h = dimensions.h * scale;
        if (y + h > 188) continuePage();
        page.images.push({ url: block.url, x: (148 - w) / 2, y: y - 3, w, h });
        y += h + 8;
        if (block.edit?.caption) {
          for (const text of lines(block.edit.caption, 9, true)) {
            if (y > 185) continuePage();
            page.text.push({ text, x: 18, y, size: 9, italic: true }); y += 5;
          }
          y += 4;
        }
        continue;
      }
      for (const paragraph of storyPlainText(block.value).split(/\n\s*\n/).filter(Boolean)) {
        const wrapped = lines(paragraph, 12);
        if (y + Math.min(2, wrapped.length) * 6.8 > 188) continuePage();
        for (const text of wrapped) {
          if (y > 185) continuePage();
          page.text.push({ text, x: 18, y, size: 12 }); y += 6.8;
        }
        y += 5;
      }
    }
  }
  return pages;
}
