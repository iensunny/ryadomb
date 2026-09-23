import { DndContext, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { createPortal } from "react-dom";
import type { Book, BookCoverDesign, BookItem, CoverKind } from "../domain/book";
import type { Story } from "../domain/story";
import { CoverEditor } from "../ui/CoverEditor";

type Props = { stories: Story[]; book: Book; onRenameBook: (title: string) => void; onToggleStory: (storyId: string) => void; onReorderItems: (activeId: string, overId: string) => void; onCoverChange: (cover: CoverKind) => void; onCoverSubtitleChange: (subtitle: string) => void; onCoverDesignChange: (design: BookCoverDesign) => void; onAddPage: () => void; onUpdatePage: (id: string, text: string) => void; onRemovePage: (id: string) => void; onPreview: () => void };

function SortableItem({ item, story, onRemoveStory, onUpdatePage, onRemovePage }: { item: BookItem; story?: Story; onRemoveStory: () => void; onUpdatePage: (text: string) => void; onRemovePage: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id });
  return <article ref={setNodeRef} className={isDragging ? "select-row selected is-dragging book-item" : "select-row selected book-item"} style={{ transform: CSS.Transform.toString(transform), transition }}>
    <button className="drag-handle" aria-label="Перетащить страницу" {...attributes} {...listeners}>⠿</button>
    {item.type === "story" && story ? <><span className="select-copy"><strong>{story.title}</strong><small>{story.author}</small></span><button className="check checked" onClick={onRemoveStory} aria-label={`Убрать «${story.title}» из книги`}>✓</button></> : <><label className="custom-page-copy"><strong>Своя страница</strong><textarea value={item.type === "page" ? item.text : ""} onChange={(event) => onUpdatePage(event.target.value)} placeholder="Напишите заголовок, посвящение или любой свой текст…" rows={3} /></label><button className="remove-page" onClick={onRemovePage} aria-label="Удалить свою страницу">×</button></>}
  </article>;
}

export function BookBuilder({ stories, book, onRenameBook, onToggleStory, onReorderItems, onCoverChange, onCoverSubtitleChange, onCoverDesignChange, onAddPage, onUpdatePage, onRemovePage, onPreview }: Props) {
  const [coverEditorOpen, setCoverEditorOpen] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));
  const selectedStoryIds = new Set(book.items.filter((item) => item.type === "story").map((item) => item.storyId));
  const availableStories = stories.filter((story) => !selectedStoryIds.has(story.id));
  const storyById = new Map(stories.map((story) => [story.id, story]));
  function handleDragEnd(event: DragEndEvent) { const { active, over } = event; if (over && active.id !== over.id) onReorderItems(String(active.id), String(over.id)); }
  return <section className="screen screen-scroll with-nav">
    <header className="page-head"><p className="kicker">Моя книга</p><h1>Семейная книга</h1><p>Соберите истории и свои страницы в нужном порядке.</p></header>
    <label className="book-title-field"><span className="section-label">Название книги</span><input className="field" value={book.title} onChange={(event) => onRenameBook(event.target.value)} placeholder="Например, Истории нашей семьи" /></label>
    <div className="book-pages-head"><p className="section-label">Страницы · {book.items.length}</p><button className="add-own-page" onClick={onAddPage}>+ Своя страница</button></div>
    <p className="section-hint">Добавьте посвящение или название раздела, а затем перетащите страницу в нужное место.</p>
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}><SortableContext items={book.items.map((item) => item.id)} strategy={verticalListSortingStrategy}><div className="story-list sortable-list">{book.items.map((item) => <SortableItem key={item.id} item={item} story={item.type === "story" ? storyById.get(item.storyId) : undefined} onRemoveStory={() => item.type === "story" && onToggleStory(item.storyId)} onUpdatePage={(text) => onUpdatePage(item.id, text)} onRemovePage={() => onRemovePage(item.id)} />)}</div></SortableContext></DndContext>
    {availableStories.length > 0 && <><p className="section-label book-available-label">Добавить историю</p><div className="story-list">{availableStories.map((story) => <article className="select-row" key={story.id}><button className="check" onClick={() => onToggleStory(story.id)} aria-label={`Добавить «${story.title}» в книгу`}>+</button><span className="select-copy"><strong>{story.title}</strong><small>{story.author}</small></span></article>)}</div></>}
    <div className="cover-block cover-summary"><div><p className="section-label">Обложка</p><p className="section-hint">Название, подпись и оформление</p></div><button className="open-cover-editor" onClick={() => setCoverEditorOpen(true)}>Настроить</button></div>
    {coverEditorOpen && createPortal(<CoverEditor book={book} onClose={() => setCoverEditorOpen(false)} onRename={onRenameBook} onSubtitle={onCoverSubtitleChange} onCover={onCoverChange} onDesign={onCoverDesignChange} />, document.body)}
    <button className="btn-primary sticky-action" disabled={!book.items.some((item) => item.type === "story")} onClick={onPreview}>Смотреть книгу</button>
  </section>;
}
