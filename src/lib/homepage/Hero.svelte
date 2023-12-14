<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section class="w-full bg-cover">
	<div class="grid grid-cols-1 items-center gap-x-20 gap-y-10 px-5 py-16 lg:grid-cols-2 lg:px-20">
		<div class="h-96 px-9 lg:h-[36rem] lg:px-0">
			<enhanced:img
				class="h-full w-full rounded-2xl object-cover object-center"
				src="$lib/assets/hero-image.jpeg"
				alt="Eine Frau breitet ihre Arme aus und lächelt mit geschlossenen Augen in die Kamera,
				während sie ihren Kopf zur Seite neigt. Hinter ihr ist ein Haufen mit Holzscheiten zu sehen."
			/>
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
