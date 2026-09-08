import { useEffect, useRef, useState } from "react";
import { BackIcon } from "../icons";
import { firstStoryPhoto, storyPhotoTokenRe, type Story } from "../stories";

type Props = {
  onBack: () => void;
  onSave: (story: Omit<Story, "id" | "author" | "when">) => void;
  initialStory?: Story;
};

type TextBlock = { type: "text"; key: string; value: string };
type PhotoBlock = { type: "photo"; key: string; url: string };
type EditorBlock = TextBlock | PhotoBlock;

let blockSeq = 0;
function nextKey(prefix: string) {
  blockSeq += 1;
  return `${prefix}-${blockSeq}`;
}

function blocksFromStory(story?: Story): EditorBlock[] {
  const photos = { ...(story?.photos ?? {}) };
  if (story?.photoUrl && Object.keys(photos).length === 0) {
    photos.cover = story.photoUrl;
  }

  const source = story?.body ?? "";
  const chunks = source.length
    ? source.split(/(\[\[photo:[^\]]+\]\])/).filter((chunk) => chunk.length > 0)
    : [""];

  const blocks: EditorBlock[] = [];
  for (const chunk of chunks) {
    const photo = chunk.match(/^\[\[photo:([^\]]+)\]\]$/);
    if (photo) {
      const url = photos[photo[1]];
      if (url) blocks.push({ type: "photo", key: photo[1], url });
      continue;
    }
    blocks.push({
      type: "text",
      key: nextKey("t"),
      value: chunk.replace(/^\n+/, "").replace(/\n+$/, ""),
    });
  }

  if (!blocks.some((block) => block.type === "photo")) {
    const fallback = firstStoryPhoto(story ?? {});
    if (fallback) {
      blocks.push({ type: "photo", key: nextKey("p"), url: fallback });
    }
  }

  if (blocks.length === 0 || blocks[0].type !== "text") {
    blocks.unshift({ type: "text", key: nextKey("t"), value: "" });
  }
  if (blocks[blocks.length - 1].type !== "text") {
    blocks.push({ type: "text", key: nextKey("t"), value: "" });
  }

  return blocks;
}

function serializeBlocks(blocks: EditorBlock[]) {
  const photos: Record<string, string> = {};
  const parts: string[] = [];

  for (const block of blocks) {
    if (block.type === "text") {
      const value = block.value.trim();
      if (value) parts.push(value);
      continue;
    }
    photos[block.key] = block.url;
    parts.push(`[[photo:${block.key}]]`);
  }

  const photoUrl = Object.values(photos)[0];
  return {
    body: parts.join("\n\n"),
    photos,
    photoUrl,
  };
}

