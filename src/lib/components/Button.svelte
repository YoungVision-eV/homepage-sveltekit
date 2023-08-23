<script lang="ts">
	export let text: string;
	export let inverted = false;

	const classes = inverted ? 'bg-black text-white' : 'bg-white text-black';
</script>

<button class={'flex mt-8 p-4 px-8 text-xl font-bold justify-between items-center ' + classes}>
	<svg class="w-6 h-6" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<circle cx="12" cy="12" r="10" stroke-width="3.45596" fill="none" />
	</svg>
	<span class="ml-4">
		{text}
	</span>
</button>
