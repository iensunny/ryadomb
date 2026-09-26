import { useEffect, useMemo } from "react";
import { navItems } from "./constants/navigation";
import type { CoverKind } from "./domain/book";
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
import { joinRemoteFamily } from "./lib/familyApi";
import { trackEvent } from "./lib/analytics";

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
  const { session, joinToken, joinSucceeded, finishOnboarding, completeJoin, cancelJoin } =
    useAppBootstrap(setScreen);
  const desktop = useVkLayout(session);
  const {
    stories,
    book: activeBook,
    members,
    remoteFamilyName,
    allBookStories,
    toggleBook,
    updateActiveBook,
    reorderBookItems,
    saveStory,
    deleteStory,
    setCover,
    addBookPage,
    updateBookPage,
    removeBookPage,
    deleteFamily,
  } = useStoriesBook(session, screen === "join");

  const familyName = session
    ? remoteFamilyName || familyTitle(session.user)
    : usingBridgeMock
      ? "Семья Ивановых"
      : "Ваша семья";

  const activeStory = useMemo(
    () =>
      allBookStories.find((story) => story.id === activeStoryId) ?? stories[0],
    [activeStoryId, allBookStories, stories],
  );

  useEffect(() => {
    if (!session) return;
    trackEvent("screen_view", { screen, user: session.user });
    if (screen === "join") trackEvent("invite_opened", { screen, user: session.user });
    if (screen === "order") trackEvent("print_request_opened", { screen, properties: { pageCount: activeBook.items.length }, user: session.user });
  }, [screen, session]);

  useEffect(() => {
    if (session) {
      trackEvent("app_open", { screen, properties: { platform: session.launch.platform || "unknown" }, user: session.user });
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      trackEvent("performance_sample", { screen, properties: { loadMs: Math.round(navigation?.duration || performance.now()) }, user: session.user });
    }
  }, [session]);

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
    <div
      className={desktop ? "app-shell is-desktop" : "app-shell"}
      data-screen={screen}
    >
      {showShell && session && (
        <aside className="app-sidebar">
          <img
            className="brand-lockup"
            src="/brand/logo-primary.png"
            alt="Семейные истории"
          />
          <nav className="sidebar-nav" aria-label="Основная навигация">
            {nav}
          </nav>
        </aside>
      )}

      <div className="app-main">
        {showShell && session && (
          <header className="mobile-brand-bar">
            <img src="/brand/logo-primary.png" alt="Семейные истории" />
            <span>Живая память семьи</span>
          </header>
        )}
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
            onDone={() => {
              if (session) trackEvent("onboarding_completed", { screen: "onboarding", user: session.user });
              finishOnboarding();
            }}
          />
        )}
        {screen === "join" && session && (
          <JoinFamily
            userName={fullName(session.user)}
            photoUrl={session.user.photoUrl}
            onJoin={async () => {
              if (!joinToken) throw Object.assign(new Error("missing invite token"), { code: "INVALID_INVITE" });
              await joinRemoteFamily(joinToken, session.user);
              await completeJoin();
              window.sessionStorage.setItem("family-join-success", "1");
              window.location.reload();
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
            userId={session?.user.id}
            onNewStory={() => {
              setEditingStoryId(null);
              setScreen("new-story");
            }}
            onOpenStory={(storyId) => openStory(storyId, "stories")}
          />
        )}
        {screen === "book" && (
          <BookBuilder
            stories={allBookStories}
            book={activeBook}
            onRenameBook={(title) => updateActiveBook({ title })}
            onToggleStory={toggleBook}
            onReorderItems={reorderBookItems}
            onCoverChange={(cover: CoverKind) => {
              setCover(cover);
              if (session) trackEvent("book_cover_changed", { screen: "book", properties: { cover }, user: session.user });
            }}
            onCoverSubtitleChange={(coverSubtitle) => updateActiveBook({ coverSubtitle })}
            onCoverDesignChange={(coverDesign) => updateActiveBook({ coverDesign })}
            onAddPage={() => {
              addBookPage();
              if (session) trackEvent("book_custom_page_added", { screen: "book", user: session.user });
            }}
            onUpdatePage={updateBookPage}
            onRemovePage={removeBookPage}
            onPreview={() => {
              if (session) trackEvent("book_previewed", { screen: "book", properties: { pageCount: activeBook.items.length }, user: session.user });
              setScreen("preview");
            }}
          />
        )}
        {session && screen === "family" && (
          <Family
            familyName={familyName}
            user={session.user}
            members={members}
            onInvite={() => setInviteOpen(true)}
            onOpenProfile={openProfile}
            onDeleteFamily={() => {
              deleteFamily();
              setScreen("onboarding");
            }}
            joinedRecently={joinSucceeded}
          />
        )}
        {session && screen === "profile" && (
          <Profile
            session={session}
            storyCount={stories.length}
            bookPageCount={activeBook.items.length}
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
              trackEvent(editingStoryId ? "story_updated" : "story_created", { screen: "new-story", properties: { categories: (draft.categories || []).join(","), hasPhoto: Boolean(draft.photoUrl || Object.keys(draft.photos || {}).length) }, user: session.user });
              if (draft.photoUrl || Object.keys(draft.photos || {}).length) trackEvent("photo_added", { screen: "new-story", user: session.user });
              setScreen("story-detail");
            }}
          />
        )}
        {screen === "story-detail" && activeStory && (
          <StoryDetail
            story={activeStory}
            inBook={activeBook.items.some((item) => item.type === "story" && item.storyId === activeStory.id)}
            bookTitle={activeBook.title}
            onBack={() => setScreen(returnScreen)}
            onToggleBook={toggleBook}
            onEdit={() => {
              setEditingStoryId(activeStory.id);
              setScreen("new-story");
            }}
            onDelete={(storyId) => {
              deleteStory(storyId);
              if (session) trackEvent("story_deleted", { screen: "story-detail", user: session.user });
              if (editingStoryId === storyId) setEditingStoryId(null);
              setActiveStoryId("");
              setScreen(returnScreen);
            }}
          />
        )}
        {screen === "preview" && (
          <BookPreview
            stories={allBookStories}
            items={activeBook.items}
            bookTitle={activeBook.title}
            cover={activeBook.cover}
            coverSubtitle={activeBook.coverSubtitle}
            coverDesign={activeBook.coverDesign}
            onBack={() => setScreen("book")}
            onOrder={() => setScreen("order")}
          />
        )}
        {session && screen === "order" && (
          <Order
            bookId={activeBook.id}
            bookTitle={activeBook.title}
            cover={activeBook.cover}
            pageCount={activeBook.items.length}
            user={session.user}
            onBack={() => setScreen("preview")}
            onDownloadPdf={() =>
              downloadBookPdf({
                bookTitle: activeBook.title,
                cover: activeBook.cover,
                coverSubtitle: activeBook.coverSubtitle,
                coverDesign: activeBook.coverDesign,
                items: activeBook.items,
                stories: allBookStories,
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
            user={session.user}
            onClose={() => setInviteOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
