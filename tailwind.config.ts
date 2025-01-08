import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
		},
		fontFamily: {
			sans: ['Manrope', 'sans-serif']
		},
		extend: {
			borderWidth: {
				'1.5': '1.5px'
			},
			colors: {
				skyBlue: '#C8D9E9',
				navy: '#1D3557',
				black: '#171717',
				turquoise: '#65BCB7',
				brickRed: '#96291C'
			},
			padding: {
				'5.5': '22px'
			}
		}
	},
	plugins: []
} satisfies Config;
