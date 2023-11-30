<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section class="w-full bg-cover">
	<div class="grid-cols-2 items-center gap-x-20 px-5 py-16 lg:grid lg:px-20">
		<div class="mx-9 h-96 lg:mx-0 lg:h-[36rem]">
			<enhanced:img
				class="h-full w-auto rounded-2xl object-cover"
				src="$lib/assets/hero-image.jpeg"
				alt="People sit before a wall and one is smiling into the camera"
			/>
		</div>
		<div class="order-first mt-10 lg:mt-0">
			<h1 class="font-serif text-3xl font-bold lg:text-5xl">Schön, dass du hier bist!</h1>
			<p class="mt-6 text-xl lg:mt-14">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad.
			</p>
			<Button class="mx-auto mt-12 lg:mx-0" text="Call To Action" color="black" />
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
