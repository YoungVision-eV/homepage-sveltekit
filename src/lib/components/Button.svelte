<script lang="ts">
	import clsx from 'clsx';

	let className = '';
	export { className as class };
	export let text: string;
	export let color: 'dark' | 'bright';
</script>

<button
	class={clsx(
		'flex items-center justify-between p-4 px-8 font-bold',
		{
			// black background, white text
			'bg-green-50': color === 'dark',
			'text-white': color === 'dark',
			// white background, black text
			'bg-white': color === 'bright',
			'text-black': color === 'bright'
		},
		className
	)}
>
	<svg class="h-6 w-6" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<circle cx="12" cy="12" r="10" stroke-width="3.45596" fill="none" />
	</svg>
	<span class="ml-4">
		{text}
	</span>
</button>
