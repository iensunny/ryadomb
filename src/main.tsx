import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { startVkBridge } from "./vk/bridge";
import "./styles.css";

startVkBridge().catch((error) => {
  console.warn("VKWebAppInit failed", error);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
