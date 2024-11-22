import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), solidJs(), react()],
  remarkPlugins: [remarkMath, remarkRehype, rehypeKatex],
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
});
