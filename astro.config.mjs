// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://elegant-pudding-1a3101.netlify.app/",
  integrations: [preact()]
});