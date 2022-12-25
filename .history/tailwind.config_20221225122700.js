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
				'grey-text': '#7F7F7F',
				'white-text': '#FFFFFF',
				'active-bg': '#0030E0',
			},
			width: {},
		},
	},
	plugins: [],
};
