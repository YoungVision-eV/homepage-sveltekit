<script>
	import ChevronDown from '$lib/icons/ChevronDown.svelte';
	import ChevronUp from '$lib/icons/ChevronUp.svelte';
	import clsx from 'clsx';
	let className = '';
	export { className as class };
	export let showMore = false;
	export let text = 'See More';

	function toggleShowMore() {
		showMore = !showMore;
	}
</script>

<div class={clsx('flex w-full flex-col items-center justify-center', className)}>
	<button class="text-sm" on:click={toggleShowMore}>{text}</button>
	<button on:click={toggleShowMore}>
		<div class="mt-2">
			{#if showMore}
				<ChevronUp />
			{:else}
				<ChevronDown />
			{/if}
			<div></div>
		</div></button
	>
	<div class="mx-2 mt-2 w-full border-t border-gray-300" />
</div>
