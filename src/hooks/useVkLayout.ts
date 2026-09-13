import { useEffect, useState } from "react";
import { DESKTOP_BREAKPOINT } from "../constants/navigation";
import { bridge, onVkConfig } from "../vk/bridge";
import { isDesktopPlatform, type AppSession } from "../vk/session";

export function useVkLayout(session: AppSession | null) {
  const [desktop, setDesktop] = useState(
    () => window.innerWidth >= DESKTOP_BREAKPOINT,
  );

  useEffect(() => {
    if (session?.launch.platform !== "desktop_web") return;
    bridge
      .send("VKWebAppResizeWindow", { width: 1000, height: 800 })
      .catch(() => undefined);
  }, [session?.launch.platform]);

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

    const mq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const syncLayout = () => {
      setDesktop(isDesktopPlatform(session?.launch.platform, window.innerWidth));
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
