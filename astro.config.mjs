// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jonichrishannon-eng.github.io',
  base: '/TdoT2026',
  vite: {
    plugins: [tailwindcss()]
  }
});