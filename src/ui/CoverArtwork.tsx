import type { BookCoverDesign, CoverKind } from "../domain/book";

export const defaultCoverDesign: BookCoverDesign = {
  photoX: 0, photoY: 0, photoZoom: 1,
  textX: 50, textY: 32, textScale: 1,
  logoX: 50, logoY: 90, logoScale: 1,
  textColor: "dark", logoColor: "dark",
  overlay: "none", overlayIntensity: 30,
};

type Props = {
  title: string;
  subtitle?: string;
  cover: CoverKind;
  design?: BookCoverDesign;
  selected?: "photo" | "text" | "logo";
  onSelect?: (selected: "photo" | "text" | "logo") => void;
  onPointerDown?: (event: React.PointerEvent, selected: "photo" | "text" | "logo") => void;
};

export function CoverArtwork({ title, subtitle, cover, design: value, selected, onSelect, onPointerDown }: Props) {
  const design = { ...defaultCoverDesign, ...value };
  const lightText = design.textColor === "light";
  const lightLogo = design.logoColor === "light";
  return <div
    className={`cover-artwork ${cover} ${design.image ? "has-photo" : ""}`}
    onPointerDown={(event) => { if (event.target === event.currentTarget) { onSelect?.("photo"); onPointerDown?.(event, "photo"); } }}
  >
    {design.image && <img className="cover-artwork-photo" src={design.image} alt="" draggable={false} style={{ transform: `translate(${design.photoX}%, ${design.photoY}%) scale(${design.photoZoom})` }} />}
    {design.overlay !== "none" && <div className={`cover-artwork-overlay ${design.overlay}`} style={{ opacity: design.overlayIntensity / 100 }} />}
    <div className={`cover-artwork-text ${selected === "text" ? "selected" : ""}`} style={{ left: `${design.textX}%`, top: `${design.textY}%`, transform: `translate(-50%, -50%) scale(${design.textScale})`, color: lightText ? "#fffdf7" : "#432d21" }} onPointerDown={(event) => { onSelect?.("text"); onPointerDown?.(event, "text"); }}>
      <h2>{title || "Название книги"}</h2>{subtitle?.trim() && <p>{subtitle}</p>}
    </div>
    <div className={`cover-artwork-logo ${selected === "logo" ? "selected" : ""}`} style={{ left: `${design.logoX}%`, top: `${design.logoY}%`, transform: `translate(-50%, -50%) scale(${design.logoScale})` }} onPointerDown={(event) => { onSelect?.("logo"); onPointerDown?.(event, "logo"); }}>
      <img src="/brand/logo-primary-cropped.png" alt="Семейные истории" draggable={false} style={{ filter: lightLogo ? "brightness(0) invert(1)" : "none" }} />
    </div>
  </div>;
}
