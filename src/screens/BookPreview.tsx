import { useEffect, useRef, useState } from "react";
import { BackIcon } from "../icons";
import { CoverArtwork } from "../ui/CoverArtwork";
import { BookPaper } from "../ui/BookPaper";
import { layoutBook, type BookOptions, type PrintPage } from "../lib/bookLayout";

type Props = BookOptions & { onBack: () => void; onOrder: () => void };
export function BookPreview({ onBack, onOrder, ...options }: Props) {
  const [pages, setPages] = useState<PrintPage[]>([]);
  const [page, setPage] = useState(0);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const touch = useRef<{ x: number; y: number } | null>(null);
  useEffect(() => {
    let cancelled = false;
    setBusy(true); setError("");
    layoutBook(options).then((result) => {
      if (!cancelled) { setPages(result); setPage((value) => Math.min(value, result.length)); }
    }).catch(() => { if (!cancelled) setError("Не удалось загрузить страницы. Проверьте подключение и попробуйте снова."); })
      .finally(() => { if (!cancelled) setBusy(false); });
    return () => { cancelled = true; };
  }, [options.items, options.stories, retry]);
  const back = () => setPage((value) => Math.max(0, value - 1));
  const forward = () => setPage((value) => Math.min(pages.length, value + 1));
  return <section className="screen preview-screen">
    <header className="composer-head"><button className="back" onClick={onBack} aria-label="Назад"><BackIcon /></button><h1>{options.bookTitle}</h1></header>
    <div className="edition-reader" tabIndex={0} aria-label="Страницы книги" onKeyDown={(event) => {
      if (event.key === "ArrowLeft") back();
      if (event.key === "ArrowRight") forward();
    }} onTouchStart={(event) => { const t = event.touches[0]; touch.current = { x: t.clientX, y: t.clientY }; }} onTouchEnd={(event) => {
      if (!touch.current) return;
      const t = event.changedTouches[0], dx = t.clientX - touch.current.x, dy = t.clientY - touch.current.y;
      touch.current = null;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) { if (dx > 0) back(); else forward(); }
    }}>
      <div className="edition-page">
        {page === 0 ? <CoverArtwork title={options.bookTitle} subtitle={options.coverSubtitle} cover={options.cover} design={options.coverDesign} /> : pages[page - 1] && <BookPaper page={pages[page - 1]} />}
      </div>
    </div>
    {error && <p role="alert">{error} <button onClick={() => setRetry((value) => value + 1)}>Повторить</button></p>}
    <div className="pager"><button disabled={page === 0 || busy} onClick={back}>Назад</button><span aria-live="polite">{busy ? "Готовим страницы…" : `${page + 1} / ${pages.length + 1}`}</span><button disabled={page >= pages.length || busy} onClick={forward}>Далее</button></div>
    <button className="btn-primary" onClick={onOrder} disabled={busy || Boolean(error)}>Печать и PDF</button>
  </section>;
}
