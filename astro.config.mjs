// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://vincentfqt.github.io",
  base: "/astro-portfolio",
  integrations: [preact()],
});