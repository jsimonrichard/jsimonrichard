import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import remarkSmartypants from 'remark-smartypants';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    react(),
    solid({
      include: ['src/components/solid/**/*.tsx'],
    }),
  ],
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
    plugins: [tailwind(), ViteYaml()],
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
