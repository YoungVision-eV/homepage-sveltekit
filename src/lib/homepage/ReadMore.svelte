<script>
	import readMoreBackground from '$lib/assets/background-read-more.jpeg';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="w-full bg-cover pt-12 pb-16" style="background-image: url({readMoreBackground});">
	<div class="flex flex-col items-center">
		<h1 class="text-white text-3xl font-bold font-serif">Wir sind YoungVision e.V.</h1>
		<p class="mt-4 text-xl text-center mx-5 leading-8">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad.
		</p>
		<Button class="mt-14" text="Read More" color="white" />
	</div>
</div>
