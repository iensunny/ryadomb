import { useRef, useState } from "react";
import type { Book, BookCoverDesign, CoverKind } from "../domain/book";
import { covers } from "../constants/covers";
import { CoverArtwork, defaultCoverDesign } from "./CoverArtwork";

type Props = { book: Book; onClose: () => void; onRename: (value: string) => void; onSubtitle: (value: string) => void; onCover: (value: CoverKind) => void; onDesign: (value: BookCoverDesign) => void };

async function imageData(file: File) {
  const source = await createImageBitmap(file);
  const scale = Math.min(1, 1800 / Math.max(source.width, source.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(source.width * scale); canvas.height = Math.round(source.height * scale);
  canvas.getContext("2d")?.drawImage(source, 0, 0, canvas.width, canvas.height);
  source.close();
  return canvas.toDataURL("image/jpeg", .86);
}

export function CoverEditor({ book, onClose, onRename, onSubtitle, onCover, onDesign }: Props) {
  const design = { ...defaultCoverDesign, ...book.coverDesign };
  const [selected, setSelected] = useState<"photo" | "text" | "logo">("text");
  const drag = useRef<{ selected: "photo" | "text" | "logo"; x: number; y: number; startX: number; startY: number } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  function patch(changes: Partial<BookCoverDesign>) { onDesign({ ...design, ...changes }); }
  function pointerDown(event: React.PointerEvent, item: "photo" | "text" | "logo") {
    event.preventDefault(); event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    const x = item === "photo" ? design.photoX : item === "text" ? design.textX : design.logoX;
    const y = item === "photo" ? design.photoY : item === "text" ? design.textY : design.logoY;
    drag.current = { selected: item, x: event.clientX, y: event.clientY, startX: x, startY: y };
  }
  function pointerMove(event: React.PointerEvent) {
    if (!drag.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = (event.clientX - drag.current.x) / rect.width * 100;
    const dy = (event.clientY - drag.current.y) / rect.height * 100;
    if (drag.current.selected === "photo") patch({ photoX: Math.max(-45, Math.min(45, drag.current.startX + dx)), photoY: Math.max(-45, Math.min(45, drag.current.startY + dy)) });
    if (drag.current.selected === "text") patch({ textX: Math.max(12, Math.min(88, drag.current.startX + dx)), textY: Math.max(10, Math.min(82, drag.current.startY + dy)) });
    if (drag.current.selected === "logo") patch({ logoX: Math.max(12, Math.min(88, drag.current.startX + dx)), logoY: Math.max(12, Math.min(94, drag.current.startY + dy)) });
  }
  const scale = selected === "photo" ? design.photoZoom : selected === "text" ? design.textScale : design.logoScale;
  return <div className="cover-editor-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="cover-editor-sheet full-cover-editor" role="dialog" aria-modal="true" aria-labelledby="cover-editor-title">
      <button className="cover-editor-close" onClick={onClose} aria-label="Закрыть">←</button>
      <div className="cover-editor-stage" onPointerMove={pointerMove} onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }}>
        <CoverArtwork title={book.title} subtitle={book.coverSubtitle} cover={book.cover} design={design} selected={selected} onSelect={setSelected} onPointerDown={pointerDown} />
      </div>
      <h2 id="cover-editor-title">Редактор обложки</h2>
      <div className="cover-object-tabs"><button className={selected === "photo" ? "active" : ""} onClick={() => setSelected("photo")}>Фото</button><button className={selected === "text" ? "active" : ""} onClick={() => setSelected("text")}>Текст</button><button className={selected === "logo" ? "active" : ""} onClick={() => setSelected("logo")}>Логотип</button></div>
      {selected === "photo" && <div className="cover-tool-panel"><div className="cover-photo-actions"><button onClick={() => fileRef.current?.click()}>{design.image ? "Заменить фото" : "Добавить фото"}</button>{design.image && <button onClick={() => patch({ image: undefined, photoX: 0, photoY: 0, photoZoom: 1 })}>Убрать фото</button>}</div><input ref={fileRef} type="file" accept="image/*" hidden onChange={async (event) => { const file = event.target.files?.[0]; if (file) patch({ image: await imageData(file), photoX: 0, photoY: 0, photoZoom: 1 }); event.target.value = ""; }} /><label>Масштаб фото<input type="range" min="1" max="3" step=".05" value={design.photoZoom} onChange={(event) => patch({ photoZoom: Number(event.target.value) })} /></label><div className="cover-choice-row"><button className={design.overlay === "none" ? "active" : ""} onClick={() => patch({ overlay: "none" })}>Без подложки</button><button className={design.overlay === "dark" ? "active" : ""} onClick={() => patch({ overlay: "dark" })}>Тёмная</button><button className={design.overlay === "light" ? "active" : ""} onClick={() => patch({ overlay: "light" })}>Светлая</button></div>{design.overlay !== "none" && <label>Интенсивность<input type="range" min="0" max="70" step="5" value={design.overlayIntensity} onChange={(event) => patch({ overlayIntensity: Number(event.target.value) })} /></label>}<div className="cover-style-tabs">{covers.map((item) => <button key={item.id} className={book.cover === item.id ? "active" : ""} onClick={() => onCover(item.id)}>{item.title}</button>)}</div></div>}
      {selected === "text" && <div className="cover-tool-panel"><label>Название<input className="field" value={book.title} onChange={(event) => onRename(event.target.value)} /></label><label>Подпись<input className="field" value={book.coverSubtitle ?? ""} onChange={(event) => onSubtitle(event.target.value)} /></label><div className="cover-choice-row"><button className={design.textColor === "dark" ? "active" : ""} onClick={() => patch({ textColor: "dark" })}>Тёмный текст</button><button className={design.textColor === "light" ? "active" : ""} onClick={() => patch({ textColor: "light" })}>Светлый текст</button></div></div>}
      {selected === "logo" && <div className="cover-tool-panel"><div className="cover-choice-row"><button className={design.logoColor === "dark" ? "active" : ""} onClick={() => patch({ logoColor: "dark" })}>Тёмный</button><button className={design.logoColor === "light" ? "active" : ""} onClick={() => patch({ logoColor: "light" })}>Светлый</button></div></div>}
      {selected !== "photo" && <label className="cover-scale-control">Размер<input type="range" min=".6" max="1.7" step=".05" value={scale} onChange={(event) => selected === "text" ? patch({ textScale: Number(event.target.value) }) : patch({ logoScale: Number(event.target.value) })} /></label>}
      <p className="cover-drag-hint">Выберите объект на обложке и перетащите его в нужное место.</p>
      <button className="btn-primary cover-editor-done" onClick={onClose}>Готово</button>
    </section>
  </div>;
}
