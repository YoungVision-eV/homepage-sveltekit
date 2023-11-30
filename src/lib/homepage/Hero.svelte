<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section class="w-full bg-cover">
	<div class="grid grid-cols-1 items-center gap-x-20 gap-y-10 px-5 py-16 lg:grid-cols-2 lg:px-20">
		<div class="h-96 px-9 lg:h-[36rem] lg:px-0">
			<enhanced:img
				class="h-full w-auto rounded-2xl object-cover"
				src="$lib/assets/hero-image.jpeg"
				alt="People sit before a wall and one is smiling into the camera"
			/>
		</div>
		<div class="lg:order-first">
			<h1 class="font-serif text-3xl font-bold lg:text-5xl">
				<span class="text-orange">Schön,</span> dass du hier bist!
			</h1>
			<p class="mt-6 text-xl lg:mt-14">
				YoungVision - Ein Raum für dich, um zu wachsen, dich selbst zu entdecken und echte
				Verbindungen zu anderen zu knüpfen. Hier darfst du ankommen und Teil einer inspirierenden
				Gemeinschaft junger Menschen werden.
			</p>
			<!-- For some reason if it is an <a> element it gets stretched full-wdith -->
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
		background-image: url($lib/assets/background-hero-landscape.png);
	}
	@media (min-width: 1024px) {
		section {
			background-image: url($lib/assets/background-hero.png);
		}
	}
</style>
