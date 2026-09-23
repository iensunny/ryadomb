import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { CoverArtwork } from "../ui/CoverArtwork";
import { bookDocument, layoutBook, PAPER, type BookOptions } from "./bookLayout";
import { drawBookPages } from "./bookPrint";
import { bridge, usingBridgeMock } from "../vk/bridge";

export type PreparedPdf = { url: string; filename: string } | null;

async function imageData(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Не удалось загрузить изображение для PDF");
  return new Uint8Array(await response.arrayBuffer());
}

export async function createBookPdf(options: BookOptions) {
  const [doc, pages, botanical, { default: html2canvas }] = await Promise.all([
    bookDocument(), layoutBook(options), imageData("/brand/botanical-branch-watercolor.png"), import("html2canvas"),
  ]);
  const host = document.createElement("div");
  host.className = "edition-export";
  host.innerHTML = renderToStaticMarkup(createElement(CoverArtwork, { title: options.bookTitle, subtitle: options.coverSubtitle, cover: options.cover, design: options.coverDesign }));
  document.body.appendChild(host);
  try {
    await document.fonts.ready;
    await Promise.all(Array.from(host.querySelectorAll("img")).map((image) => image.decode()));
    if (options.coverDesign?.logoColor === "light") {
      const logo = host.querySelector<HTMLImageElement>(".cover-artwork-logo img")!;
      const white = document.createElement("canvas");
      white.width = logo.naturalWidth; white.height = logo.naturalHeight;
      const context = white.getContext("2d")!;
      context.drawImage(logo, 0, 0);
      context.globalCompositeOperation = "source-in";
      context.fillStyle = "white"; context.fillRect(0, 0, white.width, white.height);
      logo.src = white.toDataURL(); logo.style.filter = "none";
      await logo.decode();
    }
    const canvas = await html2canvas(host, { scale: 3, useCORS: true, backgroundColor: PAPER, logging: false });
    doc.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 148, 210);
  } finally { host.remove(); }
  await drawBookPages(doc, pages, botanical, imageData);
  return doc;
}

export async function downloadBookPdf(options: BookOptions): Promise<PreparedPdf> {
  const doc = await createBookPdf(options);
  const filename = `${options.bookTitle.trim().replace(/[^\p{L}\p{N}\-_ ]+/gu, "").replace(/\s+/g, "-").slice(0, 48) || "semeynaya-kniga"}.pdf`;
  const url = URL.createObjectURL(doc.output("blob"));
  if (!usingBridgeMock) {
    try {
      await bridge.send("VKWebAppDownloadFile", { url, filename });
      window.setTimeout(() => URL.revokeObjectURL(url), 30_000);
      return null;
    } catch { /* Keep the generated document available through the ordinary browser link. */ }
  }
  return { url, filename };
}
