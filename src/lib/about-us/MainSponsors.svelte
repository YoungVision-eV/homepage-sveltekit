<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section class="bg-green-500 px-4 py-6 lg:px-20">
	<h2 class="font-bold text-green-50">Hauptförderer</h2>
	<div class="mt-5 lg:flex lg:justify-between">
		<a href="https://www.deutsche-stiftung-engagement-und-ehrenamt.de/">
			<span class="sr-only">Gefördert durch die Deutsche Stiftung für Engagement und Ehrenamt</span>
			<enhanced:img
				class="w-full max-w-md"
				src="$lib/assets/DSEE.png"
				alt="Gefördert durch die Deutsche Stiftung für Engagement und Ehrenamt"
			/>
		</a>

		<div class="mt-5 text-center">
			<Button color="dark" text="Jetzt Partner werden" />
		</div>
	</div>
</section>
