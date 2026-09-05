import { useState } from "react";
import { BackIcon } from "../icons";
import type { CoverKind } from "../stories";

type Copies = 1 | 3 | 5;

type Props = {
  cover: CoverKind;
  pageCount: number;
  onBack: () => void;
};

const coverNames: Record<CoverKind, string> = {
  linen: "лён",
  dark: "тёмно-коричневая",
  walnut: "ореховая",
};

export function Order({ cover, pageCount, onBack }: Props) {
  const [copies, setCopies] = useState<Copies>(3);
  const [name, setName] = useState("Иван");
  const [contact, setContact] = useState("+7 900 000-00-00");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <section className="screen order-screen">
        <header className="composer-head">
          <button className="back" onClick={onBack} aria-label="Назад">
            <BackIcon />
          </button>
          <h1>Заявка принята</h1>
        </header>
        <div className="success-card">
          <h2>Мы получили заявку на книгу</h2>
          <p>
            В реальном MVP здесь будет подтверждение и следующий шаг: уточнить
            макет, стоимость печати и доставку.
          </p>
        </div>
        <button className="btn-primary" onClick={onBack}>
          Вернуться к книге
        </button>
      </section>
    );
  }

  return (
    <section className="screen order-screen">
      <header className="composer-head">
        <button className="back" onClick={onBack} aria-label="Назад">
          <BackIcon />
        </button>
        <h1>Заявка на печать</h1>
      </header>

      <div className="order-summary">
        <p className="kicker">Проверяем интерес к печати</p>
        <h2>Книга семьи Ивановых</h2>
        <p>
          {pageCount} разворота, обложка: {coverNames[cover]}. На MVP это не
          оплата, а заявка — мы уточним стоимость и печать вручную.
        </p>
      </div>

      <div className="choice-block">
        <p className="section-label">Контакты</p>
        <input
          className="field request-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя"
        />
        <input
          className="field request-field"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Телефон или способ связи"
        />
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

      <p className="print-note">
        Цена не показывается, пока не выбран реальный партнёр по печати и
        доставка.
      </p>

      <button
        className="btn-primary"
        disabled={!name.trim() || !contact.trim()}
        onClick={() => setSent(true)}
      >
        Оставить заявку
      </button>
    </section>
  );
}
