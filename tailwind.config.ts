import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './content/**/*.mdx'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#805ad5',
					dark: '#B794F4'
				},
				background: {
					light: '#fff',
					dark: '#1A202C'
				},
				text: {
					light: '#2D3748',
					dark: '#fbfaff'
				},
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
			display: 'var(--font-display)',
			heading: 'var(--font-heading)',
			base: 'var(--font-base)',
			code: 'var(--font-code)'
		}
	}
};

export default config;
