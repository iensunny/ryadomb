import type { CoverKind, Story } from "../stories";

type Props = {
  stories: Story[];
  selectedIds: string[];
  cover: CoverKind;
  onToggleStory: (storyId: string) => void;
  onMoveStory: (storyId: string, direction: -1 | 1) => void;
  onCoverChange: (cover: CoverKind) => void;
  onPreview: () => void;
};

const covers: Array<{ id: CoverKind; title: string }> = [
  { id: "linen", title: "Лён" },
  { id: "dark", title: "Тёмная" },
  { id: "walnut", title: "Орех" },
];

export function BookBuilder({
  stories,
  selectedIds,
  cover,
  onToggleStory,
  onMoveStory,
  onCoverChange,
  onPreview,
}: Props) {
  const orderedStories = [
    ...selectedIds
      .map((id) => stories.find((story) => story.id === id))
      .filter((story): story is Story => Boolean(story)),
    ...stories.filter((story) => !selectedIds.includes(story.id)),
  ];

  return (
    <section className="screen screen-scroll with-nav">
      <header className="page-head">
        <p className="kicker">Книга</p>
        <h1>Соберите книгу из историй</h1>
        <p>
          {selectedIds.length} истории выбрано. Можно менять порядок будущих
          страниц.
        </p>
      </header>

      <div className="story-list">
        {orderedStories.map((story) => {
          const checked = selectedIds.includes(story.id);
          const position = selectedIds.indexOf(story.id);
          return (
            <article
              className={checked ? "select-row selected" : "select-row"}
              key={story.id}
            >
              <button className="check" onClick={() => onToggleStory(story.id)}>
                {checked ? "✓" : ""}
              </button>
              <span className="select-copy">
                <strong>{story.title}</strong>
                <small>{story.author}</small>
              </span>
              {checked && (
                <span className="order-actions">
                  <button
                    disabled={position <= 0}
                    onClick={() => onMoveStory(story.id, -1)}
                  >
                    ↑
                  </button>
                  <button
                    disabled={position === selectedIds.length - 1}
                    onClick={() => onMoveStory(story.id, 1)}
                  >
                    ↓
                  </button>
                </span>
              )}
            </article>
          );
        })}
      </div>

      <div className="cover-block">
        <p className="section-label">Обложка</p>
        <div className="cover-grid">
          {covers.map((item) => (
            <button
              className={cover === item.id ? `cover ${item.id} active` : `cover ${item.id}`}
              key={item.id}
              onClick={() => onCoverChange(item.id)}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        className="btn-primary sticky-action"
        disabled={selectedIds.length === 0}
        onClick={onPreview}
      >
        Смотреть книгу
      </button>
    </section>
  );
}
