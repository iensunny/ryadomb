import { useEffect, useState } from "react";
import { DESKTOP_BREAKPOINT } from "../constants/navigation";
import { bridge, onVkConfig } from "../vk/bridge";
import { isDesktopPlatform, type AppSession } from "../vk/session";

export function useVkLayout(session: AppSession | null) {
  const [desktop, setDesktop] = useState(
    () => window.innerWidth >= DESKTOP_BREAKPOINT,
  );

  useEffect(() => {
    if (!session) return;
    const desktopPlatform = session.launch.platform === "desktop_web";
    void bridge.send("VKWebAppSetViewSettings", {
      status_bar_style: "dark",
      action_bar_color: "#f8f4ed",
      navigation_bar_color: "#f8f4ed",
    }).catch(() => undefined);
    void bridge.send("VKWebAppResizeWindow", desktopPlatform
      ? { width: 1000, height: 800 }
      : { width: Math.max(320, window.innerWidth), height: Math.max(600, window.screen.availHeight) }
    ).catch(() => undefined);
    if (!desktopPlatform) void bridge.send("VKWebAppDisableSwipeBack").catch(() => undefined);
    return () => {
      if (!desktopPlatform) void bridge.send("VKWebAppEnableSwipeBack").catch(() => undefined);
    };
  }, [session?.launch.platform]);

  useEffect(() => {
    const offConfig = onVkConfig((config) => {
      const width = config.viewportWidth ?? window.innerWidth;
      const height = config.viewportHeight ?? window.innerHeight;
      setDesktop(isDesktopPlatform(session?.launch.platform, width));
      document.documentElement.style.setProperty("--vk-viewport-height", `${height}px`);
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

    const mq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const syncLayout = () => {
      setDesktop(isDesktopPlatform(session?.launch.platform, window.innerWidth));
      document.documentElement.style.setProperty("--vk-viewport-height", `${window.innerHeight}px`);
    };
    syncLayout();
    mq.addEventListener("change", syncLayout);
    window.addEventListener("resize", syncLayout);

    return () => {
      offConfig();
      window.removeEventListener("resize", syncLayout);
      mq.removeEventListener("change", syncLayout);
    };
  }, [session?.launch.platform]);

  return desktop;
}
