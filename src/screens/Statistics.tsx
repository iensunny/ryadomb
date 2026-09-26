import { useEffect, useMemo, useState } from "react";
import { statisticsEndpoint } from "../lib/analytics";

type Row = Record<string, string | number>;
type StatisticsData = {
  generatedAt: string;
  summary: Record<string, number>;
  daily: Row[];
  events: Row[];
  screens: Row[];
  transitions: Row[];
  errors: Row[];
  retention: Record<string, number>;
  categories: Row[];
  covers: Row[];
  requestStatuses: Row[];
  platforms: Row[];
};

const labels: Record<string, string> = {
  unique_users: "Всего пользователей", families: "Семей", invited_members: "Вступили по ссылке",
  invites_created: "Создано приглашений", stories: "Историй", books: "Книг",
  pdf_downloads: "Скачиваний PDF", print_requests: "Заявок на печать", dau: "Активны сегодня",
  wau: "Активны за 7 дней", mau: "Активны за 30 дней",
  avg_members_per_family: "Участников на семью", avg_stories_per_family: "Историй на семью",
  avg_pages_per_book: "Страниц в книге", invite_conversion: "Конверсия приглашений, %", pdf_conversion: "Книги → PDF, %",
  avg_load_ms: "Средняя загрузка, мс",
};

const funnel = ["app_open", "onboarding_completed", "story_created", "book_previewed", "book_pdf_downloaded", "print_request_created"];
const funnelLabels: Record<string, string> = {
  app_open: "Открыли приложение", onboarding_completed: "Завершили онбординг", story_created: "Создали историю",
  book_previewed: "Открыли книгу", book_pdf_downloaded: "Скачали PDF", print_request_created: "Оставили заявку",
};

export function Statistics() {
  const [data, setData] = useState<StatisticsData | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    document.title = "Статистика — Семейные истории";
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) { robots = document.createElement("meta"); robots.name = "robots"; document.head.appendChild(robots); }
    robots.content = "noindex,nofollow";
    const endpoint = statisticsEndpoint();
    if (!endpoint && import.meta.env.DEV) {
      setData({ generatedAt: new Date().toISOString(), summary: {}, daily: Array.from({ length: 30 }, (_, index) => ({ day: new Date(Date.now() - (29 - index) * 86400000).toISOString().slice(0, 10), users: 0, events: 0 })), events: [], screens: [], transitions: [], errors: [], retention: {}, categories: [], covers: [], requestStatuses: [], platforms: [] });
      return;
    }
    if (!endpoint) { setError("Адрес API не настроен."); return; }
    fetch(endpoint).then(async (response) => {
      if (!response.ok) throw new Error(String(response.status));
      setData(await response.json() as StatisticsData);
    }).catch(() => setError("Не удалось загрузить статистику."));
  }, []);
  const eventMap = useMemo(() => new Map((data?.events || []).map((row) => [String(row.event_name), Number(row.users || row.value || 0)])), [data]);
  const maxDaily = Math.max(1, ...(data?.daily || []).map((row) => Number(row.users)));
  if (error) return <main className="statistics-page"><h1>Статистика</h1><p className="statistics-error">{error}</p></main>;
  if (!data) return <main className="statistics-page"><h1>Статистика</h1><p>Загружаем данные…</p></main>;
  return (
    <main className="statistics-page">
      <header className="statistics-head"><div><p className="kicker">Семейные истории</p><h1>Статистика приложения</h1></div><small>Обновлено {new Date(data.generatedAt).toLocaleString("ru-RU")}</small></header>
      <section className="metric-grid">{Object.entries(labels).map(([key, label]) => <article className="metric-card" key={key}><span>{label}</span><strong>{Number(data.summary[key] || 0).toLocaleString("ru-RU")}</strong></article>)}</section>
      <section className="statistics-panel"><h2>Активность за 30 дней</h2><div className="daily-chart">{data.daily.map((row) => <div className="daily-column" key={String(row.day)} title={`${row.day}: ${row.users}`}><i style={{ height: `${Math.max(4, Number(row.users) / maxDaily * 100)}%` }} /><small>{String(row.day).slice(5)}</small></div>)}</div></section>
      <section className="statistics-panel"><h2>Воронка пользователя</h2><div className="funnel-list">{funnel.map((name) => <div key={name}><span>{funnelLabels[name]}</span><strong>{eventMap.get(name) || 0}</strong></div>)}</div></section>
      <section className="statistics-split">
        <article className="statistics-panel"><h2>Удержание</h2><div className="retention"><p><strong>{data.retention.d1 || 0}</strong><span>вернулись через 1 день</span></p><p><strong>{data.retention.d7 || 0}</strong><span>через 7 дней</span></p><p><strong>{data.retention.d30 || 0}</strong><span>через 30 дней</span></p></div></article>
        <article className="statistics-panel"><h2>Популярные экраны</h2><div className="stats-table">{data.screens.slice(0, 10).map((row) => <div key={String(row.screen)}><span>{row.screen}</span><strong>{row.views}</strong></div>)}</div></article>
      </section>
      <section className="statistics-panel"><h2>Переходы пользователей</h2><div className="stats-table">{data.transitions.map((row, index) => <div key={`${row.source}-${row.target}-${index}`}><span>{row.source} → {row.target}</span><strong>{row.value}</strong></div>)}</div></section>
      <section className="statistics-split"><article className="statistics-panel"><h2>Все события</h2><div className="stats-table">{data.events.map((row) => <div key={String(row.event_name)}><span>{row.event_name}</span><strong>{row.value}</strong></div>)}</div></article><article className="statistics-panel"><h2>Ошибки</h2>{data.errors.length ? <div className="stats-table">{data.errors.map((row) => <div key={String(row.kind)}><span>{row.kind}</span><strong>{row.value}</strong></div>)}</div> : <p>Ошибок пока нет</p>}</article></section>
      <section className="statistics-split"><article className="statistics-panel"><h2>Категории историй</h2><div className="stats-table">{data.categories.map((row) => <div key={String(row.category)}><span>{row.category}</span><strong>{row.value}</strong></div>)}</div></article><article className="statistics-panel"><h2>Обложки книг</h2><div className="stats-table">{data.covers.map((row) => <div key={String(row.cover)}><span>{row.cover}</span><strong>{row.value}</strong></div>)}</div></article></section>
      <section className="statistics-split"><article className="statistics-panel"><h2>Статусы заявок</h2><div className="stats-table">{data.requestStatuses.map((row) => <div key={String(row.status)}><span>{row.status}</span><strong>{row.value}</strong></div>)}</div></article><article className="statistics-panel"><h2>Платформы</h2><div className="stats-table">{data.platforms.map((row) => <div key={String(row.platform)}><span>{row.platform}</span><strong>{row.value}</strong></div>)}</div></article></section>
      <footer>Только обезличенные агрегаты. Имена, контакты, тексты и фотографии здесь не отображаются.</footer>
    </main>
  );
}
