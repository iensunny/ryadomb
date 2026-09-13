import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { covers } from "../constants/covers";
import type { Book, CoverKind } from "../domain/book";
import type { Story } from "../domain/story";

type Props = {
  stories: Story[];
  book: Book;
  onRenameBook: (title: string) => void;
  onToggleStory: (storyId: string) => void;
  onReorderStories: (activeId: string, overId: string) => void;
  onCoverChange: (cover: CoverKind) => void;
  onPreview: () => void;
};

function SortableStory({
  story,
  onRemove,
}: {
  story: Story;
  onRemove: () => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: story.id });

  return (
    <article
      ref={setNodeRef}
      className={
        isDragging ? "select-row selected is-dragging" : "select-row selected"
      }
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      <button
        className="drag-handle"
        aria-label={`Перетащить «${story.title}»`}
        {...attributes}
        {...listeners}
      >
        ⠿
      </button>
      <span className="select-copy">
        <strong>{story.title}</strong>
        <small>{story.author}</small>
      </span>
      <button
        className="check checked"
        onClick={onRemove}
        aria-label={`Убрать «${story.title}» из книги`}
      >
        ✓
      </button>
    </article>
  );
}

export function BookBuilder({
  stories,
  book,
  onRenameBook,
  onToggleStory,
  onReorderStories,
  onCoverChange,
  onPreview,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const selectedStories = book.storyIds
    .map((id) => stories.find((story) => story.id === id))
    .filter((story): story is Story => Boolean(story));
  const availableStories = stories.filter(
    (story) => !book.storyIds.includes(story.id),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      onReorderStories(String(active.id), String(over.id));
    }
  }

  return (
    <section className="screen screen-scroll with-nav">
      <header className="page-head">
        <p className="kicker">Моя книга</p>
        <h1>Семейная книга</h1>
        <p>Соберите истории семьи в одну книгу.</p>
      </header>

      <label className="book-title-field">
        <span className="section-label">Название книги</span>
        <input
          className="field"
          value={book.title}
          onChange={(event) => onRenameBook(event.target.value)}
          placeholder="Например, Истории нашей семьи"
        />
      </label>

      <p className="section-label">Страницы · {book.storyIds.length}</p>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={book.storyIds}
          strategy={verticalListSortingStrategy}
        >
          <div className="story-list sortable-list">
            {selectedStories.map((story) => (
              <SortableStory
                key={story.id}
                story={story}
                onRemove={() => onToggleStory(story.id)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {availableStories.length > 0 && (
        <>
          <p className="section-label book-available-label">Добавить в книгу</p>
          <div className="story-list">
            {availableStories.map((story) => (
              <article className="select-row" key={story.id}>
                <button
                  className="check"
                  onClick={() => onToggleStory(story.id)}
                  aria-label={`Добавить «${story.title}» в книгу`}
                >
                  +
                </button>
                <span className="select-copy">
                  <strong>{story.title}</strong>
                  <small>{story.author}</small>
                </span>
              </article>
            ))}
          </div>
        </>
      )}

      <div className="cover-block">
        <p className="section-label">Обложка</p>
        <div className="cover-grid">
          {covers.map((item) => (
            <button
              className={
                book.cover === item.id
                  ? `cover ${item.id} active`
                  : `cover ${item.id}`
              }
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
        disabled={book.storyIds.length === 0}
        onClick={onPreview}
      >
        Смотреть книгу
      </button>
    </section>
  );
}
