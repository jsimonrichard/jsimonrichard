import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import remarkSmartypants from 'remark-smartypants';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), solidJs(), react()],
  markdown: {
    remarkPlugins: [remarkMath, [remarkSmartypants, { dashes: 'oldschool' }]],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          // Katex plugin options
        },
      ],
    ],
  },
  vite: {
    plugins: [ViteYaml()],
    resolve: {
      alias: {
        '~': new URL('./src', import.meta.url).pathname,
      },
    },
    optimizeDeps: {
      // esbuildOptions: {
      //   // it cannot be "preserve"
      //   jsx: 'automatic',
      //   jsxDev: true,
      //   jsxImportSource: 'solid-js/h',
      // },
    },
  },
  prefetch: true,
});
