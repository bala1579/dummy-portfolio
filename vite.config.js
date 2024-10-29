import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/dummy-portfolio/",
  server: {
    port: 3000,
  },
  plugins: [react()],
});
