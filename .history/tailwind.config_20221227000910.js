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
				'black-text': '#2F2F2F',
				'blue-text': '#1366FF',
				'back-ground-1': '#F5F5F5',
				'back-text': '#333333',
				'active-bg': '#0030E0',
				'price-decrease': '#00BF3D',
				'price-increase': '#03A66D',
			},
			width: {},
			boxShadow: {
				'shadow-custom': '0px 2px 6px rgba(0, 0, 0, 0.15)',
			},
		},
	},
	plugins: [],
};
