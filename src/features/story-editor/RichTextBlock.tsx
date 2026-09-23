import { useEffect, useRef } from "react";
import { htmlToStoryMarkup, storyMarkupToHtml } from "./richText";

type Props = {
  value: string;
  placeholder: string;
  compact: boolean;
  dropCap?: boolean;
  register: (node: HTMLDivElement | null) => void;
  onFocus: () => void;
  onChange: (value: string) => void;
};

export function RichTextBlock({
  value,
  placeholder,
  compact,
  dropCap = false,
  register,
  onFocus,
  onChange,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || document.activeElement === node) return;
    const html = storyMarkupToHtml(value);
    if (node.innerHTML !== html) node.innerHTML = html;
  }, [value]);

  return (
    <div
      ref={(node) => {
        ref.current = node;
        register(node);
        if (node && !node.innerHTML) node.innerHTML = storyMarkupToHtml(value);
      }}
      className={[
        "rich-area",
        compact ? "rich-area-compact" : "",
        dropCap ? "has-drop-cap" : "",
      ].filter(Boolean).join(" ")}
      contentEditable
      suppressContentEditableWarning
      role="textbox"
      aria-multiline="true"
      aria-label={placeholder}
      data-placeholder={placeholder}
      onFocus={onFocus}
      onInput={(event) => onChange(htmlToStoryMarkup(event.currentTarget))}
    />
  );
}
