import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)']
      },
      screens: {
        xs: '450px'
      },
      colors: {
        solitude: {
          // blue
          '50': 'var(--solitude-50)',
          '100': 'var(--solitude-100)',
          '200': 'var(--solitude-200)',
          '300': 'var(--solitude-300)',
          '400': 'var(--solitude-400)',
          '500': 'var(--solitude-500)',
          '600': 'var(--solitude-600)',
          '700': 'var(--solitude-700)',
          '800': 'var(--solitude-800)',
          '900': 'var(--solitude-900)',
          '950': 'var(--solitude-950)'
        },
        chablis: {
          // red
          '50': 'var(--chablis-50)',
          '100': 'var(--chablis-100)',
          '200': 'var(--chablis-200)',
          '300': 'var(--chablis-300)',
          '400': 'var(--chablis-400)',
          '500': 'var(--chablis-500)',
          '600': 'var(--chablis-600)',
          '700': 'var(--chablis-700)',
          '800': 'var(--chablis-800)',
          '900': 'var(--chablis-900)',
          '950': 'var(--chablis-950)'
        },
        madang: {
          // green
          '50': 'var(--madang-50)',
          '100': 'var(--madang-100)',
          '200': 'var(--madang-200)',
          '300': 'var(--madang-300)',
          '400': 'var(--madang-400)',
          '500': 'var(--madang-500)',
          '600': 'var(--madang-600)',
          '700': 'var(--madang-700)',
          '800': 'var(--madang-800)',
          '900': 'var(--madang-900)',
          '950': 'var(--madang-950)'
        },
        varden: {
          // yellow - orange
          '50': '#fff6e0',
          '100': '#feeec7',
          '200': '#fddc8a',
          '300': '#fcc34d',
          '400': '#fbac24',
          '500': '#f5890b',
          '600': '#d96406',
          '700': '#b44409',
          '800': '#92340e',
          '900': '#782c0f',
          '950': '#451403'
        },
        'fair-pink': {
          // pink - orange
          '50': '#fef5f2',
          '100': '#ffe9e1',
          '200': '#ffd7c8',
          '300': '#ffbba2',
          '400': '#fd936c',
          '500': '#f56f3e',
          '600': '#e35420',
          '700': '#bf4316',
          '800': '#9d3b17',
          '900': '#83361a',
          '950': '#471908'
        },
        'hawkes-blue': {
          // purple
          '50': 'var(--hawkes-blue-50)',
          '100': 'var(--hawkes-blue-100)',
          '200': 'var(--hawkes-blue-200)',
          '300': 'var(--hawkes-blue-300)',
          '400': 'var(--hawkes-blue-400)',
          '500': 'var(--hawkes-blue-500)',
          '600': 'var(--hawkes-blue-600)',
          '700': 'var(--hawkes-blue-700)',
          '800': 'var(--hawkes-blue-800)',
          '900': 'var(--hawkes-blue-900)',
          '950': 'var(--hawkes-blue-950)'
        },
        'vivid-tangerine': {
          // orange
          '50': '#fef5f2',
          '100': '#ffe9e1',
          '200': '#ffd6c8',
          '300': '#ffa789',
          '400': '#fd916c',
          '500': '#f56d3e',
          '600': '#e25120',
          '700': '#be4117',
          '800': '#9d3917',
          '900': '#82341a',
          '950': '#471808'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
export default config;
