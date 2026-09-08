import { useEffect, useRef, useState } from "react";
import { BackIcon, MicIcon } from "../icons";
import { storyKindLabel, type Story } from "../stories";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onPointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen]);

  return (
    <section className="screen story-detail-screen">
      <header className="composer-head">
        <button className="back" onClick={onBack} aria-label="Назад">
          <BackIcon />
        </button>
        <h1>История</h1>
        <div className="more-menu" ref={menuRef}>
          <button
            className="more-button"
            aria-label="Ещё действия"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            ⋯
          </button>
          {menuOpen && (
            <div className="more-menu-panel" role="menu">
              <button
                type="button"
                role="menuitem"
                className="more-menu-danger"
                onClick={() => {
                  setMenuOpen(false);
                  setConfirmDelete(true);
                }}
              >
                Удалить историю
              </button>
            </div>
          )}
        </div>
      </header>

      <article className="detail-card">
        <span className="badge">{storyKindLabel(story)}</span>
        <h2>{story.title}</h2>
        <p className="detail-meta">
          {story.author} · {story.when}
        </p>

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

      {confirmDelete && (
        <div className="modal-backdrop" role="presentation">
          <section className="invite-modal" role="dialog" aria-modal="true">
            <p className="kicker">Удаление</p>
            <h2>Удалить историю?</h2>
            <p>
              «{story.title}» исчезнет из архива и из книги. Это действие нельзя
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
