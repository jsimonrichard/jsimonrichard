import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import remarkHtmlKatex from 'remark-html-katex';
import react from '@astrojs/react';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), solidJs()],
  remarkPlugins: [remarkMath, remarkHtmlKatex],
  vite: {
    resolve: {
      alias: {
        '~': new URL('./src', import.meta.url).pathname,
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        // it cannot be "preserve"
        jsx: 'automatic',
        jsxDev: true,
        jsxImportSource: 'solid-js/h',
      },
    },
  },
});
