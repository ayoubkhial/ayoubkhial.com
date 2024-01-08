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
          '50': '#eff9ff',
          '100': '#e7f6ff',
          '200': '#b8e9ff',
          '300': '#79d7ff',
          '400': '#32c4fe',
          '500': '#07aef0',
          '600': '#008bce',
          '700': '#006fa6',
          '800': '#035d89',
          '900': '#094e71',
          '950': '#06314b'
        },
        chablis: {
          // red
          '50': '#fff2f2',
          '100': '#ffe0e0',
          '200': '#ffc6c6',
          '300': '#ff9e9e',
          '400': '#ff6666',
          '500': '#fd3636',
          '600': '#eb1717',
          '700': '#c60f0f',
          '800': '#a31111',
          '900': '#871515',
          '950': '#4a0505'
        },
        madang: {
          // green
          '50': '#f2fbf3',
          '100': '#e0f8e2',
          '200': '#afe9b6',
          '300': '#95e09f',
          '400': '#5fc96e',
          '500': '#39ae49',
          '600': '#2a8f38',
          '700': '#24712f',
          '800': '#215a2a',
          '900': '#1d4a25',
          '950': '#0b2810'
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
          '50': '#eef1ff',
          '100': '#d8dffe',
          '200': '#c8d1fd',
          '300': '#a7b2fa',
          '400': '#8489f5',
          '500': '#6b67ed',
          '600': '#594ae1',
          '700': '#4c3cc6',
          '800': '#3f33a0',
          '900': '#36307f',
          '950': '#211c4a'
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
