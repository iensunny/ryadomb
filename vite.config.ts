import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Относительные пути: на хостинге VK URL с хешем в пути, абсолютные `/assets` ломаются.
  base: "./",
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
});
