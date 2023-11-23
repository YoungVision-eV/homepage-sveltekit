<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section class="w-full bg-cover pb-7 pt-8 lg:px-20">
	<div
		class="flex-row items-center justify-between gap-x-24 bg-background bg-opacity-80 lg:flex lg:rounded-2xl"
	>
		<div class="hidden flex-none rounded-2xl lg:block">
			<enhanced:img
				class="h-[29rem] w-[27rem] rounded-2xl object-cover"
				src="$lib/assets/read-more-image.jpeg"
				alt="Menschen sitzen in einem Van und singen. Die Person in der Mitte spielt Ukulele."
			/>
		</div>
		<div class="flex flex-col items-center px-4 py-6 lg:items-start lg:pr-24">
			<div class="flex flex-col items-center px-4 py-6 lg:items-start lg:pr-24">
				<h1 class="font-serif text-2xl font-bold lg:text-3xl">Wir sind YoungVision e.V.</h1>
				<p class="mt-6 text-center leading-7 lg:text-left lg:leading-5">
					Unsere Community ist geprägt von Offenheit, Empathie und gegenseitiger Unterstützung. Wir
					glauben daran, dass wahre Veränderung durch Selbstwahrnehmung und das Teilen von
					Erfahrungen entsteht.
				</p>
				<p class="mt-7 text-center leading-7 lg:text-left lg:leading-5">
					Gemeinsam gestalten wir so eine Welt, in der Achtsamkeit, Verbundenheit und persönliche
					Entwicklung im Mittelpunkt stehen. Entdecke YoungVision und werde Teil dieser
					inspirierenden Gemeinschaft.
				</p>
				<Button class="mt-12" text="About YoungVision" color="black" />
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background-image: url($lib/assets/background-read-more.png);
	}
</style>
