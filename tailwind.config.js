/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#0E0C0A",
				text: "#E3E3E3",
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
