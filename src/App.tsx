import { useState } from "react";
import { BookBuilder } from "./screens/BookBuilder";
import { BookPreview } from "./screens/BookPreview";
import { Family } from "./screens/Family";
import { Home } from "./screens/Home";
import { InviteModal } from "./screens/InviteModal";
import { JoinFamily } from "./screens/JoinFamily";
import { Library } from "./screens/Library";
import { NewStory } from "./screens/NewStory";
import { Onboarding } from "./screens/Onboarding";
import { Order } from "./screens/Order";
import { Splash } from "./screens/Splash";
import { StoryDetail } from "./screens/StoryDetail";
import {
  fairyTales,
  rhymes,
  seedStories,
  type CoverKind,
  type Story,
} from "./stories";

type MainScreen = "home" | "stories" | "book" | "family";
type Screen =
  | "splash"
  | "onboarding"
  | "join"
  | MainScreen
  | "new-story"
  | "story-detail"
  | "preview"
  | "order";

const navItems: Array<{ id: MainScreen; label: string }> = [
  { id: "home", label: "Главная" },
  { id: "stories", label: "Истории" },
  { id: "book", label: "Книга" },
  { id: "family", label: "Семья" },
];

export function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [stories, setStories] = useState<Story[]>(seedStories);
  const [returnScreen, setReturnScreen] = useState<MainScreen>("home");
  const [activeStoryId, setActiveStoryId] = useState(seedStories[0]?.id ?? "");
  const [selectedIds, setSelectedIds] = useState<string[]>(
    seedStories.filter((story) => story.selected).map((story) => story.id),
  );
  const [cover, setCover] = useState<CoverKind>("linen");
  const [inviteOpen, setInviteOpen] = useState(false);

  const allBookStories: Story[] = [
    ...stories,
    ...rhymes.map<Story>((item) => ({
      id: `rhyme-${item.id}`,
      kind: "text",
      title: item.title,
      author: "Потешка",
      when: "из общей библиотеки",
      body: item.body,
    })),
    ...fairyTales.map<Story>((item) => ({
      id: `tale-${item.id}`,
      kind: "text",
      title: item.title,
      author: "Сказка",
      when: "из общей библиотеки",
      body: item.body,
    })),
  ];

  const activeStory =
    allBookStories.find((story) => story.id === activeStoryId) ?? stories[0];

  const showNav =
    screen === "home" || screen === "stories" || screen === "book" || screen === "family";

  function finishSplash() {
    if (window.location.hash.includes("join_")) {
      setScreen("join");
      return;
    }

    if (window.localStorage.getItem("family-stories-onboarded") === "1") {
      setScreen("home");
      return;
    }

    setScreen("onboarding");
  }

  function finishOnboarding() {
    window.localStorage.setItem("family-stories-onboarded", "1");
    setScreen("home");
  }

  function openStory(storyId: string, from: MainScreen) {
    setActiveStoryId(storyId);
    setReturnScreen(from);
    setScreen("story-detail");
  }

  function toggleBook(storyId: string) {
    setSelectedIds((current) =>
      current.includes(storyId)
        ? current.filter((id) => id !== storyId)
        : [...current, storyId],
    );
  }

  function moveBookStory(storyId: string, direction: -1 | 1) {
    setSelectedIds((current) => {
      const index = current.indexOf(storyId);
      const nextIndex = index + direction;
      if (index < 0 || nextIndex < 0 || nextIndex >= current.length) return current;
      const next = [...current];
      [next[index], next[nextIndex]] = [next[nextIndex], next[index]];
      return next;
    });
  }

  return (
    <div className="stage">
      <div className="phone">
        {screen === "splash" && <Splash onDone={finishSplash} />}
        {screen === "onboarding" && (
          <Onboarding onDone={finishOnboarding} />
        )}
        {screen === "join" && (
          <JoinFamily
            onJoin={() => {
              window.localStorage.setItem("family-stories-onboarded", "1");
              setScreen("home");
            }}
            onCancel={() => {
              window.history.replaceState(null, "", window.location.pathname);
              setScreen(
                window.localStorage.getItem("family-stories-onboarded") === "1"
                  ? "home"
                  : "onboarding",
              );
            }}
          />
        )}
        {screen === "home" && (
          <Home
            stories={stories}
            onNewStory={() => setScreen("new-story")}
            onOpenStory={(storyId) => openStory(storyId, "home")}
            onInvite={() => setInviteOpen(true)}
          />
        )}
        {screen === "stories" && (
          <Library
            stories={stories}
            selectedIds={selectedIds}
            onOpenStory={(storyId) => openStory(storyId, "stories")}
            onToggleBook={toggleBook}
          />
        )}
        {screen === "book" && (
          <BookBuilder
            stories={allBookStories}
            selectedIds={selectedIds}
            cover={cover}
            onToggleStory={toggleBook}
            onMoveStory={moveBookStory}
            onCoverChange={setCover}
            onPreview={() => setScreen("preview")}
          />
        )}
        {screen === "family" && <Family onInvite={() => setInviteOpen(true)} />}
        {screen === "new-story" && (
          <NewStory
            onBack={() => setScreen("home")}
            onSave={(draft) => {
              const id = crypto.randomUUID();
              const story = {
                ...draft,
                id,
                author: "Мама",
                when: "сейчас",
              };
              setStories((list) => [
                story,
                ...list,
              ]);
              setActiveStoryId(id);
              setReturnScreen("home");
              setScreen("story-detail");
            }}
          />
        )}
        {screen === "story-detail" && activeStory && (
          <StoryDetail
            story={activeStory}
            inBook={selectedIds.includes(activeStory.id)}
            onBack={() => setScreen(returnScreen)}
            onToggleBook={toggleBook}
            onEdit={() => setScreen("new-story")}
          />
        )}
        {screen === "preview" && (
          <BookPreview
            stories={allBookStories}
            selectedIds={selectedIds}
            cover={cover}
            onBack={() => setScreen("book")}
            onOrder={() => setScreen("order")}
          />
        )}
        {screen === "order" && (
          <Order
            cover={cover}
            pageCount={selectedIds.length}
            onBack={() => setScreen("preview")}
          />
        )}
        {showNav && (
          <nav className="bottom-nav" aria-label="Основная навигация">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={screen === item.id ? "nav-item active" : "nav-item"}
                onClick={() => setScreen(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
        {inviteOpen && <InviteModal onClose={() => setInviteOpen(false)} />}
      </div>
    </div>
  );
}
