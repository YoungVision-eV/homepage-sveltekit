<script>
	let className = '';
	export { className as class };
	export let showMore = false;
	export let text = 'See More';

	function toggleShowMore() {
		showMore = !showMore;
	}
</script>

<div class="w-full flex flex-col justify-center items-center {className}">
	<button class="text-sm" on:click={toggleShowMore}>{text}</button>
	<button on:click={toggleShowMore}>
		<svg
			class="mt-2"
			xmlns="http://www.w3.org/2000/svg"
			width="13"
			height="9"
			viewBox="0 0 13 9"
			fill="none"
		>
			{#if showMore}
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 6.58449L1.51667 8.12085L6.5 3.0728L11.4833 8.12085L13 6.58449L6.5 7.05719e-05L0 6.58449Z"
					fill="#686B6F"
				/>
			{:else}
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M13 1.53636L11.4833 0L6.5 5.04805L1.51667 0L0 1.53636L6.5 8.12078L13 1.53636Z"
					fill="#686B6F"
				/>
			{/if}
		</svg>
	</button>
	<div class="mx-2 mt-2 w-full border-t border-gray-300" />
</div>
