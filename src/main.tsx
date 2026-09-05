import { StrictMode } from "react";
import bridge from "@vkontakte/vk-bridge";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";

bridge.send("VKWebAppInit").catch((error) => {
  console.warn("VK Bridge initialization failed", error);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
