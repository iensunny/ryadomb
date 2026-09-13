import type { Story } from "../domain/story";
import { firstStoryPhoto } from "../lib/storyFormat";

type Props = {
  story: Story;
  onOpen: () => void;
};

export function StoryCard({ story, onOpen }: Props) {
  const photo = firstStoryPhoto(story);

  return (
    <button
      type="button"
      className="story-card"
      onClick={onOpen}
    >
      <div className="story-body">
        <h3>{story.title}</h3>
        <p className="story-meta">
          {story.author} · {story.when}
        </p>
      </div>
      <span className="story-media" aria-hidden={!photo}>
        {photo ? (
          <img className="story-thumb" src={photo} alt="" />
        ) : (
          <span className="story-arrow">›</span>
        )}
      </span>
    </button>
  );
}
