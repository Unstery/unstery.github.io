import theme from './src/theme/resources/dark/theme.constants'

const { colors, fonts: fontFamily } = theme;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors,
		fontFamily,
		extend: {},
	},
	plugins: [],
}
