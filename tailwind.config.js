/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./public/**/*.{html,js}',
	],
	theme: {
		extend: {
			height: {
				'cardPhoto': '350px'
			},
			minHeight: {
				'cardPhoto': '350px'
			},
			maxHeight: {
				'cardPhoto': '350px'
			}
		},
	},
	plugins: [
		require("daisyui")
	],
	daisyui: {
		themes: [
			{
				mytheme: {

					"primary": "#58c9e2",

					"secondary": "#176ee8",

					"accent": "#86efac",

					"neutral": "#1F172B",

					"base-100": "#203946",

					"info": "#6EA0DE",

					"success": "#0B604E",

					"warning": "#FA942E",

					"error": "#F51432",
				},
			},
		],
	},
}

