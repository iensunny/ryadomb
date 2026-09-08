import { useEffect, useMemo, useState } from "react";
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
import { Profile } from "./screens/Profile";
import { Splash } from "./screens/Splash";
import { StoryDetail } from "./screens/StoryDetail";
import { downloadBookPdf } from "./lib/bookPdf";
import {
  emptyBook,
  fairyTales,
  familyMembers,
  rhymes,
  seedBooks,
  seedStories,
  type Book,
  type CoverKind,
  type Story,
} from "./stories";
import { bridge, onVkConfig, onVkFragment, usingBridgeMock } from "./vk/bridge";
import {
  bootSession,
  familyTitle,
  fullName,
  isDesktopPlatform,
  type AppSession,
} from "./vk/session";
import { getOnboarded, setOnboarded } from "./vk/storage";

const initialStories = usingBridgeMock ? seedStories : [];
const initialBook = usingBridgeMock ? seedBooks[0] : emptyBook;

type MainScreen = "home" | "stories" | "book" | "family" | "profile";
type Screen =
  | "splash"
  | "vk-required"
  | "onboarding"
  | "join"
  | MainScreen
  | "new-story"
  | "story-detail"
  | "preview"
  | "order";

const navItems: Array<{
  id: Exclude<MainScreen, "profile">;
  label: string;
}> = [
  { id: "home", label: "Главная" },
  { id: "stories", label: "Истории" },
  { id: "book", label: "Книга" },
  { id: "family", label: "Семья" },
];

function hasJoinFragment(value: string) {
  return value.includes("join_");
}

