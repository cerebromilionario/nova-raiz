import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://novaraiz.netlify.app",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwind()],
  },
});
