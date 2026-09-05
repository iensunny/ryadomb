type Props = {
  onDone: () => void;
};

export function Splash({ onDone }: Props) {
  return (
    <section className="splash-screen" onAnimationEnd={onDone}>
      <p className="splash-kicker">Мобильное приложение</p>
      <h1>
        Семейные
        <br />
        истории
      </h1>
      <p className="splash-copy">
        Проверяем вход и открываем вашу семью
      </p>
      <span className="loader" aria-label="Загрузка" />
    </section>
  );
}