export function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [session, setSession] = useState<AppSession | null>(null);
  const [desktop, setDesktop] = useState(
    () => window.innerWidth >= 900,
  );
  const [stories, setStories] = useState<Story[]>(initialStories);
  const [returnScreen, setReturnScreen] = useState<MainScreen>("home");
  const [activeStoryId, setActiveStoryId] = useState(
    initialStories[0]?.id ?? "",
  );
  const [editingStoryId, setEditingStoryId] = useState<string | null>(null);
  const [book, setBook] = useState<Book>(initialBook);
  const [inviteOpen, setInviteOpen] = useState(false);

  const familyName = session
    ? familyTitle(session.user)
    : usingBridgeMock
      ? "Семья Ивановых"
      : "Ваша семья";
  const activeBook = book;

  const members = useMemo(() => {
    if (!session) return usingBridgeMock ? familyMembers : [];
    const self = {
      id: "m-self",
      name: fullName(session.user),
      role: "Владелец семьи",
      initials: `${session.user.firstName.at(0) ?? ""}${session.user.lastName.at(0) ?? ""}`,
      photoUrl: session.user.photoUrl,
      isYou: true,
    };
    if (!usingBridgeMock) return [self];
    return [
      self,
      ...familyMembers
        .filter((member) => member.id !== "m1")
        .map((member) => ({ ...member, isYou: false, photoUrl: undefined })),
    ];
  }, [session]);

  useEffect(() => {
    const previewScreen = new URLSearchParams(window.location.search).get(
      "preview",
    );
    if (import.meta.env.DEV && previewScreen === "splash") return;
    if (
      import.meta.env.DEV &&
      (previewScreen === "onboarding" || previewScreen === "home")
    ) {
      setScreen(previewScreen);
      void bootSession().then((next) => {
        setSession(next);
        setDesktop(
          isDesktopPlatform(next.launch.platform, window.innerWidth),
        );
      });
      return;
    }

    const pause = usingBridgeMock
      ? Promise.resolve()
      : new Promise((resolve) => window.setTimeout(resolve, 400));

    Promise.all([bootSession(), pause])
      .then(([next]) => {
        setSession(next);
        setDesktop(
          isDesktopPlatform(next.launch.platform, window.innerWidth),
        );
        if (next.launch.platform === "desktop_web") {
          bridge
            .send("VKWebAppResizeWindow", { width: 1000, height: 800 })
            .catch(() => undefined);
        }

        const fragment = window.location.hash.replace(/^#/, "");
        if (hasJoinFragment(fragment)) {
          setScreen("join");
          return;
        }
        return getOnboarded().then((onboarded) => {
          setScreen(onboarded ? "home" : "onboarding");
        });
      })
      .catch(() => {
        setScreen("vk-required");
      });
  }, []);

  useEffect(() => {
    if (!session) return;
    setStories((list) =>
      list.map((story) =>
        story.author === "Мама"
          ? { ...story, author: session.user.firstName }
          : story,
      ),
    );
  }, [session]);

  useEffect(() => {
    const offConfig = onVkConfig((config) => {
      const width = config.viewportWidth ?? window.innerWidth;
      setDesktop(isDesktopPlatform(session?.launch.platform, width));
      if (config.insets) {
        document.documentElement.style.setProperty(
          "--vk-inset-top",
          `${config.insets.top}px`,
        );
        document.documentElement.style.setProperty(
          "--vk-inset-bottom",
          `${config.insets.bottom}px`,
        );
      }
    });

    const mq = window.matchMedia("(min-width: 900px)");
    const syncLayout = () => {
      setDesktop(isDesktopPlatform(session?.launch.platform, window.innerWidth));
    };
    syncLayout();
    mq.addEventListener("change", syncLayout);
    window.addEventListener("resize", syncLayout);

    const applyFragment = (location: string) => {
      if (hasJoinFragment(location)) setScreen("join");
    };

    const offFragment = onVkFragment(applyFragment);
    const onHash = () => applyFragment(window.location.hash.replace(/^#/, ""));
    window.addEventListener("hashchange", onHash);

    return () => {
      offConfig();
      offFragment();
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("resize", syncLayout);
      mq.removeEventListener("change", syncLayout);
    };
  }, [session]);

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

  const showShell =
    screen === "home" ||
    screen === "stories" ||
    screen === "book" ||
    screen === "family" ||
    screen === "profile";
  const showBottomNav =
    screen === "home" ||
    screen === "stories" ||
    screen === "book" ||
    screen === "family";

  function openProfile() {
    if (showBottomNav) setReturnScreen(screen as MainScreen);
    setScreen("profile");
  }

  function finishOnboarding() {
    void setOnboarded();
    setScreen("home");
  }

  function openStory(storyId: string, from: Exclude<MainScreen, "profile">) {
    setActiveStoryId(storyId);
    setReturnScreen(from);
    setScreen("story-detail");
  }

  function toggleBook(storyId: string) {
    setBook((current) => ({
      ...current,
      storyIds: current.storyIds.includes(storyId)
        ? current.storyIds.filter((id) => id !== storyId)
        : [...current.storyIds, storyId],
    }));
  }

  function updateActiveBook(changes: Partial<Book>) {
    setBook((current) => ({ ...current, ...changes }));
  }

  function reorderBookStories(activeId: string, overId: string) {
    const from = book.storyIds.indexOf(activeId);
    const to = book.storyIds.indexOf(overId);
    if (from < 0 || to < 0) return;
    const next = [...book.storyIds];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    updateActiveBook({ storyIds: next });
  }

  async function clearJoinFragment() {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    try {
      await bridge.send("VKWebAppSetLocation", { location: "" });
    } catch {
      // Локальный mock это событие не реализует.
    }
  }

  const nav = (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          className={screen === item.id ? "nav-item active" : "nav-item"}
          onClick={() => setScreen(item.id)}
        >
          {item.label}
        </button>
      ))}
    </>
  );

  return (
    <div className={desktop ? "app-shell is-desktop" : "app-shell"}>
      {showShell && session && (
        <aside className="app-sidebar">
          <nav className="sidebar-nav" aria-label="Основная навигация">
            {nav}
          </nav>
        </aside>
      )}

      <div className="app-main">
        {screen === "splash" && <Splash />}
        {screen === "vk-required" && (
          <section className="screen join-screen">
            <div className="join-card">
              <p className="kicker">ВКонтакте</p>
              <h1>Откройте приложение во ВКонтакте</h1>
              <p>
                Вход и кабинет работают через VK Bridge: VKWebAppInit и
                VKWebAppGetUserInfo. Отдельного пароля внутри Mini App нет.
              </p>
            </div>
          </section>
        )}
        {screen === "onboarding" && (
          <Onboarding
            initialStep={
              import.meta.env.DEV &&
              new URLSearchParams(window.location.search).get("step") === "2"
                ? 1
                : 0
            }
            onDone={finishOnboarding}
          />
        )}
        {screen === "join" && session && (
          <JoinFamily
            familyName={familyName}
            userName={fullName(session.user)}
            photoUrl={session.user.photoUrl}
            onJoin={() => {
              void setOnboarded();
              void clearJoinFragment();
              setScreen("home");
            }}
            onCancel={() => {
              void clearJoinFragment();
              void getOnboarded().then((onboarded) => {
                setScreen(onboarded ? "home" : "onboarding");
              });
            }}
          />
        )}
        {session && screen === "home" && (
          <Home
            familyName={familyName}
            stories={stories}
            onNewStory={() => {
              setEditingStoryId(null);
              setScreen("new-story");
            }}
            onOpenStory={(storyId) => openStory(storyId, "home")}
            onInvite={() => setInviteOpen(true)}
          />
        )}
        {screen === "stories" && (
          <Library
            stories={stories}
            selectedIds={activeBook.storyIds}
            activeBookTitle={activeBook.title}
            onNewStory={() => {
              setEditingStoryId(null);
              setScreen("new-story");
            }}
            onOpenStory={(storyId) => openStory(storyId, "stories")}
            onToggleBook={toggleBook}
          />
        )}
        {screen === "book" && (
          <BookBuilder
            stories={allBookStories}
            book={activeBook}
            onRenameBook={(title) => updateActiveBook({ title })}
            onToggleStory={toggleBook}
            onReorderStories={reorderBookStories}
            onCoverChange={(cover: CoverKind) => updateActiveBook({ cover })}
            onPreview={() => setScreen("preview")}
          />
        )}
        {session && screen === "family" && (
          <Family
            familyName={familyName}
            user={session.user}
            members={members}
            onInvite={() => setInviteOpen(true)}
            onOpenProfile={openProfile}
          />
        )}
        {session && screen === "profile" && (
          <Profile
            session={session}
            storyCount={stories.length}
            bookPageCount={activeBook.storyIds.length}
            onOpenStories={() => setScreen("stories")}
            onOpenBooks={() => setScreen("book")}
            onBack={() => setScreen(returnScreen === "profile" ? "home" : returnScreen)}
          />
        )}
        {session && screen === "new-story" && (
          <NewStory
            initialStory={
              editingStoryId
                ? stories.find((story) => story.id === editingStoryId)
                : undefined
            }
            onBack={() => setScreen("home")}
            onSave={(draft) => {
              if (editingStoryId) {
                setStories((list) =>
                  list.map((story) =>
                    story.id === editingStoryId ? { ...story, ...draft } : story,
                  ),
                );
                setActiveStoryId(editingStoryId);
                setEditingStoryId(null);
                setScreen("story-detail");
                return;
              }
              const id = crypto.randomUUID();
              const story = {
                ...draft,
                id,
                author: session.user.firstName,
                when: "сейчас",
              };
              setStories((list) => [story, ...list]);
              setActiveStoryId(id);
              setReturnScreen("home");
              setScreen("story-detail");
            }}
          />
        )}
        {screen === "story-detail" && activeStory && (
          <StoryDetail
            story={activeStory}
            inBook={activeBook.storyIds.includes(activeStory.id)}
            bookTitle={activeBook.title}
            onBack={() => setScreen(returnScreen)}
            onToggleBook={toggleBook}
            onEdit={() => {
              setEditingStoryId(activeStory.id);
              setScreen("new-story");
            }}
            onDelete={(storyId) => {
              setStories((list) => list.filter((story) => story.id !== storyId));
              setBook((current) => ({
                ...current,
                storyIds: current.storyIds.filter((id) => id !== storyId),
              }));
              if (editingStoryId === storyId) setEditingStoryId(null);
              setActiveStoryId("");
              setScreen(returnScreen);
            }}
          />
        )}
        {screen === "preview" && (
          <BookPreview
            stories={allBookStories}
            selectedIds={activeBook.storyIds}
            bookTitle={activeBook.title}
            cover={activeBook.cover}
            onBack={() => setScreen("book")}
            onOrder={() => setScreen("order")}
          />
        )}
        {session && screen === "order" && (
          <Order
            bookTitle={activeBook.title}
            cover={activeBook.cover}
            pageCount={activeBook.storyIds.length}
            onBack={() => setScreen("preview")}
            onDownloadPdf={() =>
              downloadBookPdf({
                bookTitle: activeBook.title,
                cover: activeBook.cover,
                stories: activeBook.storyIds
                  .map((id) => allBookStories.find((story) => story.id === id))
                  .filter((story): story is Story => Boolean(story)),
              })
            }
          />
        )}
        {showBottomNav && (
          <nav className="bottom-nav" aria-label="Основная навигация">
            {nav}
          </nav>
        )}
        {inviteOpen && session && (
          <InviteModal
            familyName={familyName}
            appId={session.launch.appId}
            onClose={() => setInviteOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
