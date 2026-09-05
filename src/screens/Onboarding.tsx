import { useState } from "react";

const slides = [
  {
    tile: "logo" as const,
    kicker: "Семейные истории",
    title: "Сохраните голоса и истории вашей семьи",
    text: "Записывайте рассказы, колыбельные и потешки близких — чтобы они остались в семейной памяти.",
  },
  {
    tile: "modes" as const,
    kicker: "Три способа",
    title: "Рассказывайте голосом, добавляйте фото и текст",
    text: "Голос — самый живой способ. Фото и текст помогут дополнить историю и собрать семейную книгу.",
  },
];

type Props = {
  onDone: () => void;
};

export function Onboarding({ onDone }: Props) {
  const [step, setStep] = useState(0);
  const slide = slides[step];
  const last = step === slides.length - 1;

  return (
    <section className="screen onboarding">
      <div className="hero-tile">
        {slide.tile === "logo" && (
          <h1>
            Семейные
            <br />
            истории
          </h1>
        )}
        {slide.tile === "modes" && (
          <div className="hero-stack">
            <span>Голос</span>
            <span>Текст</span>
            <span>Фото</span>
          </div>
        )}
      </div>

      <div className="onboarding-copy">
        <p className="kicker">{slide.kicker}</p>
        <h2>{slide.title}</h2>
        <p>{slide.text}</p>
      </div>

      <div className="onboarding-footer">
        <div className="dots" aria-hidden>
          {slides.map((_, i) => (
            <i key={i} className={i === step ? "active" : ""} />
          ))}
        </div>
        <button
          className="btn-primary"
          onClick={() => (last ? onDone() : setStep((s) => s + 1))}
        >
          {last ? "Начать" : "Далее"}
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
