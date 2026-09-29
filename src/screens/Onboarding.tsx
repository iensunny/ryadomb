import { useState } from "react";
import { PRIVACY_POLICY_URL } from "../constants/privacy";

const slides = [
  {
    kicker: "Истории, которые нас соединяют",
    title: "У каждой семьи есть что рассказать",
    text: "Собирайте семейные истории, сказки, пестушки и потешки.",
    illustration: "/brand/onboarding-family-selected.png",
    alt: "Линия соединяет несколько поколений семьи и раскрытую книгу",
  },
  {
    kicker: "Всё самое родное — вместе",
    title: "Создайте книгу вашей семьи",
    text: "Расположите материалы по порядку, выберите обложку и поделитесь готовой книгой с близкими.",
    illustration: "/brand/onboarding-book-selected.png",
    alt: "Фотография и рукописная заметка складываются в семейную книгу",
  },
];

type Props = {
  onDone: () => void;
  initialStep?: number;
};

export function Onboarding({ onDone, initialStep = 0 }: Props) {
  const [step, setStep] = useState(
    Math.min(Math.max(initialStep, 0), slides.length - 1),
  );
  const slide = slides[step];
  const last = step === slides.length - 1;
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  return (
    <section className="screen onboarding">
      <img
        className="onboarding-brand"
        src="/brand/logo-primary.png"
        alt="Семейные истории"
      />
      <figure className="hero-tile">
        <img
          src={slide.illustration}
          alt={slide.alt}
        />
      </figure>

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
        {last && (
          <label className="privacy-consent">
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(event) => setPrivacyAccepted(event.target.checked)}
            />
            <span>
              Я ознакомился(-ась) с {PRIVACY_POLICY_URL ? (
                <a href={PRIVACY_POLICY_URL} target="_blank" rel="noreferrer">
                  Политикой обработки персональных данных
                </a>
              ) : (
                <strong>Политикой обработки персональных данных</strong>
              )} и согласен(-на) на обработку данных для работы сервиса.
            </span>
          </label>
        )}
        <button
          className="btn-primary onboarding-next"
          disabled={last && !privacyAccepted}
          onClick={() => (last ? onDone() : setStep((s) => s + 1))}
        >
          <span>{last ? "Начать" : "Далее"}</span>
          <span aria-hidden>→</span>
        </button>
        {!last && (
          <button className="skip-button" onClick={() => setStep(slides.length - 1)}>
            Пропустить
          </button>
        )}
      </div>
    </section>
  );
}
