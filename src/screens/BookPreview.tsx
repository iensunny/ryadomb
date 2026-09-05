import { useMemo, useState } from "react";
import { BackIcon } from "../icons";
import type { CoverKind, Story } from "../stories";

type Props = {
  stories: Story[];
  selectedIds: string[];
  cover: CoverKind;
  onBack: () => void;
  onOrder: () => void;
};

const coverNames: Record<CoverKind, string> = {
  linen: "Льняная обложка",
  dark: "Тёмно-коричневая обложка",
  walnut: "Ореховая обложка",
};

export function BookPreview({
  stories,
  selectedIds,
  cover,
  onBack,
  onOrder,
}: Props) {
  const pages = useMemo(
    () => stories.filter((story) => selectedIds.includes(story.id)),
    [stories, selectedIds],
  );
  const [page, setPage] = useState(0);
  const story = pages[page] ?? pages[0];

  if (!story) {
    return (
      <section className="screen">
        <header className="composer-head">
          <button className="back" onClick={onBack} aria-label="Назад">
            <BackIcon />
          </button>
          <h1>Предпросмотр книги</h1>
        </header>
        <div className="empty-state">
          <h2>Истории не выбраны</h2>
          <p>Вернитесь в конструктор и отметьте хотя бы одну историю.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="screen preview-screen">
      <header className="composer-head">
        <button className="back" onClick={onBack} aria-label="Назад">
          <BackIcon />
        </button>
        <h1>Предпросмотр книги</h1>
      </header>

      <div className={`book-frame ${cover}`}>
        <div className="book-page">
          {story.photoUrl ? (
            <div className="page-photo">
              <img src={story.photoUrl} alt="" />
            </div>
          ) : (
            <div className="page-quote">
              {story.body?.slice(0, 86) ?? "Семейная история"}
            </div>
          )}
          <div className="page-copy">
            <h2>{story.title}</h2>
            <p>{story.body ?? "Текст появится после расшифровки аудио."}</p>
            <span>{story.author}</span>
          </div>
        </div>
      </div>

      <p className="book-cover-name">{coverNames[cover]}</p>

      <div className="pager">
        <button disabled={page === 0} onClick={() => setPage((n) => n - 1)}>
          Назад
        </button>
        <span>
          Страница {page + 1} из {pages.length}
        </span>
        <button
          disabled={page === pages.length - 1}
          onClick={() => setPage((n) => n + 1)}
        >
          Далее
        </button>
      </div>

      <button className="btn-primary" onClick={onOrder}>
        Хочу напечатать книгу
      </button>
    </section>
  );
}
