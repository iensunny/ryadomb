import { useEffect, useRef, useState, type PointerEvent } from "react";
import type {
  PhotoAspect,
  PhotoBackdrop,
  PhotoEdit,
} from "../../domain/story";

export type PhotoEditorResult = {
  dataUrl: string;
  edit: PhotoEdit;
};

type Props = {
  file?: File;
  initial?: PhotoEdit;
  onCancel: () => void;
  onApply: (result: PhotoEditorResult) => void;
};

type Point = { x: number; y: number };

const sizes: Record<PhotoAspect, { width: number; height: number }> = {
  landscape: { width: 1440, height: 1080 },
  portrait: { width: 1080, height: 1440 },
};

export function PhotoEditorModal({ file, initial, onCancel, onApply }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const sourceUrl = useRef(initial?.sourceUrl ?? "");
  const pointers = useRef(new Map<number, Point>());
  const drag = useRef<{ point: Point; pan: Point } | null>(null);
  const pinch = useRef<{ distance: number; zoom: number } | null>(null);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [aspect, setAspect] = useState<PhotoAspect>(initial?.aspect ?? "landscape");
  const [zoom, setZoom] = useState(initial?.zoom ?? 1);
  const [pan, setPan] = useState<Point>({ x: initial?.panX ?? 0, y: initial?.panY ?? 0 });
  const [backdrop, setBackdrop] = useState<PhotoBackdrop>(initial?.backdrop ?? "none");
  const [backdropIntensity, setBackdropIntensity] = useState(initial?.backdropIntensity ?? 30);
  const [caption, setCaption] = useState(initial?.caption ?? "");

  function settings(): PhotoEdit {
    return {
      sourceUrl: sourceUrl.current,
      aspect,
      zoom,
      panX: pan.x,
      panY: pan.y,
      backdrop,
      backdropIntensity,
      caption: caption.trim(),
    };
  }

  function draw(target = canvasRef.current) {
    const image = imageRef.current;
    if (!target || !image) return;
    const size = sizes[aspect];
    target.width = size.width;
    target.height = size.height;
    const context = target.getContext("2d");
    if (!context) return;
    context.clearRect(0, 0, size.width, size.height);

    const sourceWidth = image.naturalWidth;
    const sourceHeight = image.naturalHeight;
    if (!sourceWidth || !sourceHeight) return;
    const scale = Math.max(size.width / sourceWidth, size.height / sourceHeight) * zoom;
    const width = sourceWidth * scale;
    const height = sourceHeight * scale;
    const overflowX = Math.max(0, (width - size.width) / 2);
    const overflowY = Math.max(0, (height - size.height) / 2);
    context.drawImage(
      image,
      (size.width - width) / 2 + pan.x * overflowX,
      (size.height - height) / 2 + pan.y * overflowY,
      width,
      height,
    );

    if (backdrop !== "none") {
      const rgb = backdrop === "dark" ? "0,0,0" : "255,255,255";
      const strength = backdropIntensity / 100;
      const gradient = context.createLinearGradient(0, 0, 0, size.height);
      gradient.addColorStop(0, `rgba(${rgb},${strength * 0.45})`);
      gradient.addColorStop(0.55, `rgba(${rgb},${strength * 0.12})`);
      gradient.addColorStop(1, `rgba(${rgb},${strength})`);
      context.fillStyle = gradient;
      context.fillRect(0, 0, size.width, size.height);
    }

    const text = caption.trim();
    if (text) {
      const fontSize = Math.round(size.width * 0.042);
      const maxWidth = size.width * 0.82;
      context.font = `600 ${fontSize}px Inter, Arial, sans-serif`;
      context.textAlign = "center";
      context.textBaseline = "bottom";
      context.fillStyle = backdrop === "light" ? "#432D21" : "#F8F4ED";
      context.shadowColor = backdrop === "light" ? "rgba(255,255,255,.65)" : "rgba(0,0,0,.65)";
      context.shadowBlur = 8;
      const words = text.split(/\s+/);
      const lines: string[] = [];
      let line = "";
      for (const word of words) {
        const next = line ? `${line} ${word}` : word;
        if (context.measureText(next).width <= maxWidth) line = next;
        else {
          if (line) lines.push(line);
          line = word;
        }
      }
      if (line) lines.push(line);
      lines.slice(-3).reverse().forEach((value, index) => {
        context.fillText(value, size.width / 2, size.height - size.height * 0.07 - index * fontSize * 1.28);
      });
      context.shadowBlur = 0;
    }
  }

  useEffect(() => {
    let objectUrl = "";
    const load = async () => {
      try {
        setLoadError("");
        const url = initial?.sourceUrl || (file ? (objectUrl = URL.createObjectURL(file)) : "");
        if (!url) return;
        const image = new Image();
        image.src = url;
        await image.decode();
        const bounded = document.createElement("canvas");
        const scale = Math.min(1, 2560 / Math.max(image.naturalWidth, image.naturalHeight));
        bounded.width = Math.round(image.naturalWidth * scale);
        bounded.height = Math.round(image.naturalHeight * scale);
        const context = bounded.getContext("2d");
        if (!context || !bounded.width || !bounded.height) throw new Error("invalid image");
        context.drawImage(image, 0, 0, bounded.width, bounded.height);
        sourceUrl.current = bounded.toDataURL("image/jpeg", 0.92);
        const optimized = new Image();
        optimized.src = sourceUrl.current;
        await optimized.decode();
        imageRef.current = optimized;
        setReady(true);
      } catch {
        setLoadError("Не удалось открыть фотографию. Выберите другой файл.");
      }
    };
    void load();
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [file, initial?.sourceUrl]);

  useEffect(() => draw(), [ready, aspect, zoom, pan, backdrop, backdropIntensity, caption]);

  function point(event: PointerEvent<HTMLCanvasElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  function pointerDown(event: PointerEvent<HTMLCanvasElement>) {
    const next = point(event);
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, next);
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = { distance: Math.hypot(a.x - b.x, a.y - b.y), zoom };
      drag.current = null;
    } else drag.current = { point: next, pan };
  }

  function pointerMove(event: PointerEvent<HTMLCanvasElement>) {
    if (!pointers.current.has(event.pointerId)) return;
    event.preventDefault();
    const next = point(event);
    pointers.current.set(event.pointerId, next);
    if (pointers.current.size === 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      setZoom(Math.max(1, Math.min(3, pinch.current.zoom * distance / pinch.current.distance)));
      return;
    }
    if (!drag.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setPan({
      x: Math.max(-1, Math.min(1, drag.current.pan.x + (next.x - drag.current.point.x) / rect.width * 2)),
      y: Math.max(-1, Math.min(1, drag.current.pan.y + (next.y - drag.current.point.y) / rect.height * 2)),
    });
  }

  function pointerEnd(event: PointerEvent<HTMLCanvasElement>) {
    pointers.current.delete(event.pointerId);
    drag.current = null;
    pinch.current = null;
  }

  function apply() {
    const canvas = canvasRef.current;
    if (!canvas || !ready) return;
    draw(canvas);
    onApply({ dataUrl: canvas.toDataURL("image/jpeg", 0.9), edit: settings() });
  }

  return (
    <div className="photo-editor-backdrop" role="presentation">
      <section className="photo-editor-modal" role="dialog" aria-modal="true" aria-label="Редактирование фотографии">
        <header>
          <button type="button" onClick={onCancel}>Отмена</button>
          <h2>Настройте фото</h2>
          <button type="button" disabled={!ready} onClick={apply}>Готово</button>
        </header>

        <div
          className={`photo-editor-stage ${aspect}`}
          style={{
            aspectRatio: aspect === "portrait" ? "3 / 4" : "4 / 3",
            width: aspect === "portrait" ? "min(76%, 420px)" : "100%",
          }}
        >
          <canvas
            ref={canvasRef}
            width={sizes[aspect].width}
            height={sizes[aspect].height}
            style={{ aspectRatio: aspect === "portrait" ? "3 / 4" : "4 / 3" }}
            onPointerDown={pointerDown}
            onPointerMove={pointerMove}
            onPointerUp={pointerEnd}
            onPointerCancel={pointerEnd}
            aria-label="Перемещайте фотографию одним пальцем, масштабируйте двумя"
          />
          {!ready && <span>{loadError || "Открываем фотографию…"}</span>}
        </div>

        <div className="photo-aspect-control" role="group" aria-label="Формат фотографии">
          <button type="button" aria-pressed={aspect === "portrait"} onClick={() => setAspect("portrait")}>3 × 4</button>
          <button type="button" aria-pressed={aspect === "landscape"} onClick={() => setAspect("landscape")}>4 × 3</button>
        </div>

        <label className="photo-caption-control">
          <span>Подпись</span>
          <input value={caption} maxLength={120} onChange={(event) => setCaption(event.target.value)} placeholder="Например, Лето на даче, 1987" />
        </label>

        <div className="photo-backdrop-control">
          <span>Подложка для подписи</span>
          <div role="group" aria-label="Подложка">
            {(["none", "dark", "light"] as const).map((value) => (
              <button key={value} type="button" aria-pressed={backdrop === value} onClick={() => setBackdrop(value)}>
                {value === "none" ? "Нет" : value === "dark" ? "Тёмная" : "Светлая"}
              </button>
            ))}
          </div>
          {backdrop !== "none" && (
            <input aria-label="Интенсивность подложки" type="range" min="10" max="60" step="5" value={backdropIntensity} onChange={(event) => setBackdropIntensity(Number(event.target.value))} />
          )}
        </div>

        <label className="photo-zoom-control">
          <span>Масштаб</span>
          <input type="range" min="1" max="3" step="0.01" value={zoom} onChange={(event) => setZoom(Number(event.target.value))} />
        </label>
        <button type="button" className="secondary-action" onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}>
          Сбросить кадр
        </button>
      </section>
    </div>
  );
}