export function NewStory({ onBack, onSave, initialStory }: Props) {
  const [title, setTitle] = useState(initialStory?.title ?? "");
  const [blocks, setBlocks] = useState<EditorBlock[]>(() =>
    blocksFromStory(initialStory),
  );
  const [dropCap, setDropCap] = useState(
    initialStory?.format?.dropCap ?? false,
  );
  const [confirmDraft, setConfirmDraft] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const textRefs = useRef<Record<string, HTMLTextAreaElement | null>>({});
  const activeTextKey = useRef<string | null>(
    blocks.find((block) => block.type === "text")?.key ?? null,
  );

  useEffect(() => {
    for (const block of blocks) {
      if (block.type !== "text") continue;
      const textarea = textRefs.current[block.key];
      if (!textarea) continue;
      textarea.style.height = "0px";
      const min = blocks.length === 1 ? 150 : 72;
      textarea.style.height = `${Math.max(min, textarea.scrollHeight)}px`;
    }
  }, [blocks]);

  const serialized = serializeBlocks(blocks);
  const hasContent =
    serialized.body.replace(storyPhotoTokenRe(), "").trim().length > 0 ||
    Boolean(serialized.photoUrl);
  const canSave = hasContent;

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

  function wrapSelection(marker: "*" | "**") {
    const key = focusedTextKey();
    const textarea = key ? textRefs.current[key] : null;
    if (!key || !textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const selected = value.slice(start, end);
    const next = `${value.slice(0, start)}${marker}${selected}${marker}${value.slice(end)}`;
    updateText(key, next);
    requestAnimationFrame(() => {
      textarea.focus();
      const cursorStart = start + marker.length;
      textarea.setSelectionRange(cursorStart, cursorStart + selected.length);
    });
  }

  function toggleQuote() {
    const key = focusedTextKey();
    const textarea = key ? textRefs.current[key] : null;
    if (!key || !textarea) return;
    const value = textarea.value;
    const lineStart = value.lastIndexOf("\n", textarea.selectionStart - 1) + 1;
    const quoted = value.startsWith("> ", lineStart);
    updateText(
      key,
      quoted
        ? `${value.slice(0, lineStart)}${value.slice(lineStart + 2)}`
        : `${value.slice(0, lineStart)}> ${value.slice(lineStart)}`,
    );
    requestAnimationFrame(() => textarea.focus());
  }

  function insertDivider() {
    const key = focusedTextKey();
    const textarea = key ? textRefs.current[key] : null;
    if (!key || !textarea) return;
    const cursor = textarea.selectionStart;
    const value = textarea.value;
    const divider = `${cursor > 0 ? "\n\n" : ""}•••\n\n`;
    updateText(key, `${value.slice(0, cursor)}${divider}${value.slice(cursor)}`);
    requestAnimationFrame(() => {
      textarea.focus();
      const nextCursor = cursor + divider.length;
      textarea.setSelectionRange(nextCursor, nextCursor);
    });
  }

  function insertPhoto(file: File | undefined) {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const photo: PhotoBlock = { type: "photo", key: nextKey("p"), url };
    const key = focusedTextKey();
    const textarea = key ? textRefs.current[key] : null;
    const cursor = textarea?.selectionStart ?? textarea?.value.length ?? 0;
    const value = textarea?.value ?? "";
    const before = value.slice(0, cursor);
    const rest = value.slice(cursor);

    setBlocks((list) => {
      const index = key ? list.findIndex((block) => block.key === key) : -1;
      if (index === -1) {
        const next = [...list];
        if (next[next.length - 1]?.type !== "text") {
          next.push({ type: "text", key: nextKey("t"), value: "" });
        }
        next.splice(next.length - 1, 0, photo);
        return next;
      }
      return [
        ...list.slice(0, index),
        { type: "text", key: nextKey("t"), value: before },
        photo,
        { type: "text", key: nextKey("t"), value: rest },
        ...list.slice(index + 1),
      ];
    });
  }

  function removePhoto(key: string) {
    setBlocks((list) => {
      const target = list.find(
        (block): block is PhotoBlock =>
          block.type === "photo" && block.key === key,
      );
      if (target?.url.startsWith("blob:")) URL.revokeObjectURL(target.url);
      const next = list.filter((block) => block.key !== key);
      return next.length ? next : [{ type: "text", key: nextKey("t"), value: "" }];
    });
  }

  function save() {
    if (!canSave) return;
    const draft = serializeBlocks(blocks);
    onSave({
      kind: "text",
      title: title.trim() || "Семейная история",
      body: draft.body || undefined,
      photoUrl: draft.photoUrl,
      photos: Object.keys(draft.photos).length ? draft.photos : undefined,
      format: { dropCap },
    });
  }

  return (
    <section className="screen story-composer-screen">
      <header className="composer-head">
        <button
          className="back"
          onClick={() => (hasContent ? setConfirmDraft(true) : onBack())}
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

        <div className="story-editor">
          <div className="format-toolbar" aria-label="Оформление текста">
            <button
              type="button"
              className="format-button is-bold"
              onClick={() => wrapSelection("**")}
              aria-label="Полужирный текст"
              title="Полужирный"
            >
              Ж
            </button>
            <button
              type="button"
              className="format-button is-italic"
              onClick={() => wrapSelection("*")}
              aria-label="Курсив"
              title="Курсив"
            >
              К
            </button>
            <button
              type="button"
              className="format-button"
              onClick={toggleQuote}
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
              А⁺
            </button>
            <span className="format-separator" aria-hidden />
            <button
              type="button"
              className="format-button"
              onClick={() => fileRef.current?.click()}
              aria-label="Вставить фото в текст"
              title="Вставить фото"
            >
              🖼
            </button>
            <button
              type="button"
              className="format-button format-divider-button"
              onClick={insertDivider}
              aria-label="Разделить эпизоды"
              title="Разделитель эпизодов"
            >
              •••
            </button>
          </div>

          {blocks.map((block, index) =>
            block.type === "photo" ? (
              <div className="editor-inline-photo" key={block.key}>
                <div className="editor-inline-photo-frame">
                  <img src={block.url} alt="Фото в истории" />
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
              <textarea
                key={block.key}
                ref={(node) => {
                  textRefs.current[block.key] = node;
                }}
                className={
                  blocks.length === 1 ? "area" : "area area-compact"
                }
                placeholder={
                  index === 0
                    ? "Напишите историю. Фото можно вставить прямо в текст."
                    : "Продолжение истории"
                }
                value={block.value}
                onFocus={() => {
                  activeTextKey.current = block.key;
                }}
                onChange={(e) => updateText(block.key, e.target.value)}
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
            insertPhoto(e.target.files?.[0]);
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
              В прототипе черновик пока не хранится, но сценарий нужен, чтобы
              не потерять набранную историю.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                setConfirmDraft(false);
                onBack();
              }}
            >
              Сохранить черновик
            </button>
            <button className="secondary-action" onClick={onBack}>
              Удалить
            </button>
          </section>
        </div>
      )}
    </section>
  );
}
