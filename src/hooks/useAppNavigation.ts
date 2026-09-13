import { useState } from "react";
import {
  isBottomNavScreen,
  isShellScreen,
  type MainScreen,
  type Screen,
} from "../constants/navigation";

export function useAppNavigation(initialActiveStoryId = "") {
  const [screen, setScreen] = useState<Screen>("splash");
  const [returnScreen, setReturnScreen] = useState<MainScreen>("home");
  const [activeStoryId, setActiveStoryId] = useState(initialActiveStoryId);
  const [editingStoryId, setEditingStoryId] = useState<string | null>(null);
  const [inviteOpen, setInviteOpen] = useState(false);

  const showShell = isShellScreen(screen);
  const showBottomNav = isBottomNavScreen(screen);

  function openProfile() {
    if (showBottomNav) setReturnScreen(screen as MainScreen);
    setScreen("profile");
  }

  function openStory(storyId: string, from: Exclude<MainScreen, "profile">) {
    setActiveStoryId(storyId);
    setReturnScreen(from);
    setScreen("story-detail");
  }

  return {
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
  };
}
