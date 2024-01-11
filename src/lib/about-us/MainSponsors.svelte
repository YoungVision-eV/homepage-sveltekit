<script>
	import DSEEImageAvif from '$lib/assets/footer/DSEE.f94b68c3.avif';
	import DSEEImageAvif2x from '$lib/assets/footer/DSEE.e46c5af3.avif';
	import DSEEImageWebp from '$lib/assets/footer/DSEE.6b0582a3.webp';
	import DSEEImageWebp2x from '$lib/assets/footer/DSEE.0284a66d.webp';
	import DSEEImagePng from '$lib/assets/footer/DSEE.e206ddcf.png';
	import DSEEImagePng2x from '$lib/assets/footer/DSEE.21af6b1b.png';
	import DSEEImageBase from '$lib/assets/footer/DSEE.e206ddcf.png';

	import Button from '$lib/components/Button.svelte';
</script>

<section class="bg-green-500 px-4 py-6 lg:px-20">
	<h2 class="font-bold text-green-50">Hauptförderer</h2>
	<div class="mt-5 lg:flex lg:justify-between">
		<a href="https://www.deutsche-stiftung-engagement-und-ehrenamt.de/">
			<picture>
				<source srcset="{DSEEImageAvif} 1x, {DSEEImageAvif2x} 2x" type="image/avif" />
				<source srcset="{DSEEImageWebp} 1x, {DSEEImageWebp2x} 2x" type="image/webp" />
				<source srcset="{DSEEImagePng} 1x, {DSEEImagePng2x} 2x" type="image/png" />
				<img
					class="w-full max-w-md"
					src={DSEEImageBase}
					alt="Gefördert durch die Deutsche Stiftung für Engagement und Ehrenamt"
					width="1024"
					height="334"
				/></picture
			>
		</a>

		<div class="mt-5 text-center">
			<Button color="dark" text="Jetzt Partner werden" />
		</div>
	</div>
</section>
