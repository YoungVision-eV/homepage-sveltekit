<script lang="ts">
	import ReadMoreExpandButton from '$lib/components/ReadMoreExpandButton.svelte';

	export let title: string;
	const leaders = [
		{
			name: 'Matthias',
			job: 'JOB FOR YV'
		},
		{
			name: 'Luna',
			job: 'JOB FOR YV'
		},
		{
			name: 'Matthias',
			job: 'JOB FOR YV'
		},
		{
			name: 'Luna',
			job: 'JOB FOR YV'
		}
	];
</script>

<section class="px-5 md:px-20 py-16 md:pt-44">
	<h1 class="text-2xl md:text-4xl font-bold font-serif">{title}</h1>
	<p class="mt-6 md:mt-9 md:w-1/2">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua ut enim ad.
	</p>
	<div class="mt-10 md:mt-28 md:flex justify-between gap-y-24">
		{#each leaders as leader}
			<div class="leader mt-6 flex even:flex-row-reverse justify-between items-center">
				<div class="bg-gray-300 rounded-full aspect-square h-52 w-auto" />
				<div class="text-center md:mt-5">
					<h3 class="text-xl">{leader.name}</h3>
					<p class="mt-3 text-sm">{leader.job}</p>
				</div>
			</div>
		{/each}
	</div>
	<ReadMoreExpandButton class="mt-12 md:hidden" />
</section>

<style>
	@media (min-width: 768px) {
		.leader {
			flex-direction: column !important; /* even selector has high priority */
		}
	}
</style>
