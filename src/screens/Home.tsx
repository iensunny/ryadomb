import { PlusIcon } from "../icons";
import type { Story } from "../stories";

type Props = {
  stories: Story[];
  onNewStory: () => void;
  onOpenStory: (storyId: string) => void;
  onInvite: () => void;
};

function badge(story: Story) {
  if (story.kind === "audio") return `Аудио · ${story.duration ?? "0:00"}`;
  if (story.kind === "photo") return "Фото";
  return "Текст";
}

export function Home({ stories, onNewStory, onOpenStory, onInvite }: Props) {
  return (
    <section className="screen screen-scroll with-nav">
      <header className="home-head">
        <span className="kicker quiet">Семья Ивановых</span>
        <h1>Семейные истории</h1>
      </header>

      <button className="cta-card" onClick={onNewStory}>
        <div>
          <h2>Записать историю</h2>
          <p>Голосом, фото или текстом</p>
        </div>
        <span className="plus">
          <PlusIcon />
        </span>
      </button>

      {stories.length === 0 ? (
        <div className="empty-family">
          <h2>Начните семейную историю</h2>
          <p>Здесь появятся записи ваших близких.</p>
          <button className="btn-primary" onClick={onNewStory}>
            Записать первую историю
          </button>
          <button className="secondary-action" onClick={onInvite}>
            Пригласить родных
          </button>
        </div>
      ) : (
        <>
          <p className="section-label">Что нового в семье</p>
          <div className="story-list">
            {stories.map((story) => (
              <button
                key={story.id}
                className={story.photoUrl ? "story-card photo-card" : "story-card"}
                onClick={() => onOpenStory(story.id)}
              >
                {story.photoUrl ? (
                  <>
                    <img className="story-photo" src={story.photoUrl} alt="" />
                    <div className="story-body">
                      <div className="meta">
                        <span className="badge">{badge(story)}</span>
                        <span className="when">{story.when}</span>
                      </div>
                      <h3>{story.title}</h3>
                      <p className="author">{story.author}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="meta">
                      <span className="badge">{badge(story)}</span>
                      <span className="when">{story.when}</span>
                    </div>
                    <h3>{story.title}</h3>
                    <p className="author">{story.author}</p>
                  </>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
