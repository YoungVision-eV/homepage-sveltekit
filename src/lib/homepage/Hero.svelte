<script>
	import heroImage from '$lib/assets/hero-image-landscape.jpeg';
	import heroBackground from '$lib/assets/background-hero-landscape.jpeg';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="w-full bg-cover" style="background-image: url({heroBackground});">
	<div class="px-5 pb-16 pt-14">
		<div class="mx-6 h-96">
			<img
				class="rounded-2xl h-full w-auto object-cover"
				src={heroImage}
				alt="People sit before a wall and one is smiling into the camera"
			/>
		</div>
		<div class="mt-14">
			<h1 class="text-3xl font-bold font-sans">Schön, dass du hier bist!</h1>
			<p class="text-xl mt-8">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad.
			</p>
			<Button class="mx-auto" text="Call To Action" color="black" />
		</div>
	</div>
</div>
