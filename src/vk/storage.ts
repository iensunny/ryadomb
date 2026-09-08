import { bridge, usingBridgeMock } from "./bridge";

const ONBOARDED_KEY = "family_stories_onboarded";
const LOCAL_FALLBACK = "family-stories-onboarded";

/** Флаг онбординга: VK Storage в проде (URL хостинга меняется), localStorage — для mock. */
export async function getOnboarded(): Promise<boolean> {
  if (usingBridgeMock) {
    return window.localStorage.getItem(LOCAL_FALLBACK) === "1";
  }

  try {
    const data = await bridge.send("VKWebAppStorageGet", {
      keys: [ONBOARDED_KEY],
    });
    const entry = data.keys?.find((item) => item.key === ONBOARDED_KEY);
    return entry?.value === "1";
  } catch {
    return window.localStorage.getItem(LOCAL_FALLBACK) === "1";
  }
}

export async function setOnboarded(): Promise<void> {
  if (usingBridgeMock) {
    window.localStorage.setItem(LOCAL_FALLBACK, "1");
    return;
  }

  try {
    await bridge.send("VKWebAppStorageSet", {
      key: ONBOARDED_KEY,
      value: "1",
    });
  } catch {
    window.localStorage.setItem(LOCAL_FALLBACK, "1");
  }
}
