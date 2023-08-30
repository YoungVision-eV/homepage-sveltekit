/* eslint-disable @typescript-eslint/no-var-requires */
const typography = require('@tailwindcss/typography');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			black: colors.black,
			white: colors.white,
			'dark-green': '#6A845E',
			'light-green': '#BBCEA8',
			background: '#F9F8F6',
			gray: colors.gray,
			orange: '#E97D2B',
			yellow: '#F0EC57',
			'soft-yellow': '#F0EC5799',
			pink: '#EA6C92'
		},
		extend: {}
	},

	plugins: [typography]
};

module.exports = config;
