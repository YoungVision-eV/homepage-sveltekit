<script lang="ts">
	import Circle from '$lib/icons/Circle.svelte';
	import clsx from 'clsx';

	let className = '';
	export { className as class };
	export let text: string;
	export let color: 'black' | 'white';
	export let href: string = '#';
</script>

<a
	{href}
	class={clsx(
		'inline-flex items-center gap-x-4 p-4 px-8 font-bold',
		{
			// black background, white text
			'bg-black': color === 'black',
			'text-white': color === 'black',
			// white background, black text
			'bg-white': color === 'white',
			'text-black': color === 'white'
		},
		className
	)}
>
	<Circle />
	{text}
</a>
