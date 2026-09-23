import type { jsPDF } from "jspdf";
import { INK, PAPER, type PrintPage } from "./bookLayout";

export async function drawBookPages(doc: jsPDF, pages: PrintPage[], botanical: Uint8Array, imageData: (url: string) => Promise<Uint8Array>) {
  const imageCache = new Map<string, Uint8Array>();
  for (const page of pages) {
    doc.addPage([148, 210]);
    doc.setFillColor(PAPER); doc.rect(0, 0, 148, 210, "F");
    doc.saveGraphicsState();
    doc.setGState(doc.GState({ opacity: .10 }));
    // Match the SVG's default xMidYMid meet aspect ratio.
    const props = doc.getImageProperties(botanical);
    const scale = Math.min(27 / props.width, 43 / props.height);
    const w = props.width * scale, h = props.height * scale;
    doc.addImage(botanical, "PNG", 119 + (27 - w) / 2, 2 + (43 - h) / 2, w, h);
    doc.restoreGraphicsState();
    for (const image of page.images) {
      let data = imageCache.get(image.url);
      if (!data) { data = await imageData(image.url); imageCache.set(image.url, data); }
      doc.addImage(data, image.x, image.y, image.w, image.h);
    }
    doc.setTextColor(INK);
    for (const line of page.text) {
      doc.setFont("Book", line.italic ? "italic" : "normal"); doc.setFontSize(line.size);
      doc.text(line.text, line.x, line.y, { align: line.center ? "center" : "left" });
    }
    doc.setFont("Book", "normal"); doc.setFontSize(3.2 * 72 / 25.4);
    doc.text(String(page.number), 74, 200, { align: "center" });
  }
}
