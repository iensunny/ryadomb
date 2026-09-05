import { useState } from "react";
import { fairyTales, rhymes, type Story } from "../stories";

type Tab = "ours" | "rhymes" | "tales";

type Props = {
  stories: Story[];
  selectedIds: string[];
  onOpenStory: (storyId: string) => void;
  onToggleBook: (storyId: string) => void;
};

function storyBadge(story: Story) {
  if (story.kind === "audio") return `Аудио · ${story.duration ?? "0:00"}`;
  if (story.kind === "photo") return "Фото";
  return "Текст";
}

export function Library({ stories, selectedIds, onOpenStory, onToggleBook }: Props) {
  const [tab, setTab] = useState<Tab>("ours");

  return (
    <section className="screen screen-scroll with-nav">
      <header className="page-head">
        <p className="kicker">Истории</p>
        <h1>Архив семьи и общие сказки</h1>
        <p>Здесь можно найти семейные записи, потешки и сказки для книги.</p>
      </header>

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
          </button>
        ))}
      </div>

      {tab === "ours" && (
        <div className="story-list">
          {stories.map((story) => (
            <button
              className="library-row"
              key={story.id}
              onClick={() => onOpenStory(story.id)}
            >
              <div>
                <span className="badge">{storyBadge(story)}</span>
                <h3>{story.title}</h3>
                <p>{story.author}</p>
              </div>
              <span className="row-arrow">›</span>
            </button>
          ))}
        </div>
      )}

      {tab === "rhymes" && (
        <div className="story-list">
          {rhymes.map((item) => (
            <article className="library-row" key={item.id}>
              <div>
                <span className="badge">Потешка</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <button
                className="small-action"
                onClick={() => onToggleBook(`rhyme-${item.id}`)}
              >
                {selectedIds.includes(`rhyme-${item.id}`) ? "В книге" : "В книгу"}
              </button>
            </article>
          ))}
        </div>
      )}

      {tab === "tales" && (
        <div className="story-list">
          {fairyTales.map((item) => (
            <article className="library-row" key={item.id}>
              <div>
                <span className="badge">Сказка</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <button
                className="small-action"
                onClick={() => onToggleBook(`tale-${item.id}`)}
              >
                {selectedIds.includes(`tale-${item.id}`) ? "В книге" : "В книгу"}
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
