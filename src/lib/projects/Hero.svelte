<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section class="flex h-[44rem] w-full flex-col justify-between bg-cover bg-center pt-12 lg:pt-20">
	<h1 class="text-center font-serif text-4xl font-bold text-white lg:text-5xl">Get Involved</h1>
	<div class="w-full bg-gray-800 bg-opacity-60 px-4 pb-6 pt-10 text-white lg:px-20">
		<h2 class="font-serif text-2xl font-bold lg:text-3xl">
			Past Event Highlight: YoungVision Sommer
		</h2>
		<p class="mt-5 lg:text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
		</p>
		<Button text="See More" color="black" class="ml-2 mt-5" />
	</div>
</section>

<style>
	section {
		background-image: url($lib/assets/project-hero-bg.jpeg);
	}
</style>
