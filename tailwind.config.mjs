/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              fontSize: '0.8em',
              fontWeight: '500',
              padding: '0.25em',
              borderRadius: '0.25em',
              '&::before': {
                content: 'none !important',
              },
              '&::after': {
                content: 'none !important',
              },
            },
          },
        },
        slate: {
          css: {
            'code:not(pre code)': {
              backgroundColor: 'oklch(96.8% 0.007 247.896)', // slate-200
              border: '1px solid oklch(70.4% 0.04 256.788)', // slate-300
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
