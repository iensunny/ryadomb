import { useState } from "react";
import type { Story } from "../domain/story";
import { fairyTales, rhymes } from "../fixtures/catalog";
import { StoryCard } from "../ui/StoryCard";

type Tab = "ours" | "rhymes" | "tales";

type Props = {
  stories: Story[];
  selectedIds: string[];
  activeBookTitle: string;
  onNewStory: () => void;
  onOpenStory: (storyId: string) => void;
  onToggleBook: (storyId: string) => void;
};

export function Library({
  stories,
  selectedIds,
  activeBookTitle,
  onNewStory,
  onOpenStory,
  onToggleBook,
}: Props) {
  const [tab, setTab] = useState<Tab>("ours");
  const counts: Record<Tab, number> = {
    ours: stories.length,
    rhymes: rhymes.length,
    tales: fairyTales.length,
  };

  return (
    <section className="screen screen-scroll with-nav">
      <header className="page-head">
        <p className="kicker">Истории</p>
        <h1>Архив семьи</h1>
        <p>Истории, потешки и сказки — всё, что хочется сохранить.</p>
      </header>

      <button className="library-create" onClick={onNewStory}>
        <span>+</span>
        Добавить историю
      </button>

      <div className="tabs library-tabs" role="tablist">
        {(
          [
            ["ours", "Семейные"],
            ["rhymes", "Потешки"],
            ["tales", "Сказки"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            role="tab"
            className={tab === value ? "tab active" : "tab"}
            aria-selected={tab === value}
            onClick={() => setTab(value)}
          >
            {label}
            <span className="tab-count">{counts[value]}</span>
          </button>
        ))}
      </div>

      {tab === "ours" && (
        <div className="story-list">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onOpen={() => onOpenStory(story.id)}
            />
          ))}
        </div>
      )}

      {tab === "rhymes" && (
        <div className="story-list">
          {rhymes.map((item) => (
            <article className="library-row" key={item.id}>
              <div className="library-row-copy">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <button
                className="small-action"
                onClick={() => onToggleBook(`rhyme-${item.id}`)}
              >
                {selectedIds.includes(`rhyme-${item.id}`)
                  ? `В «${activeBookTitle}»`
                  : "Добавить в книгу"}
              </button>
            </article>
          ))}
        </div>
      )}

      {tab === "tales" && (
        <div className="story-list">
          {fairyTales.map((item) => (
            <article className="library-row" key={item.id}>
              <div className="library-row-copy">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <button
                className="small-action"
                onClick={() => onToggleBook(`tale-${item.id}`)}
              >
                {selectedIds.includes(`tale-${item.id}`)
                  ? `В «${activeBookTitle}»`
                  : "Добавить в книгу"}
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
