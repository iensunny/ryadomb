import {
  StoryEditor,
  type StoryEditorProps,
} from "../features/story-editor";

/** Маршрут страницы; сам редактор изолирован в features/story-editor. */
export function NewStory(props: StoryEditorProps) {
  return <StoryEditor {...props} />;
}
