import { Fragment } from "react";
import type { StoryFormat } from "../domain/story";
import { storyPhotoTokenSplitRe } from "../lib/storyFormat";

type Props = {
  body?: string;
  photos?: Record<string, string>;
  format?: StoryFormat;
  className?: string;
};

function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}

function renderTextBlock(content: string, key: string) {
  const quote = content.startsWith("> ");
  const text = quote ? content.slice(2) : content;
  return quote ? (
    <blockquote key={key}>{inline(text)}</blockquote>
  ) : (
    <p key={key}>{inline(text)}</p>
  );
}

export function FormattedStoryBody({
  body,
  photos = {},
  format,
  className = "",
}: Props) {
  const source = body?.trim() || "Текст истории пока не добавлен";
  const chunks = source.split(storyPhotoTokenSplitRe());
  const classes = [
    "formatted-story",
    format?.dropCap ? "has-drop-cap" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {chunks.flatMap((chunk, chunkIndex) => {
        const photo = chunk.match(/^\[\[photo:([^\]]+)\]\]$/);
        if (photo) {
          const url = photos[photo[1]];
          if (!url) return [];
          return [
            <figure className="story-inline-photo" key={`photo-${chunkIndex}`}>
              <img src={url} alt="" />
            </figure>,
          ];
        }

        return chunk
          .split(/\n\s*\n/)
          .map((block) => block.trim())
          .filter(Boolean)
          .map((block, index) => {
            if (block === "•••") {
              return (
                <div
                  className="story-episode-divider"
                  key={`${chunkIndex}-d-${index}`}
                  aria-hidden
                >
                  •••
                </div>
              );
            }
            return renderTextBlock(block, `${chunkIndex}-t-${index}`);
          });
      })}
    </div>
  );
}
