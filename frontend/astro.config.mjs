// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Astro loads .env files automatically, but the `base` property in the config
// might need a literal value if the environment variable isn't being picked up
// early enough by `import.meta.env` during the config resolution phase.

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://danielmolina956.42web.io",
  base: (process.env.PUBLIC_BASE || "/artemis/").replace(/\/?$/, "/"),
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
});
