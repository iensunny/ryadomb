import { useMemo } from "react";
import { navItems } from "./constants/navigation";
import type { CoverKind } from "./domain/book";
import type { Story } from "./domain/story";
import { useAppBootstrap } from "./hooks/useAppBootstrap";
import { useAppNavigation } from "./hooks/useAppNavigation";
import { useStoriesBook } from "./hooks/useStoriesBook";
import { useVkLayout } from "./hooks/useVkLayout";
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
import { usingBridgeMock } from "./vk/bridge";
import { familyTitle, fullName } from "./vk/session";

export function App() {
  const {
    screen,
    setScreen,
    returnScreen,
    setReturnScreen,
    activeStoryId,
    setActiveStoryId,
    editingStoryId,
    setEditingStoryId,
    inviteOpen,
    setInviteOpen,
    showShell,
    showBottomNav,
    openProfile,
    openStory,
  } = useAppNavigation();
  const { session, finishOnboarding, completeJoin, cancelJoin } =
    useAppBootstrap(setScreen);
  const desktop = useVkLayout(session);
  const {
    stories,
    book: activeBook,
    members,
    allBookStories,
    toggleBook,
    updateActiveBook,
    reorderBookStories,
    saveStory,
    deleteStory,
    setCover,
  } = useStoriesBook(session);

  const familyName = session
    ? familyTitle(session.user)
    : usingBridgeMock
      ? "Семья Ивановых"
      : "Ваша семья";

  const activeStory = useMemo(
    () =>
      allBookStories.find((story) => story.id === activeStoryId) ?? stories[0],
    [activeStoryId, allBookStories, stories],
  );

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
              void completeJoin();
            }}
            onCancel={() => {
              void cancelJoin();
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
            onCoverChange={(cover: CoverKind) => setCover(cover)}
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
              const savedId = saveStory(
                draft,
                editingStoryId,
                session.user.firstName,
              );
              setActiveStoryId(savedId);
              setEditingStoryId(null);
              if (!editingStoryId) setReturnScreen("home");
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
              deleteStory(storyId);
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
