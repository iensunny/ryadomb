import { useMemo, useState } from "react";
import type { CoverKind } from "../domain/book";
import type { Story } from "../domain/story";
import { BackIcon } from "../icons";
import {
  firstStoryPhoto,
  storyPlainExcerpt,
} from "../lib/storyFormat";
import { FormattedStoryBody } from "../ui/FormattedStoryBody";

type Props = {
  stories: Story[];
  selectedIds: string[];
  bookTitle: string;
  cover: CoverKind;
  onBack: () => void;
  onOrder: () => void;
};

export function BookPreview({
  stories,
  selectedIds,
  bookTitle,
  cover,
  onBack,
  onOrder,
}: Props) {
  const pages = useMemo(
    () =>
      selectedIds
        .map((id) => stories.find((story) => story.id === id))
        .filter((story): story is Story => Boolean(story)),
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

  const hasPhoto = Boolean(firstStoryPhoto(story));
  const excerpt = storyPlainExcerpt(story.body, 110);
  const bodyText = story.body?.replace(/\s+/g, " ").trim() ?? "";
  const showQuote = !hasPhoto && bodyText.length > excerpt.length + 12;

  return (
    <section className="screen preview-screen">
      <header className="composer-head">
        <button className="back" onClick={onBack} aria-label="Назад">
          <BackIcon />
        </button>
        <h1>{bookTitle}</h1>
      </header>

      <div className={`book-frame ${cover}`}>
        <div className="book-page">
          {showQuote && <p className="page-quote">{excerpt}</p>}
          <div className="page-copy">
            <h2>{story.title}</h2>
            <FormattedStoryBody
              body={story.body}
              photos={story.photos}
              format={story.format}
            />
            <span className="page-author">{story.author}</span>
          </div>
        </div>
      </div>

      <div className="pager">
        <button disabled={page === 0} onClick={() => setPage((n) => n - 1)}>
          Назад
        </button>
        <span>
          {page + 1} / {pages.length}
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
