<script>
	import readMoreBackground from '$lib/assets/background-read-more.jpeg';
	import readMorePicture from '$lib/assets/read-more-image.jpeg';
	import Button from '$lib/components/Button.svelte';
</script>

<section
	class="w-full bg-cover pb-7 pt-8 lg:px-20"
	style="background-image: url({readMoreBackground});"
>
	<div
		class="flex-row items-center justify-between gap-x-24 bg-dark-green bg-opacity-60 lg:flex lg:rounded-2xl"
	>
		<img
			src={readMorePicture}
			alt="Menschen sitzen in einem Van und singen. Die Perosn in der Mitte spielt Ukulele."
			class="hidden h-[29rem] w-[27rem] rounded-2xl object-cover lg:block"
		/>
		<div class="flex flex-col items-center px-4 py-6 text-white lg:items-start lg:pr-24">
			<h1 class="font-serif text-2xl font-bold lg:text-3xl">Wir sind YoungVision e.V.</h1>
			<p class="mt-6 text-center leading-7 lg:text-left lg:leading-5">
				Unsere Community ist geprägt von Offenheit, Empathie und gegenseitiger Unterstützung. Wir
				glauben daran, dass wahre Veränderung durch Selbstwahrnehmung und das Teilen von Erfahrungen
				entsteht.
			</p>
			<p class="mt-7 text-center leading-7 lg:text-left lg:leading-5">
				Gemeinsam gestalten wir so eine Welt, in der Achtsamkeit, Verbundenheit und persönliche
				Entwicklung im Mittelpunkt stehen. Entdecke YoungVision und werde Teil dieser inspirierenden
				Gemeinschaft.
			</p>
			<Button class="mt-12" text="About YoungVision" color="white" />
		</div>
	</div>
</section>
