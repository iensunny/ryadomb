import { PlusIcon } from "../icons";
import type { Story } from "../stories";
import { StoryCard } from "../ui/StoryCard";

type Props = {
  familyName: string;
  stories: Story[];
  onNewStory: () => void;
  onOpenStory: (storyId: string) => void;
  onInvite: () => void;
};

export function Home({
  familyName,
  stories,
  onNewStory,
  onOpenStory,
  onInvite,
}: Props) {
  return (
    <section className="screen screen-scroll with-nav">
      <header className="home-head">
        <span className="kicker quiet">{familyName}</span>
        <h1>Истории</h1>
      </header>

      <button className="cta-card" onClick={onNewStory}>
        <div>
          <h2>Добавить историю</h2>
          <p>Текстом или с фотографией</p>
        </div>
        <span className="plus">
          <PlusIcon />
        </span>
      </button>

      {stories.length === 0 ? (
        <div className="empty-family">
          <h2>Начните семейную историю</h2>
          <p>Здесь появятся истории ваших близких.</p>
          <button className="btn-primary" onClick={onNewStory}>
            Добавить первую историю
          </button>
          <button className="secondary-action" onClick={onInvite}>
            Пригласить родных
          </button>
        </div>
      ) : (
        <>
          <p className="section-label">Новое</p>
          <div className="story-list">
            {stories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onOpen={() => onOpenStory(story.id)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
