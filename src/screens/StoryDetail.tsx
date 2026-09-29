import { useState } from "react";
import { BackIcon, MicIcon } from "../icons";
import type { Story } from "../domain/story";
import { FormattedStoryBody } from "../ui/FormattedStoryBody";

type Props = {
  story: Story;
  inBook: boolean;
  bookTitle: string;
  onBack: () => void;
  onToggleBook: (storyId: string) => void;
  onEdit: () => void;
  onDelete: (storyId: string) => void;
};

export function StoryDetail({
  story,
  inBook,
  bookTitle,
  onBack,
  onToggleBook,
  onEdit,
  onDelete,
}: Props) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <section className="screen story-detail-screen">
      <header className="composer-head">
        <button className="back" onClick={onBack} aria-label="Назад">
          <BackIcon />
        </button>
        <h1>История</h1>
      </header>

      <article className="detail-card">
        <h2>{story.title}</h2>
        <p className="detail-meta">
          {story.author} · {story.when}
        </p>
        {story.categories && story.categories.length > 0 && (
          <div className="detail-categories" aria-label="Категории">
            {story.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        )}

        {story.kind === "audio" && (
          <div className="audio-player">
            <span className="audio-play">
              <MicIcon />
            </span>
            <div>
              <strong>Воспроизвести запись</strong>
              <p>{story.duration ?? "0:00"}</p>
            </div>
          </div>
        )}

        <FormattedStoryBody
          body={story.body}
          photos={story.photos}
          format={story.format}
          className="detail-text"
        />
      </article>

      <div className="detail-actions">
        <button className="secondary-action" onClick={onEdit}>
          Редактировать
        </button>
        <button
          className="btn-primary"
          onClick={() => onToggleBook(story.id)}
        >
          {inBook ? `Убрать из «${bookTitle}»` : `Добавить в «${bookTitle}»`}
        </button>
      </div>
      <button
        type="button"
        className="delete-story-action"
        onClick={() => setConfirmDelete(true)}
      >
        Удалить историю
      </button>

      {confirmDelete && (
        <div className="modal-backdrop" role="presentation">
          <section className="invite-modal" role="dialog" aria-modal="true">
            <p className="kicker">Удаление</p>
            <h2>Удалить историю?</h2>
            <p>
              «{story.title}» исчезнет из семейных историй и из книги. Это действие нельзя
              отменить.
            </p>
            <div className="modal-actions-row">
              <button
                type="button"
                className="secondary-action"
                onClick={() => setConfirmDelete(false)}
              >
                Отмена
              </button>
              <button
                type="button"
                className="btn-danger"
                onClick={() => onDelete(story.id)}
              >
                Удалить
              </button>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
