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
				500: '#BBCEA8',
				700: '#D4DEC7'
			},
			'dark-green': '#6A845E',
			'light-green': '#BBCEA8',
			background: '#F9F8F6',
			gray: colors.gray,
			orange: '#E97D2B',
			yellow: {
				500: '#F0EC57',
				700: '#F4F197',
				900: '#F9F6E4'
			},
			pink: '#EA6C92',
			blue: colors.blue
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
