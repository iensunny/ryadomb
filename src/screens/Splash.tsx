export function Splash() {
  const preview = import.meta.env.DEV && new URLSearchParams(window.location.search).get("preview") === "splash";
  return (
    <section className={preview ? "splash-screen splash-preview" : "splash-screen"} aria-label="Семейные истории загружаются">
      <img
        className="splash-foundation-logo"
        src="/fond-zashity-detei-logo-black.png"
        alt="Фонд защиты детей"
      />
      <div className="splash-mark">
        <img className="splash-brand-logo" src="/brand/logo-primary.png" alt="Семейные истории" />
        <span className="splash-heart-glow" aria-hidden />
      </div>
      <p className="splash-tagline">Истории, которые нас соединяют</p>
    </section>
  );
}
