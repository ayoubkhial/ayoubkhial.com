import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './content/**/*.mdx'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'hsl(var(--color-primary))',
				background: 'hsl(var(--color-background))',
				text: 'hsl(var(--color-text))',
				gray: {
					50: '#f7fafc',
					100: '#edf2f7',
					200: '#cad9e7',
					300: '#A7C0D7',
					500: '#718096',
					700: '#2D3748',
					800: '#212935',
					900: '#1e2533'
				}
			},
			width: {
				container: '50rem'
			},
			screens: {
				md: '800px',
				lg: '1024px'
			},
			letterSpacing: {
				small: '0.015rem',
				relaxed: '0.08rem'
			},
			fontSize: {
				base: '0.94rem'
			}
		},
		fontFamily: {
			base: 'var(--font-base)',
			heading: 'var(--font-heading)',
			code: 'var(--font-code)'
		}
	}
};

export default config;
