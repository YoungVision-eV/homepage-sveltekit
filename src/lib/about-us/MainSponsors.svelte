<script>
	import DSEE from '$lib/assets/DSEE.png';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="bg-green-500 px-4 py-6 lg:px-20">
	<h2 class="font-bold text-green-50">Hauptförderer</h2>
	<div class="mt-5 lg:flex lg:justify-between">
		<a href="https://www.deutsche-stiftung-engagement-und-ehrenamt.de/">
			<span class="sr-only">Gefördert durch die Deutsche Stiftung für Engagement und Ehrenamt</span>
			<img
				class="w-full max-w-md"
				src={DSEE}
				alt="Gefördert durch die Deutsche Stiftung für Engagement und Ehrenamt"
			/>
		</a>

		<div class="mt-5 text-center">
			<Button color="black" text="Jetzt Partner werden" />
		</div>
	</div>
</section>
