import realBridge from "@vkontakte/vk-bridge";
import mockBridge from "@vkontakte/vk-bridge-mock";

function launchedFromVk() {
  const params = new URLSearchParams(window.location.search);
  return params.has("vk_user_id") || params.has("sign");
}

/** Локально без launch params — mock из документации VK. Внутри VK — настоящий Bridge. */
export const usingBridgeMock = import.meta.env.DEV && !launchedFromVk();
export const bridge = usingBridgeMock ? mockBridge : realBridge;

export type VkConfig = {
  viewportWidth?: number;
  viewportHeight?: number;
  appearance?: string;
  scheme?: string;
  insets?: { top: number; right: number; bottom: number; left: number };
};

type ConfigListener = (config: VkConfig) => void;
type FragmentListener = (location: string) => void;

const configListeners = new Set<ConfigListener>();
const fragmentListeners = new Set<FragmentListener>();

function readConfig(data: Record<string, unknown>): VkConfig {
  const insets = data.insets as VkConfig["insets"] | undefined;
  return {
    viewportWidth:
      typeof data.viewport_width === "number" ? data.viewport_width : undefined,
    viewportHeight:
      typeof data.viewport_height === "number" ? data.viewport_height : undefined,
    appearance: typeof data.appearance === "string" ? data.appearance : undefined,
    scheme: typeof data.scheme === "string" ? data.scheme : undefined,
    insets,
  };
}

bridge.subscribe((event) => {
  if (event.detail.type === "VKWebAppUpdateConfig") {
    const config = readConfig(event.detail.data as Record<string, unknown>);
    configListeners.forEach((listener) => listener(config));
  }

  if (event.detail.type === "VKWebAppChangeFragment") {
    const location =
      typeof event.detail.data?.location === "string"
        ? event.detail.data.location
        : "";
    fragmentListeners.forEach((listener) => listener(location));
  }
});

export function onVkConfig(listener: ConfigListener) {
  configListeners.add(listener);
  return () => configListeners.delete(listener);
}

export function onVkFragment(listener: FragmentListener) {
  fragmentListeners.add(listener);
  return () => fragmentListeners.delete(listener);
}

export function startVkBridge() {
  return bridge.send("VKWebAppInit").then((data) => {
    if (!data.result) {
      throw new Error("VKWebAppInit returned result=false");
    }
    return data;
  });
}
