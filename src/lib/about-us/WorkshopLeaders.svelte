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

<section class="px-5 py-16 lg:px-20 lg:pt-44">
	<h1 class="font-serif text-2xl font-bold lg:text-4xl">{title}</h1>
	<p class="mt-6 lg:mt-9 lg:w-1/2">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua ut enim ad.
	</p>
	<div class="mt-10 justify-between gap-y-24 lg:mt-28 lg:flex">
		{#each leaders as leader}
			<div class="leader mt-6 flex items-center justify-between even:flex-row-reverse">
				<div class="aspect-square h-52 w-auto rounded-full bg-gray-300" />
				<div class="text-center lg:mt-5">
					<h3 class="text-xl">{leader.name}</h3>
					<p class="mt-3 text-sm">{leader.job}</p>
				</div>
			</div>
		{/each}
	</div>
	<ReadMoreExpandButton class="mt-12 lg:hidden" />
</section>

<style>
	@media (min-width: 1024px) {
		.leader {
			flex-direction: column !important; /* even selector has high priority */
		}
	}
</style>
