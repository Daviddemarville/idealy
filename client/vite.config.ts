import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/idealy/",
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
});
