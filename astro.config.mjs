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
  redirects: {
    '/blog/ai-transparency-paradox': '/blog/2022-04-13-ai-transparency-paradox',
    '/blog/todd-coxeter': '/blog/2022-05-03-todd-coxeter',
    '/blog/post-quantum-algorithms-overview':
      '/blog/2022-12-06-post-quantum-algorithms-overview',
    '/blog/node-modules-debug-tool': '/blog/2025-08-02-node-modules-debug-tool',
  },
});
