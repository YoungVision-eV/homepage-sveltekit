/* eslint-disable @typescript-eslint/no-var-requires */
const typography = require('@tailwindcss/typography');
const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			serif: ['"Source Serif 4"', 'serif']
		},
		colors: {
			black: colors.black,
			white: colors.white,
			green: {
				50: '#21291F',
				200: '#6A845E',
				500: '#BBCEA8'
			},
			'dark-green': '#6A845E',
			'light-green': '#BBCEA8',
			background: '#F9F8F6',
			gray: colors.gray,
			orange: '#E97D2B',
			yellow: '#F0EC57',
			'soft-yellow': '#F4F197',
			pink: '#EA6C92'
		},
		extend: {
			gridTemplateColumns: {
				subgrid: 'subgrid'
			},
			gridTemplateRows: {
				subgrid: 'subgrid'
			}
		}
	},

	plugins: [typography, forms]
};

module.exports = config;
