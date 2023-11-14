<script>
	import readMoreBackground from '$lib/assets/background-read-more.jpeg';
	import readMorePicture from '$lib/assets/read-more-image.jpeg';
	import Button from '$lib/components/Button.svelte';
</script>

<section
	class="w-full bg-cover pt-8 pb-7 md:px-20"
	style="background-image: url({readMoreBackground});"
>
	<div
		class="md:flex flex-row justify-between items-center gap-x-24 bg-dark-green bg-opacity-60 md:rounded-2xl"
	>
		<img
			src={readMorePicture}
			alt="Menschen sitzen in einem Van und singen. Die Perosn in der Mitte spielt Ukulele."
			class="hidden md:block w-[27rem] h-[29rem] object-cover rounded-2xl"
		/>
		<div class="py-6 px-4 lg:pr-24 flex flex-col items-center md:items-start text-white">
			<h1 class="text-2xl md:text-3xl font-bold font-serif">Wir sind YoungVision e.V.</h1>
			<p class="mt-6 text-center md:text-left leading-7 md:leading-5">
				Unsere Community ist geprägt von Offenheit, Empathie und gegenseitiger Unterstützung. Wir
				glauben daran, dass wahre Veränderung durch Selbstwahrnehmung und das Teilen von Erfahrungen
				entsteht.
			</p>
			<p class="mt-7 text-center md:text-left leading-7 md:leading-5">
				Gemeinsam gestalten wir so eine Welt, in der Achtsamkeit, Verbundenheit und persönliche
				Entwicklung im Mittelpunkt stehen. Entdecke YoungVision und werde Teil dieser inspirierenden
				Gemeinschaft.
			</p>
			<Button class="mt-12" text="About YoungVision" color="white" />
		</div>
	</div>
</section>
