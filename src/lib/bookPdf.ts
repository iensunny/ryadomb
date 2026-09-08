import { jsPDF } from "jspdf";
import bridge from "@vkontakte/vk-bridge";
import {
  firstStoryPhoto,
  storyPhotoTokenRe,
  type CoverKind,
  type Story,
} from "../stories";

const coverColors: Record<CoverKind, string> = {
  linen: "#cdb894",
  dark: "#2c1a11",
  walnut: "#6d452a",
};

const coverTitles: Record<CoverKind, string> = {
  linen: "Лён",
  dark: "Тёмная",
  walnut: "Орех",
};

type FontCache = { regular: string; italic: string };
let fontCache: Promise<FontCache> | null = null;

function arrayBufferToBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

async function loadFonts() {
  if (!fontCache) {
    fontCache = (async () => {
      const [regular, italic] = await Promise.all([
        fetch("/fonts/NotoSerif-Regular.ttf").then((r) => r.arrayBuffer()),
        fetch("/fonts/NotoSerif-Italic.ttf").then((r) => r.arrayBuffer()),
      ]);
      return {
        regular: arrayBufferToBase64(regular),
        italic: arrayBufferToBase64(italic),
      };
    })();
  }
  return fontCache;
}

function registerFonts(doc: jsPDF, fonts: FontCache) {
  doc.addFileToVFS("NotoSerif-Regular.ttf", fonts.regular);
  doc.addFileToVFS("NotoSerif-Italic.ttf", fonts.italic);
  doc.addFont("NotoSerif-Regular.ttf", "NotoSerif", "normal");
  doc.addFont("NotoSerif-Italic.ttf", "NotoSerif", "italic");
}

function plainStoryText(body?: string) {
  return (body ?? "")
    .replace(storyPhotoTokenRe(), "\n\n")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/•••/g, "· · ·")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function wrapLines(doc: jsPDF, text: string, maxWidth: number) {
  return doc.splitTextToSize(text, maxWidth) as string[];
}

async function loadImageData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const blob = await response.blob();
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    const dims = await new Promise<{ w: number; h: number }>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
      img.onerror = reject;
      img.src = dataUrl;
    });
    return { dataUrl, ...dims };
  } catch {
    return null;
  }
}

function safeFilename(title: string) {
  return (
    title
      .trim()
      .replace(/[^\p{L}\p{N}\-_ ]+/gu, "")
      .replace(/\s+/g, "-")
      .slice(0, 48) || "semeynaya-kniga"
  );
}

async function savePdf(doc: jsPDF, filename: string) {
  const blob = doc.output("blob");
  const objectUrl = URL.createObjectURL(blob);

  try {
    await bridge.send("VKWebAppDownloadFile", {
      url: objectUrl,
      filename,
    });
    return;
  } catch {
    // Локально и на desktop bridge может не скачать blob — fallback.
  }

  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 30_000);
}

export async function downloadBookPdf(options: {
  bookTitle: string;
  cover: CoverKind;
  stories: Story[];
}) {
  const { bookTitle, cover, stories } = options;
  const fonts = await loadFonts();
  const doc = new jsPDF({
    unit: "mm",
    format: "a5",
    orientation: "portrait",
  });
  registerFonts(doc, fonts);

  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentW = pageW - margin * 2;

  doc.setFillColor(coverColors[cover]);
  doc.rect(0, 0, pageW, pageH, "F");
  doc.setFillColor("#fffaf2");
  doc.roundedRect(10, 12, pageW - 20, pageH - 24, 4, 4, "F");
  doc.setFont("NotoSerif", "normal");
  doc.setTextColor("#3a2417");
  doc.setFontSize(11);
  doc.text("Семейные истории", pageW / 2, 36, { align: "center" });
  doc.setFontSize(22);
  const titleLines = wrapLines(doc, bookTitle, contentW - 8);
  let titleY = 58;
  for (const line of titleLines) {
    doc.text(line, pageW / 2, titleY, { align: "center" });
    titleY += 10;
  }
  doc.setFont("NotoSerif", "italic");
  doc.setFontSize(11);
  doc.setTextColor("#8a6a3f");
  doc.text(`Обложка «${coverTitles[cover]}»`, pageW / 2, pageH - 28, {
    align: "center",
  });

  for (let index = 0; index < stories.length; index += 1) {
    const story = stories[index];
    doc.addPage();
    doc.setFillColor("#f6ede1");
    doc.rect(0, 0, pageW, pageH, "F");
    doc.setFillColor("#fffaf2");
    doc.roundedRect(8, 10, pageW - 16, pageH - 20, 3, 3, "F");

    let y = margin + 4;
    doc.setFont("NotoSerif", "normal");
    doc.setTextColor("#3a2417");
    doc.setFontSize(16);
    const heading = wrapLines(doc, story.title, contentW);
    for (const line of heading) {
      doc.text(line, margin, y);
      y += 7;
    }
    y += 4;

    const photoUrl = firstStoryPhoto(story);
    if (photoUrl) {
      const image = await loadImageData(photoUrl);
      if (image) {
        const maxH = 68;
        const ratio = image.w / image.h;
        let drawW = contentW;
        let drawH = drawW / ratio;
        if (drawH > maxH) {
          drawH = maxH;
          drawW = drawH * ratio;
        }
        const x = margin + (contentW - drawW) / 2;
        const format = image.dataUrl.includes("image/png") ? "PNG" : "JPEG";
        doc.addImage(image.dataUrl, format, x, y, drawW, drawH);
        y += drawH + 6;
      }
    }

    const body = plainStoryText(story.body);
    doc.setFont("NotoSerif", "normal");
    doc.setFontSize(11);
    doc.setTextColor("#5c4632");
    const paragraphs = body
      ? body.split(/\n\s*\n/)
      : ["Текст истории пока не добавлен"];
    for (const paragraph of paragraphs) {
      const lines = wrapLines(doc, paragraph.trim(), contentW);
      for (const line of lines) {
        if (y > pageH - 28) {
          doc.addPage();
          doc.setFillColor("#f6ede1");
          doc.rect(0, 0, pageW, pageH, "F");
          doc.setFillColor("#fffaf2");
          doc.roundedRect(8, 10, pageW - 16, pageH - 20, 3, 3, "F");
          y = margin + 4;
          doc.setFont("NotoSerif", "normal");
          doc.setFontSize(11);
          doc.setTextColor("#5c4632");
        }
        doc.text(line, margin, y);
        y += 5.4;
      }
      y += 3;
    }

    doc.setFont("NotoSerif", "italic");
    doc.setFontSize(10);
    doc.setTextColor("#8a6a3f");
    doc.text(story.author, margin, pageH - 18);
    doc.setFont("NotoSerif", "normal");
    doc.setFontSize(9);
    doc.text(`${index + 1} / ${stories.length}`, pageW - margin, pageH - 18, {
      align: "right",
    });
  }

  await savePdf(doc, `${safeFilename(bookTitle)}.pdf`);
}
