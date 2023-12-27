import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'light-blue': {
          '50': '#edf6fe',
          '100': '#e2f0fc',
          '200': '#bee1f9',
          '300': '#84c9f5',
          '400': '#42adee',
          '500': '#1a93dd',
          '600': '#0c75bd',
          '700': '#0b5d99',
          '800': '#0e4f7e',
          '900': '#114369',
          '950': '#0b2a46'
        },
        'dark-blue': {
          '50': '#f3f7fc',
          '100': '#e6f0f8',
          '200': '#c7dff0',
          '300': '#95c5e4',
          '400': '#5da7d3',
          '500': '#388cbf',
          '600': '#2870a1',
          '700': '#215983',
          '800': '#1f4d6d',
          '900': '#1f415b',
          '950': '#19334a'
        },
        'light-red': {
          '50': '#fff1f1',
          '100': '#ffe4e4',
          '200': '#fecdd0',
          '300': '#fda4a9',
          '400': '#fb717b',
          '500': '#f43f51',
          '600': '#e11d3a',
          '700': '#be1230',
          '800': '#9f122f',
          '900': '#88132f',
          '950': '#4c0514'
        },
        'dark-red': {
          '50': '#fcf4f4',
          '100': '#f9ebea',
          '200': '#f3d9d8',
          '300': '#e9b9b8',
          '400': '#dc9090',
          '500': '#cc676a',
          '600': '#b54951',
          '700': '#983842',
          '800': '#80313c',
          '900': '#6e2d38',
          '950': '#571e26'
        },
        'light-green': {
          '50': '#ecf8ec',
          '100': '#e2f6e3',
          '200': '#c7ebc9',
          '300': '#9bda9f',
          '400': '#67c16c',
          '500': '#42a549',
          '600': '#328737',
          '700': '#2a6b2e',
          '800': '#26552a',
          '900': '#204724',
          '950': '#0d260f'
        },
        'dark-green': {
          '50': '#f2fbf4',
          '100': '#e2f6e7',
          '200': '#c6ecd0',
          '300': '#99dcac',
          '400': '#65c37f',
          '500': '#40a75e',
          '600': '#30894a',
          '700': '#296c3d',
          '800': '#255634',
          '900': '#20472c',
          '950': '#133a20'
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)']
      },
      // 600px * 1060px
      fontSize: {
        1: 'clamp(0.688rem, 0.524rem + 0.435vw, 0.813rem)', // 11 * 13
        2: 'clamp(0.813rem, 0.649rem + 0.435vw, 0.938rem)', // 13 * 15
        3: 'clamp(0.875rem, 0.712rem + 0.435vw, 1rem)', // 14 * 16
        4: 'clamp(1rem, 0.837rem + 0.435vw, 1.125rem)', // 16 * 18
        5: 'clamp(1.25rem, 1.087rem + 0.435vw, 1.375rem)', // 20 * 22
        6: 'clamp(1.5rem, 1.337rem + 0.435vw, 1.625rem)', // 24 * 26
        7: 'clamp(1.5rem, 0.848rem + 1.739vw, 2rem)' // 24 * 32
      },
      gap: {
        1: 'clamp(0.125rem, -0.038rem + 0.435vw, 0.25rem)', // 2 * 4
        2: 'clamp(0.25rem, -0.076rem + 0.87vw, 0.5rem)', // 4 * 8
        3: 'clamp(0.5rem, 0.174rem + 0.87vw, 0.75rem)', // 8 * 12
        4: 'clamp(0.75rem, 0.424rem + 0.87vw, 1rem)', // 12 * 16
        5: 'clamp(1rem, 0.674rem + 0.87vw, 1.25rem)', // 16 * 20
        6: 'clamp(1.25rem, 0.272rem + 2.609vw, 2rem)', // 20 * 32
        7: 'clamp(1.5rem, 0.196rem + 3.478vw, 2.5rem)', // 24 * 40
        8: 'clamp(4rem, 0.087rem + 10.435vw, 7rem)' // 64 * 112
      },
      height: {
        1: 'clamp(1rem, 0.674rem + 0.87vw, 1.25rem)', // 16 * 20
        2: 'clamp(1.125rem, 0.799rem + 0.87vw, 1.375rem)', // 18 * 24
        3: 'clamp(1.25rem, 0.598rem + 1.739vw, 1.75rem)', // 20 * 28
        4: 'clamp(1.5rem, 0.196rem + 3.478vw, 2.5rem)', // 24 * 40
        5: 'clamp(1.75rem, 0.772rem + 2.609vw, 2.5rem)', // 28 * 40
        6: 'clamp(2rem, 0.272rem + 4.348vw, 3rem)', // 32 * 48
        7: 'clamp(2.5rem, 0.272rem + 4.348vw, 3.5rem)' // 40 * 56
      },
      lineHeight: {
        txt: '1.75'
      },
      margin: {
        1: 'clamp(0.25rem, -0.076rem + 0.87vw, 0.5rem)', // 4 * 8
        2: 'clamp(0.5rem, 0.174rem + 0.87vw, 0.75rem)', // 8 * 12
        3: 'clamp(0.75rem, 0.098rem + 1.739vw, 1.25rem)', // 12 * 20
        4: 'clamp(1.25rem, 0.598rem + 1.739vw, 1.75rem)', // 20 * 28
        5: 'clamp(1.75rem, 0.772rem + 2.609vw, 2.5rem)' // 28 * 40
      },
      padding: {
        1: 'clamp(0.25rem, -0.076rem + 0.87vw, 0.5rem)', // 4 * 8
        2: 'clamp(0.5rem, 0.174rem + 0.87vw, 0.75rem)', // 8 * 12
        3: 'clamp(0.5rem, -0.478rem + 2.609vw, 1.25rem)', // 8 * 20
        4: 'clamp(1rem, 0.022rem + 2.609vw, 1.75rem)' // 16 * 28
      },
      screens: {
        lg: '1060px'
      },
      width: {
        1: 'clamp(1rem, 0.674rem + 0.87vw, 1.25rem)', // 16 * 20
        2: 'clamp(1.125rem, 0.799rem + 0.87vw, 1.375rem)', // 18 * 24
        3: 'clamp(1.25rem, 0.598rem + 1.739vw, 1.75rem)', // 20 * 28
        4: 'clamp(1.5rem, 0.196rem + 3.478vw, 2.5rem)', // 24 * 40
        5: 'clamp(1.75rem, 0.772rem + 2.609vw, 2.5rem)', // 28 * 40
        6: 'clamp(2rem, 0.272rem + 4.348vw, 3rem)', // 32 * 48
        7: 'clamp(2.5rem, 0.272rem + 4.348vw, 3.5rem)' // 40 * 56
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
export default config;
