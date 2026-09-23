import { useEffect, useRef, useState } from "react";
import {
  BackIcon,
  CameraIcon,
  DropCapIcon,
  SectionBreakIcon,
} from "../../icons";
import type { Story } from "../../domain/story";
import { storyCategories } from "../../constants/storyCategories";
import type { StoryCategory } from "../../domain/story";
import {
  blocksFromStory,
  createPhotoBlock,
  createTextBlock,
  isPhotoBlock,
  serializeBlocks,
  storyPhotoTokenRe,
  type EditorBlock,
  type PhotoBlock,
} from "../../lib/storyFormat";
import {
  clearStoryDraft,
  readStoryDraft,
  writeStoryDraft,
} from "./draftStorage";
import { RichTextBlock } from "./RichTextBlock";
import { htmlToStoryMarkup } from "./richText";
import {
  PhotoEditorModal,
  type PhotoEditorResult,
} from "./PhotoEditorModal";

export type StoryEditorProps = {
  onBack: () => void;
  onSave: (story: Omit<Story, "id" | "author" | "when">) => void;
  initialStory?: Story;
};

export function StoryEditor({
  onBack,
  onSave,
  initialStory,
}: StoryEditorProps) {
  const [draftSeed] = useState(() =>
    initialStory ? null : readStoryDraft(),
  );
  const editorSeed = initialStory ?? draftSeed ?? undefined;
  const [title, setTitle] = useState(editorSeed?.title ?? "");
  const [categories, setCategories] = useState<StoryCategory[]>(
    editorSeed?.categories?.length ? editorSeed.categories : ["История"],
  );
  const [blocks, setBlocks] = useState<EditorBlock[]>(() =>
    blocksFromStory(editorSeed as Story | undefined),
  );
  const [dropCap, setDropCap] = useState(
    editorSeed?.format?.dropCap ?? false,
  );
  const [confirmDraft, setConfirmDraft] = useState(false);
  const [pendingPhoto, setPendingPhoto] = useState<{
    file?: File;
    block?: PhotoBlock;
  } | null>(null);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    quote: false,
  });
  const fileRef = useRef<HTMLInputElement>(null);
  const savedRange = useRef<Range | null>(null);
  const textRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const activeTextKey = useRef<string | null>(
    blocks.find((block) => block.type === "text")?.key ?? null,
  );

  const serialized = serializeBlocks(blocks);
  const hasContent =
    serialized.body.replace(storyPhotoTokenRe(), "").trim().length > 0 ||
    Boolean(serialized.photoUrl);
  const canSave = hasContent;

  function toggleCategory(category: StoryCategory) {
    setCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  }

  function quoteAncestor(node: Node | null, editor: HTMLElement) {
    const element =
      node instanceof HTMLElement ? node : node?.parentElement ?? null;
    const quote = element?.closest("q") ?? null;
    return quote && editor.contains(quote) ? quote : null;
  }

  function readActiveFormats() {
    const key = focusedTextKey();
    const editor = key ? textRefs.current[key] : null;
    const selection = window.getSelection();
    if (!editor || !selection?.anchorNode || !editor.contains(selection.anchorNode)) {
      return;
    }
    if (selection.rangeCount) savedRange.current = selection.getRangeAt(0).cloneRange();
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      quote: Boolean(quoteAncestor(selection.anchorNode, editor)),
    });
  }

  useEffect(() => {
    document.addEventListener("selectionchange", readActiveFormats);
    return () => document.removeEventListener("selectionchange", readActiveFormats);
  });

  function restoreSelection(editor: HTMLElement) {
    const range = savedRange.current;
    const selection = window.getSelection();
    if (!range || !selection || !editor.contains(range.commonAncestorContainer)) return;
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function updateText(key: string, value: string) {
    setBlocks((list) =>
      list.map((block) =>
        block.type === "text" && block.key === key ? { ...block, value } : block,
      ),
    );
  }

  function focusedTextKey() {
    return (
      activeTextKey.current ??
      blocks.find((block) => block.type === "text")?.key ??
      null
    );
  }

  function applyInlineFormat(command: "bold" | "italic") {
    const key = focusedTextKey();
    const editor = key ? textRefs.current[key] : null;
    if (!key || !editor) return;
    editor.focus();
    restoreSelection(editor);
    document.execCommand(command, false);
    updateText(key, htmlToStoryMarkup(editor));
    readActiveFormats();
  }

  function toggleQuote() {
    const key = focusedTextKey();
    const editor = key ? textRefs.current[key] : null;
    if (!key || !editor) return;
    editor.focus();
    restoreSelection(editor);
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    if (!editor.contains(range.commonAncestorContainer)) return;

    const existingQuote = quoteAncestor(selection.anchorNode, editor);
    if (existingQuote) {
      const contents = Array.from(existingQuote.childNodes);
      existingQuote.replaceWith(...contents);
      updateText(key, htmlToStoryMarkup(editor));
      setActiveFormats((current) => ({ ...current, quote: false }));
      return;
    }
    if (selection.isCollapsed) return;

    const quote = document.createElement("q");
    quote.append(range.extractContents());
    range.insertNode(quote);
    selection.removeAllRanges();
    const nextRange = document.createRange();
    nextRange.selectNodeContents(quote);
    selection.addRange(nextRange);
    updateText(key, htmlToStoryMarkup(editor));
    setActiveFormats((current) => ({ ...current, quote: true }));
  }

  function insertDivider() {
    const key = focusedTextKey();
    const editor = key ? textRefs.current[key] : null;
    if (!key || !editor) return;
    editor.focus();
    restoreSelection(editor);
    document.execCommand("insertText", false, "\n\n•••\n\n");
    updateText(key, htmlToStoryMarkup(editor));
  }

  function insertEditedPhoto(result: PhotoEditorResult) {
    if (pendingPhoto?.block) {
      const targetKey = pendingPhoto.block.key;
      setBlocks((list) =>
        list.map((block) =>
          block.type === "photo" && block.key === targetKey
            ? { ...block, url: result.dataUrl, edit: result.edit }
            : block,
        ),
      );
      setPendingPhoto(null);
      return;
    }

      const photo = createPhotoBlock(result.dataUrl, result.edit);
      const key = focusedTextKey();
      const editor = key ? textRefs.current[key] : null;
      const before = editor ? htmlToStoryMarkup(editor) : "";
      const rest = "";

      setBlocks((list) => {
        const index = key ? list.findIndex((block) => block.key === key) : -1;
        if (index === -1) {
          const next = [...list];
          if (next[next.length - 1]?.type !== "text") {
            next.push(createTextBlock());
          }
          next.splice(next.length - 1, 0, photo);
          return next;
        }
        return [
          ...list.slice(0, index),
          createTextBlock(before),
          photo,
          createTextBlock(rest),
          ...list.slice(index + 1),
        ];
      });
    setPendingPhoto(null);
  }

  function removePhoto(key: string) {
    setBlocks((list) => {
      const target = list.find(
        (block): block is PhotoBlock => isPhotoBlock(block) && block.key === key,
      );
      if (target?.url.startsWith("blob:")) URL.revokeObjectURL(target.url);
      const next = list.filter((block) => block.key !== key);
      return next.length ? next : [createTextBlock()];
    });
  }

  function save() {
    if (!canSave) return;
    const draft = serializeBlocks(blocks);
    clearStoryDraft();
    onSave({
      kind: "text",
      title: title.trim() || "Семейная история",
      categories: categories.length ? categories : ["История"],
      body: draft.body || undefined,
      photoUrl: draft.photoUrl,
      photos: Object.keys(draft.photos).length ? draft.photos : undefined,
      photoEdits: Object.keys(draft.photoEdits).length
        ? draft.photoEdits
        : undefined,
      format: { dropCap },
    });
  }

  return (
    <section className="screen story-composer-screen">
      <header className="composer-head">
        <button
          className="back"
          onClick={() => {
            if (hasContent || title.trim()) {
              setConfirmDraft(true);
              return;
            }
            clearStoryDraft();
            onBack();
          }}
          aria-label="Назад"
        >
          <BackIcon />
        </button>
        <h1>{initialStory ? "Редактировать историю" : "Новая история"}</h1>
      </header>

      <div className="composer-body">
        <input
          className="field story-title-field"
          placeholder="Название истории"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <fieldset className="story-category-fieldset">
          <legend>Категории</legend>
          <p>Можно выбрать несколько</p>
          <div className="category-chips" aria-label="Категории истории">
            {storyCategories.map((category) => {
              const active = categories.includes(category);
              return (
                <button
                  type="button"
                  key={category}
                  className={active ? "category-chip active" : "category-chip"}
                  aria-pressed={active}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="format-toolbar" aria-label="Оформление текста">
            <button
              type="button"
              className={
                activeFormats.bold
                  ? "format-button is-bold active"
                  : "format-button is-bold"
              }
              onPointerDown={(event) => event.preventDefault()}
              onClick={() => applyInlineFormat("bold")}
              aria-pressed={activeFormats.bold}
              aria-label="Полужирный текст"
              title="Полужирный"
            >
              Ж
            </button>
            <button
              type="button"
              className={
                activeFormats.italic
                  ? "format-button is-italic active"
                  : "format-button is-italic"
              }
              onPointerDown={(event) => event.preventDefault()}
              onClick={() => applyInlineFormat("italic")}
              aria-pressed={activeFormats.italic}
              aria-label="Курсив"
              title="Курсив"
            >
              К
            </button>
            <button
              type="button"
              className={
                activeFormats.quote ? "format-button active" : "format-button"
              }
              onPointerDown={(event) => event.preventDefault()}
              onClick={toggleQuote}
              aria-pressed={activeFormats.quote}
              aria-label="Цитата"
              title="Цитата"
            >
              „
            </button>
            <button
              type="button"
              className={dropCap ? "format-button active" : "format-button"}
              onClick={() => setDropCap((value) => !value)}
              aria-pressed={dropCap}
              title="Буквица"
            >
              <DropCapIcon />
            </button>
            <span className="format-separator" aria-hidden />
            <button
              type="button"
              className="format-button"
              onClick={() => fileRef.current?.click()}
              aria-label="Вставить фото в текст"
              title="Вставить фото"
            >
              <CameraIcon />
            </button>
            <button
              type="button"
              className="format-button format-divider-button"
              onClick={insertDivider}
              aria-label="Разделить эпизоды"
              title="Разделитель эпизодов"
            >
              <SectionBreakIcon />
              <span>Раздел</span>
            </button>
        </div>

        <div className="story-editor">
          {blocks.map((block, index) =>
            block.type === "photo" ? (
              <div className="editor-inline-photo" key={block.key}>
                <div className="editor-inline-photo-frame">
                  <button
                    type="button"
                    className="editor-photo-edit"
                    onClick={() => setPendingPhoto({ block })}
                    aria-label="Редактировать фотографию"
                  >
                    <img src={block.url} alt="Фото в истории" />
                    <span>Изменить</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => removePhoto(block.key)}
                    aria-label="Удалить фотографию"
                  >
                    ×
                  </button>
                </div>
              </div>
            ) : (
              <RichTextBlock
                key={block.key}
                register={(node) => {
                  textRefs.current[block.key] = node;
                }}
                placeholder={
                  index === 0
                    ? "Напишите историю. Фото можно вставить прямо в текст."
                    : "Продолжение истории"
                }
                value={block.value}
                compact={blocks.length !== 1}
                dropCap={dropCap && index === 0}
                onFocus={() => {
                  activeTextKey.current = block.key;
                }}
                onChange={(value) => updateText(block.key, value)}
              />
            ),
          )}
        </div>

        <input
          ref={fileRef}
          className="hidden-file"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setPendingPhoto({ file });
            e.target.value = "";
          }}
        />
      </div>

      <button
        className="btn-primary composer-save"
        disabled={!canSave}
        onClick={save}
      >
        Сохранить историю
      </button>

      {confirmDraft && (
        <div className="modal-backdrop" role="presentation">
          <section className="invite-modal" role="dialog" aria-modal="true">
            <p className="kicker">Черновик</p>
            <h2>Сохранить эту историю как черновик?</h2>
            <p>
              Черновик останется на этом устройстве, и вы сможете продолжить
              с того же места.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                const draft = serializeBlocks(blocks);
                writeStoryDraft({
                  title,
                  categories,
                  body: draft.body,
                  photoUrl: draft.photoUrl,
                  photos: draft.photos,
                  photoEdits: draft.photoEdits,
                  format: { dropCap },
                });
                setConfirmDraft(false);
                onBack();
              }}
            >
              Сохранить черновик
            </button>
            <button
              className="secondary-action"
              onClick={() => {
                clearStoryDraft();
                setConfirmDraft(false);
                onBack();
              }}
            >
              Выйти без сохранения
            </button>
            <button
              className="text-action"
              onClick={() => setConfirmDraft(false)}
            >
              Продолжить редактирование
            </button>
          </section>
        </div>
      )}
      {pendingPhoto && (
        <PhotoEditorModal
          file={pendingPhoto.file}
          initial={pendingPhoto.block?.edit ?? {
            sourceUrl: pendingPhoto.block?.url ?? "",
            aspect: "landscape",
            zoom: 1,
            panX: 0,
            panY: 0,
            backdrop: "none",
            backdropIntensity: 30,
            caption: "",
          }}
          onCancel={() => setPendingPhoto(null)}
          onApply={insertEditedPhoto}
        />
      )}
    </section>
  );
}
