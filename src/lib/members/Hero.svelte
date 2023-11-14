<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section class="flex h-[44rem] flex-col justify-end bg-cover bg-center pb-10 md:pb-6">
	<div class="flex flex-col items-center bg-black bg-opacity-60 px-4 py-12 text-white">
		<h1 class="font-serif text-4xl font-bold md:text-5xl">Werde Mitglied</h1>
		<p class="mt-6 max-w-[35rem] md:mt-7 md:text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad.
		</p>
		<Button class="mt-12 md:mt-4" text="Call to action" color="black" />
	</div>
</section>

<style>
	section {
		background-image: url($lib/assets/member-hero-background.jpeg);
	}
</style>
