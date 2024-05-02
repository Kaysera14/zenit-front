/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				decorations: "#D9D9D9",
			},
		},
		fontFamily: {
			title: ["Kanit", "sans-serif"],
			body: ["Roboto", "sans-serif"],
		},
	},
	plugins: [],
};
