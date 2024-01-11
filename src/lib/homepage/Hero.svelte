<script>
	import Button from '$lib/components/Button.svelte';
	import HeroImageAvif from '$lib/assets/homepage/hero-image.503c4857.avif';
	import HeroImageAvif2x from '$lib/assets/homepage/hero-image.220bbd26.avif';
	import HeroImageWebp from '$lib/assets/homepage/hero-image.c245d3b1.webp';
	import HeroImageWebp2x from '$lib/assets/homepage/hero-image.ace35709.webp';
	import HeroImageJpg from '$lib/assets/homepage/hero-image.e11349d0.jpg';
	import HeroImageJpg2x from '$lib/assets/homepage/hero-image.dd98b13e.jpg';
	import HeroImageBase from '$lib/assets/homepage/hero-image.e11349d0.jpg';
</script>

<section class="w-full bg-cover">
	<div class="grid grid-cols-1 items-center gap-x-20 gap-y-10 px-5 py-16 lg:grid-cols-2 lg:px-20">
		<div class="h-96 px-9 lg:h-[36rem] lg:px-0">
			<picture
				><source srcset="{HeroImageAvif} 1x, {HeroImageAvif2x} 2x" type="image/avif" />
				<source srcset="{HeroImageWebp} 1x, {HeroImageWebp2x} 2x" type="image/webp" />
				<source srcset="{HeroImageJpg} 1x, {HeroImageJpg2x} 2x" type="image/jpeg" />
				<img
					class="h-full w-full rounded-2xl object-cover object-center"
					src={HeroImageBase}
					alt="Eine Frau breitet ihre Arme aus und lächelt mit geschlossenen Augen in die Kamera, während sie ihren Kopf zur Seite neigt. Hinter ihr ist ein Haufen mit Holzscheiten zu sehen."
					width="2731"
					height="4096"
				/>
			</picture>
		</div>
		<div class="lg:order-first">
			<h1 class="font-serif text-3xl font-bold lg:text-5xl">
				<span class="text-orange">Schön,</span> dass du hier bist!
			</h1>
			<p class="mt-6 text-xl lg:mt-14">
				Ein Raum für dich, um zu wachsen, dich selbst zu entdecken und echte Verbindungen zu anderen
				zu knüpfen. Hier darfst du Teil einer inspirierenden Gemeinschaft junger Menschen werden.
			</p>
			<Button
				class="mx-auto mt-12 w-64 lg:mx-0"
				text="Mitglied werden"
				href="/members"
				color="dark"
			/>
		</div>
	</div>
</section>

<style>
	section {
		background-image: url($lib/assets/backgrounds/homepage/background-hero-500.webp);
	}
	@media (min-width: 1024px) {
		section {
			background-image: url($lib/assets/backgrounds/homepage/background-hero-1920.webp);
		}
	}
	@media (min-width: 1921px) {
		section {
			background-image: url($lib/assets/backgrounds/homepage/background-hero.webp);
		}
	}
</style>
