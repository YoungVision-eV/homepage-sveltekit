<script>
	import ReadMoreExpandButton from '$lib/components/ReadMoreExpandButton.svelte';

	const exercises = [
		{
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.'
		},
		{
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.'
		},
		{
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.'
		},
		{
			title: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.'
		}
	];
</script>

<section class="w-full pt-24 pb-16 px-5 md:px-20">
	<h1 class="text-center text-3xl md:text-5xl font-bold font-serif">Was wir tun</h1>
	<h2 class="mt-14 md:mt-20 text-2xl md:text-4xl font-bold font-serif">Main exercises</h2>
	<div class="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-6">
		<p class="font-sans">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad.
		</p>
		<p class="font-sans">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad.
		</p>
		<p class="font-sans">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad.
		</p>
	</div>
	<div
		id="exercises"
		class="mt-16 md:mt-40 grid overflow-hidden grid-rows-2 auto-rows-[0] md:grid-rows-1 grid-cols-[1fr] md:grid-cols-3 gap-y-12"
	>
		{#each exercises as exercise}
			<div class="exercise">
				<div class="px-20">
					<div class="bg-light-green w-full h-auto aspect-square rounded-full" />
				</div>
				<h3 class="mt-5 md:mt-8 text-center text-xl font-sans">{exercise.title}</h3>
				<p class="mt-3 md:mt-8 text-sm font-sans">{exercise.description}</p>
			</div>
		{/each}
	</div>
	<ReadMoreExpandButton class="mt-16 md:mt-20" />
</section>

<style>
	.exercise:nth-of-type(1n + 3) {
		display: none;
	}

	@media (min-width: 768px) {
		.exercise:nth-of-type(3) {
			display: block;
		}
	}
</style>
