import { useState } from "react";

const slides = [
  {
    kicker: "Ваш семейный архив",
    title: "Голоса вашей семьи не должны исчезать",
    text: "Собирайте рассказы и воспоминания близких — чтобы они остались в семейной памяти.",
    features: ["Истории", "Фотографии", "Традиции"],
  },
  {
    kicker: "Истории и фотографии",
    title: "Записывайте воспоминания текстом и добавляйте фото",
    text: "Соберите важные моменты в общем семейном архиве, а затем создайте из них книгу.",
    features: ["Тексты", "Фотографии", "Книги"],
  },
];

type Props = {
  onDone: () => void;
  initialStep?: number;
};

function FeatureIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden>
        <path d="M4 7.5c4-1.2 8-.3 12 2.7v16c-4-3-8-3.8-12-2.4V7.5Zm24 0c-4-1.2-8-.3-12 2.7v16c4-3 8-3.8 12-2.4V7.5Z" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 32 32" aria-hidden>
        <rect x="4" y="5" width="24" height="22" rx="2" />
        <circle cx="21.5" cy="11.5" r="2.5" />
        <path d="m6 24 7-8 5 5 3-3 5 6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" aria-hidden>
      <path d="M16 27S5 20.5 5 12.5C5 8.8 7.6 6 11.2 6c2.2 0 3.8 1.2 4.8 3 1-1.8 2.6-3 4.8-3C24.4 6 27 8.8 27 12.5 27 20.5 16 27 16 27Z" />
    </svg>
  );
}

export function Onboarding({ onDone, initialStep = 0 }: Props) {
  const [step, setStep] = useState(
    Math.min(Math.max(initialStep, 0), slides.length - 1),
  );
  const slide = slides[step];
  const last = step === slides.length - 1;

  return (
    <section className="screen onboarding">
      <figure className="hero-tile">
        <img
          src="/onboarding-archive.jpg"
          alt="Старые семейные фотографии"
        />
      </figure>

      <div className="onboarding-copy">
        <p className="kicker">{slide.kicker}</p>
        <h2>{slide.title}</h2>
        <p>{slide.text}</p>
      </div>

      <div className="onboarding-features">
        {slide.features.map((feature, index) => (
          <div className="onboarding-feature" key={feature}>
            <FeatureIcon index={index} />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="onboarding-footer">
        <div className="dots" aria-hidden>
          {slides.map((_, i) => (
            <i key={i} className={i === step ? "active" : ""} />
          ))}
        </div>
        <button
          className="btn-primary onboarding-next"
          onClick={() => (last ? onDone() : setStep((s) => s + 1))}
        >
          <span>{last ? "Начать" : "Далее"}</span>
          <span aria-hidden>→</span>
        </button>
        {!last && (
          <button className="skip-button" onClick={onDone}>
            Пропустить
          </button>
        )}
      </div>
    </section>
  );
}
