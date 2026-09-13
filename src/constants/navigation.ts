export type MainScreen = "home" | "stories" | "book" | "family" | "profile";

export type Screen =
  | "splash"
  | "vk-required"
  | "onboarding"
  | "join"
  | MainScreen
  | "new-story"
  | "story-detail"
  | "preview"
  | "order";

export const DESKTOP_BREAKPOINT = 900;

export const navItems: Array<{
  id: Exclude<MainScreen, "profile">;
  label: string;
}> = [
  { id: "home", label: "Главная" },
  { id: "stories", label: "Истории" },
  { id: "book", label: "Книга" },
  { id: "family", label: "Семья" },
];

export function isShellScreen(screen: Screen) {
  return (
    screen === "home" ||
    screen === "stories" ||
    screen === "book" ||
    screen === "family" ||
    screen === "profile"
  );
}

export function isBottomNavScreen(screen: Screen) {
  return (
    screen === "home" ||
    screen === "stories" ||
    screen === "book" ||
    screen === "family"
  );
}
