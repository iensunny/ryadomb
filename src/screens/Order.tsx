import { useEffect, useState } from "react";
import { coverTitles } from "../constants/covers";
import type { CoverKind } from "../domain/book";
import { BackIcon } from "../icons";
import type { PreparedPdf } from "../lib/bookPdf";

type Copies = 1 | 3 | 5;

type Props = {
  bookTitle: string;
  cover: CoverKind;
  pageCount: number;
  onBack: () => void;
  onDownloadPdf?: () => Promise<PreparedPdf>;
};

function pluralSpreads(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} материал`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} материала`;
  }
  return `${count} материалов`;
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
  const [pdfMessage, setPdfMessage] = useState("");
  const [preparedPdf, setPreparedPdf] = useState<Exclude<PreparedPdf, null> | null>(null);
  const canSubmit = Boolean(name.trim() && contact.trim());

  useEffect(() => () => {
    if (preparedPdf) URL.revokeObjectURL(preparedPdf.url);
  }, [preparedPdf]);

  async function handleDownloadPdf() {
    if (!onDownloadPdf || pdfBusy) return;
    setPdfBusy(true);
    setPdfMessage("");
    try {
      const result = await onDownloadPdf();
      setPreparedPdf(result);
      setPdfMessage(result ? "PDF готов. Откройте его, затем сохраните через меню просмотра." : "PDF отправлен в загрузки.");
    } catch {
      setPdfMessage("Не удалось подготовить PDF. Попробуйте ещё раз.");
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
          <h1>Демо-заявка сохранена</h1>
        </header>
        <div className="success-card">
          <p className="kicker">Печать книги</p>
          <h2>Так будет выглядеть подтверждение</h2>
          <p>
            Сейчас это прототип: данные никуда не отправлялись. После
            подключения формы здесь появится настоящее подтверждение.
          </p>
        </div>
        {onDownloadPdf && (
          <button
            className="secondary-action"
            disabled={pdfBusy}
            onClick={() => void handleDownloadPdf()}
          >
            {pdfBusy ? "Готовим PDF…" : "Подготовить PDF книги"}
          </button>
        )}
        <button className="btn-primary" onClick={onBack}>
          Вернуться к книге
        </button>
        {pdfMessage && <p className="pdf-status" role="status">{pdfMessage}</p>}
        {preparedPdf && <a className="secondary-action" href={preparedPdf.url} target="_blank" rel="noreferrer">Открыть готовый PDF</a>}
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
          {pdfBusy ? "Готовим PDF…" : preparedPdf ? "Подготовить PDF заново" : "Подготовить PDF книги"}
        </button>
      )}
      {pdfMessage && <p className="pdf-status" role="status">{pdfMessage}</p>}
      {preparedPdf && (
        <a
          className="btn-primary pdf-download-link"
          href={preparedPdf.url}
          target="_blank"
          rel="noreferrer"
          onClick={() => setPdfMessage("PDF открыт в новой вкладке.")}
        >
          Открыть готовый PDF
        </a>
      )}

      <button
        className="btn-primary"
        disabled={!canSubmit}
        onClick={() => setSent(true)}
      >
        Проверить демо-заявку
      </button>
    </section>
  );
}
