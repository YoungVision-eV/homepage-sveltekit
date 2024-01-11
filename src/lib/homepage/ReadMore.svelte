<script>
	import Button from '$lib/components/Button.svelte';
	import ReadMoreImageAvif from '$lib/assets/homepage/read-more-image.9df02afb.avif';
	import ReadMoreImageAvif2x from '$lib/assets/homepage/read-more-image.b39138ce.avif';
	import ReadMoreImageWebp from '$lib/assets/homepage/read-more-image.5204c8de.webp';
	import ReadMoreImageWebp2x from '$lib/assets/homepage/read-more-image.e1acbff7.webp';
	import ReadMoreImageJpg from '$lib/assets/homepage/read-more-image.f16e11e5.jpg';
	import ReadMoreImageJpg2x from '$lib/assets/homepage/read-more-image.5ee880ba.jpg';
	import ReadMoreImageBase from '$lib/assets/homepage/read-more-image.f16e11e5.jpg';
</script>

<section class="w-full bg-cover pb-7 pt-8 lg:px-20">
	<div
		class="flex-row items-center justify-between gap-x-24 bg-background bg-opacity-80 lg:flex lg:rounded-2xl"
	>
		<div class="hidden flex-none rounded-2xl lg:block">
			<picture>
				<source srcset="{ReadMoreImageAvif} 1x, {ReadMoreImageAvif2x} 2x" type="image/avif" />
				<source srcset="{ReadMoreImageWebp} 1x, {ReadMoreImageWebp2x} 2x" type="image/webp" />
				<source srcset="{ReadMoreImageJpg} 1x, {ReadMoreImageJpg2x} 2x" type="image/jpeg" />
				<img
					class="h-[29rem] w-[27rem] rounded-2xl object-cover"
					src={ReadMoreImageBase}
					alt="Menschen sitzen in einem Van und singen. Die Person in der Mitte spielt Ukulele."
					width="4096"
					height="3072"
				/>
			</picture>
		</div>
		<div class="flex flex-col items-center px-4 py-6 lg:items-start lg:pr-24">
			<h1 class="font-serif text-2xl font-bold lg:text-3xl">Wir sind YoungVision e.V.</h1>
			<p class="mt-6 text-center leading-7 lg:text-left lg:leading-5">
				YoungVision ist eine Community von jungen Menschen für junge Menschen in Verbindung mit
				innerer Entwicklungsarbeit.
			</p>
			<p class="mt-7 text-center leading-7 lg:text-left lg:leading-5">
				Unsere Community ist geprägt von Offenheit, Empathie und gegenseitiger Unterstützung. Wir
				glauben daran, dass wahre Veränderung durch Selbstwahrnehmung und das authentische Teilen
				von Erfahrungen entsteht. Gemeinsam gestalten wir so eine Welt, in der Achtsamkeit,
				Verbundenheit und persönliche Entwicklung im Mittelpunkt stehen.
			</p>
			<Button class="mt-12" text="Erfahre mehr" href="/about-us" color="bright" />
		</div>
	</div>
</section>

<style>
	section {
		background-image: url($lib/assets/backgrounds/homepage/background-read-more.webp);
	}
</style>
