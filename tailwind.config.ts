import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-dashboard': '#3B82F6',
        'green-dashboard': '#22C55E',
        'orange-dashboard': '#F97316',
        'light-bg': '#FFFFFF',
        'dark-bg': '#1F2937',
        'light-text': '#111827',
        'dark-text': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;