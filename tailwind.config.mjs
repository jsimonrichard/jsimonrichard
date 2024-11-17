import terminalColors from './terminal-colors.json';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // colors: {
    //   ...terminalColors.hex,
    // },
    extend: {},
  },
  plugins: [],
};
