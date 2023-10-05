<script>
	import MissionIcon from './icons/MissionIcon.svelte';
	import ValuesIcon from './icons/ValuesIcon.svelte';
	import VisionIcon from './icons/VisionIcon.svelte';
</script>

<section class="w-full px-5 pt-14 mb-28 text-center">
	<h1 class="text-3xl font-bold font-serif text-center">Über YoungVision -</h1>
	<h1 class="mt-3 text-3xl font-bold font-serif text-center">Wer wir sind</h1>
	<div>
		<div class="mt-8 bg-yellow rounded-full flex justify-center items-center w-24 h-24 mx-auto">
			<VisionIcon />
		</div>
		<h2 class="mt-3 text-2xl font-bold font-serif">Vision</h2>
		<p class="mt-3 text-justify">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad.
		</p>
	</div>
	<div>
		<div
			class="mt-8 bg-light-green rounded-full flex justify-center items-center w-24 h-24 mx-auto"
		>
			<MissionIcon />
		</div>
		<h2 class="mt-3 text-2xl font-bold font-serif">Mission</h2>
		<p class="mt-3 text-justify">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad.
		</p>
	</div>
	<div>
		<div class="mt-8 bg-pink rounded-full flex justify-center items-center w-24 h-24 mx-auto">
			<ValuesIcon />
		</div>
		<h2 class="mt-3 text-2xl font-bold font-serif">Werte</h2>
		<p class="mt-3 text-justify">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad.
		</p>
	</div>
</section>
