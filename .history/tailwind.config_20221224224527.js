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
				'grey-boder-header': 'rgba(0, 0, 0, 0.25)',
			},
			width: {},
		},
	},
	plugins: [],
};
