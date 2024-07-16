/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				slideInLeft: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" },
				},
				slideInRight: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				slideInLeft: "slideInLeft 0.5s ease-out",
				slideInRight: "slideInRight 0.5s ease-out",
			},
			colors: {

				color: {

					footer_background: "#e2e2e2",
					footer_gray_text: "#666",
					primary_button: "#32c3ea",
					primary: "#70cffe",
					secondary: "#3b4ccf",

				},

			},
			fontFamily: {
				merriweather: ["Merriweather", "serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},
			backgroundColor: {
				bluish_black: "#141A23",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
