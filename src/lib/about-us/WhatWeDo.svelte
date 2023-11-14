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

<section class="w-full px-5 pb-16 pt-24 md:px-20">
	<h1 class="text-center font-serif text-3xl font-bold md:text-5xl">Was wir tun</h1>
	<h2 class="mt-14 font-serif text-2xl font-bold md:mt-20 md:text-4xl">Main exercises</h2>
	<div class="mt-6 grid grid-cols-1 gap-y-3 md:mt-10 md:grid-cols-2 md:gap-y-6">
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
		class="mt-16 grid auto-rows-[0] grid-cols-[1fr] grid-rows-2 gap-y-12 overflow-hidden md:mt-40 md:grid-cols-3 md:grid-rows-1"
	>
		{#each exercises as exercise}
			<div class="exercise">
				<div class="px-20">
					<div class="aspect-square h-auto w-full rounded-full bg-light-green" />
				</div>
				<h3 class="mt-5 text-center font-sans text-xl md:mt-8">{exercise.title}</h3>
				<p class="mt-3 font-sans text-sm md:mt-8">{exercise.description}</p>
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
