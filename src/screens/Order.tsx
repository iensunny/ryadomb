import { useState } from "react";
import { coverTitles } from "../constants/covers";
import type { CoverKind } from "../domain/book";
import { BackIcon } from "../icons";

type Copies = 1 | 3 | 5;

type Props = {
  bookTitle: string;
  cover: CoverKind;
  pageCount: number;
  onBack: () => void;
  onDownloadPdf?: () => void | Promise<void>;
};

function pluralSpreads(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} разворот`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} разворота`;
  }
  return `${count} разворотов`;
}

export function Order({
  bookTitle,
  cover,
  pageCount,
  onBack,
  onDownloadPdf,
}: Props) {
  const [copies, setCopies] = useState<Copies>(3);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [sent, setSent] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);
  const canSubmit = Boolean(name.trim() && contact.trim());

  async function handleDownloadPdf() {
    if (!onDownloadPdf || pdfBusy) return;
    setPdfBusy(true);
    try {
      await onDownloadPdf();
    } finally {
      setPdfBusy(false);
    }
  }

  if (sent) {
    return (
      <section className="screen order-screen">
        <header className="composer-head">
          <button className="back" onClick={onBack} aria-label="Назад">
            <BackIcon />
          </button>
          <h1>Заявка отправлена</h1>
        </header>
        <div className="success-card">
          <p className="kicker">Печать книги</p>
          <h2>Заявка отправлена</h2>
          <p>
            Мы свяжемся с вами, когда уточним возможность и стоимость печати.
          </p>
        </div>
        {onDownloadPdf && (
          <button
            className="secondary-action"
            disabled={pdfBusy}
            onClick={() => void handleDownloadPdf()}
          >
            {pdfBusy ? "Готовим PDF…" : "Скачать PDF книги"}
          </button>
        )}
        <button className="btn-primary" onClick={onBack}>
          Вернуться к книге
        </button>
      </section>
    );
  }

  return (
    <section className="screen order-screen screen-scroll">
      <header className="composer-head">
        <button className="back" onClick={onBack} aria-label="Назад">
          <BackIcon />
        </button>
        <h1>Печать книги</h1>
      </header>

      <div className="order-summary">
        <h2>{bookTitle}</h2>
        <p className="order-meta">
          {pluralSpreads(pageCount)} · обложка «{coverTitles[cover]}»
        </p>
        <p className="order-disclaimer">
          Это заявка, а не оплата. Мы свяжемся с вами и уточним стоимость печати
          и доставки.
        </p>
      </div>

      <div className="choice-block">
        <p className="section-label">Контакты</p>
        <label className="field-label">
          <span>Имя</span>
          <input
            className="field request-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
            autoComplete="name"
          />
        </label>
        <label className="field-label">
          <span>Телефон</span>
          <input
            className="field request-field"
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder=""
            autoComplete="tel"
          />
        </label>
      </div>

      <div className="choice-block">
        <p className="section-label">Тираж</p>
        <div className="choice-grid three">
          {([1, 3, 5] as const).map((value) => (
            <button
              className={copies === value ? "choice active" : "choice"}
              key={value}
              onClick={() => setCopies(value)}
            >
              {value} экз.
            </button>
          ))}
        </div>
      </div>

      <div className="print-note">
        <strong>Стоимость уточним после заявки</strong>
        <p>Зависит от параметров печати и доставки.</p>
      </div>

      {onDownloadPdf && (
        <button
          className="secondary-action"
          disabled={pdfBusy}
          onClick={() => void handleDownloadPdf()}
        >
          {pdfBusy ? "Готовим PDF…" : "Скачать PDF книги"}
        </button>
      )}

      <button
        className="btn-primary"
        disabled={!canSubmit}
        onClick={() => setSent(true)}
      >
        Оставить заявку
      </button>
    </section>
  );
}
