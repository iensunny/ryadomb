import { BackIcon, CameraIcon, MicIcon } from "../icons";
import type { Story } from "../stories";

type Props = {
  story: Story;
  inBook: boolean;
  onBack: () => void;
  onToggleBook: (storyId: string) => void;
  onEdit: () => void;
};

function label(story: Story) {
  if (story.kind === "audio") return `Аудио · ${story.duration ?? "0:00"}`;
  if (story.kind === "photo") return "Фото";
  return "Текст";
}

export function StoryDetail({ story, inBook, onBack, onToggleBook, onEdit }: Props) {
  return (
    <section className="screen story-detail-screen">
      <header className="composer-head">
        <button className="back" onClick={onBack} aria-label="Назад">
          <BackIcon />
        </button>
        <h1>История</h1>
        <button className="more-button" aria-label="Ещё действия">
          ⋯
        </button>
      </header>

      <article className="detail-card">
        <span className="badge">{label(story)}</span>
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

        {story.photoUrl && (
          <img className="detail-photo" src={story.photoUrl} alt="" />
        )}

        <div className="detail-text">
          <p>{story.body ?? "Расшифровка появится здесь после обработки аудио."}</p>
        </div>
      </article>

      <div className="detail-actions">
        <button className="secondary-action" onClick={onEdit}>
          Редактировать
        </button>
        <button
          className="btn-primary"
          onClick={() => onToggleBook(story.id)}
        >
          {inBook ? "Убрать из книги" : "Добавить в книгу"}
        </button>
      </div>

      {!story.photoUrl && (
        <button className="attach-photo">
          <CameraIcon />
          <span>Добавить фото к странице книги</span>
        </button>
      )}
    </section>
  );
}
