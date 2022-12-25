/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				'grey-boder': 'rgba(0, 0, 0, 0.25)',
			},
			width: {},
		},
		fontSize: {
			sm: '0.6rem',
			base: '0.8rem',
			xl: '1rem',
			'2xl': '1rem',
			'3xl': '1rem',
			'4xl': '1rem',
			'5xl': '1rem',
		},
	},
	plugins: [],
};
