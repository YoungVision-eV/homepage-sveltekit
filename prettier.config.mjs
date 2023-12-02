/** @type {import("prettier").Config} */
const config = {
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'none',
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	tailwindFunctions: ['clsx'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}
	]
};

export default config;
