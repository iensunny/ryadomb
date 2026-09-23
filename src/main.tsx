import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { startVkBridge } from "./vk/bridge";
import "@fontsource/inter/cyrillic-400.css";
import "@fontsource/inter/cyrillic-500.css";
import "@fontsource/inter/cyrillic-600.css";
import "@fontsource/lora/cyrillic-400.css";
import "@fontsource/lora/cyrillic-400-italic.css";
import "@fontsource/lora/cyrillic-600.css";
import "@fontsource/marck-script/cyrillic-400.css";
import "./styles.css";

startVkBridge().catch((error) => {
  console.warn("VKWebAppInit failed", error);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
