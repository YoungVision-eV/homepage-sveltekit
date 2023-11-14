<script>
	import heroImagePortrait from '$lib/assets/hero-image.jpeg';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="w-full bg-cover">
	<div class="px-5 py-16 md:px-20 md:grid grid-cols-2 gap-x-20 items-center">
		<div class="mx-9 md:mx-0 h-96 md:h-[36rem]">
			<img
				class="rounded-2xl h-full w-auto object-cover"
				src={heroImagePortrait}
				alt="People sit before a wall and one is smiling into the camera"
			/>
		</div>
		<div class="mt-10 md:mt-0 order-first">
			<h1 class="text-3xl md:text-5xl font-bold font-serif">Schön, dass du hier bist!</h1>
			<p class="text-xl mt-6 md:mt-14">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad.
			</p>
			<Button class="mt-12 mx-auto md:mx-0" text="Call To Action" color="black" />
		</div>
	</div>
</section>

<style>
	section {
		background-image: url($lib/assets/background-hero-landscape.jpeg);
	}
	@media (min-width: 768px) {
		section {
			background-image: url($lib/assets/background-hero.jpeg);
		}
	}
</style>
