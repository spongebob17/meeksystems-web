import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FAF8F5',
        'terracotta': '#C4714A',
        'slate-brand': '#6B7280',
        'near-black': '#1A1A1A',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'Georgia', 'serif'],
        dm: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
