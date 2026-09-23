import { useEffect, useState } from "react";
import { hasJoinFragment } from "../constants/fragments";
import type { Screen } from "../constants/navigation";
import { bridge, onVkFragment } from "../vk/bridge";
import { bootSession, type AppSession } from "../vk/session";
import { getOnboarded, setOnboarded } from "../vk/storage";

type SetScreen = (screen: Screen) => void;

export function useAppBootstrap(setScreen: SetScreen) {
  const [session, setSession] = useState<AppSession | null>(null);

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
      void bootSession().then(setSession);
      return;
    }

    const pause = new Promise((resolve) => window.setTimeout(resolve, 2000));

    Promise.all([bootSession(), pause])
      .then(([next]) => {
        setSession(next);

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
  }, [setScreen]);

  useEffect(() => {
    const applyFragment = (location: string) => {
      if (hasJoinFragment(location)) setScreen("join");
    };

    const offFragment = onVkFragment(applyFragment);
    const onHash = () => applyFragment(window.location.hash.replace(/^#/, ""));
    window.addEventListener("hashchange", onHash);

    return () => {
      offFragment();
      window.removeEventListener("hashchange", onHash);
    };
  }, [setScreen]);

  function finishOnboarding() {
    void setOnboarded();
    setScreen("home");
  }

  async function clearJoinFragment() {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    try {
      await bridge.send("VKWebAppSetLocation", { location: "" });
    } catch {
      // Локальный mock это событие не реализует.
    }
  }

  async function completeJoin() {
    await setOnboarded();
    await clearJoinFragment();
    setScreen("home");
  }

  async function cancelJoin() {
    await clearJoinFragment();
    const onboarded = await getOnboarded();
    setScreen(onboarded ? "home" : "onboarding");
  }

  return {
    session,
    finishOnboarding,
    completeJoin,
    cancelJoin,
  };
}
