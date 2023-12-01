<script>
	import Background from '$lib/assets/background-what-we-do.png';
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

<section class="relative w-full px-5 pb-16 pt-24 lg:px-20">
	<img
		class="absolute left-[-6rem] top-[-9rem] -z-10 h-[18rem] w-auto lg:left-[-12rem] lg:top-[-31rem]
		lg:h-auto lg:w-[50em]"
		alt="Flowers"
		src={Background}
	/>
	<h1 class="text-center font-serif text-3xl font-bold lg:text-5xl">Was wir tun</h1>
	<h2 class="mt-14 font-serif text-2xl font-bold lg:mt-20 lg:text-4xl">Main exercises</h2>
	<div class="mt-6 grid grid-cols-1 gap-y-3 lg:mt-10 lg:grid-cols-2 lg:gap-y-6">
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
		class="mt-16 grid auto-rows-[0] grid-cols-[1fr] grid-rows-2 gap-y-12 overflow-hidden lg:mt-40 lg:grid-cols-3 lg:grid-rows-1"
	>
		{#each exercises as exercise}
			<div class="exercise">
				<div class="px-20">
					<div class="aspect-square h-auto w-full rounded-full bg-light-green" />
				</div>
				<h3 class="mt-5 text-center font-sans text-xl lg:mt-8">{exercise.title}</h3>
				<p class="mt-3 font-sans text-sm lg:mt-8">{exercise.description}</p>
			</div>
		{/each}
	</div>
	<ReadMoreExpandButton class="mt-16 lg:mt-20" />
</section>

<style>
	.exercise:nth-of-type(1n + 3) {
		display: none;
	}

	@media (min-width: 1024px) {
		.exercise:nth-of-type(3) {
			display: block;
		}
	}
</style>
