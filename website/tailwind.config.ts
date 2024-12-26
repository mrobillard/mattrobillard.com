import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

import typograhpyPlugin from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#F2F7F7',
        navy: '#0B2436',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
        serif: ['var(--font-serif)', ...fontFamily.serif],
      },
    },
  },
  plugins: [typograhpyPlugin],
};

export default config;
