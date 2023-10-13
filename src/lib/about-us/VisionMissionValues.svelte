<script>
	import MissionIcon from './icons/MissionIcon.svelte';
	import ValuesIcon from './icons/ValuesIcon.svelte';
	import VisionIcon from './icons/VisionIcon.svelte';
</script>

<section class="w-full px-5 pt-14 mb-28 text-center">
	<h1 class="text-3xl font-bold font-serif text-center">Über YoungVision -</h1>
	<h1 class="mt-3 text-3xl font-bold font-serif text-center">Wer wir sind</h1>
	<div class="md:flex gap-x-16 md:px-48 md:mt-16">
		<div>
			<div
				class="mt-8 bg-yellow rounded-full flex justify-center items-center w-24 h-24 md:h-44 md:w-44 p-5 md:p-8 mx-auto"
			>
				<VisionIcon />
			</div>
			<h2 class="mt-3 md:mt-10 text-2xl md:text-4xl font-bold font-serif">Vision</h2>
			<p class="mt-3 md:mt-5 text-justify">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad.
			</p>
		</div>
		<div>
			<div
				class="mt-8 bg-light-green rounded-full flex justify-center items-center w-24 h-24 md:h-44 md:w-44 p-5 md:p-8 mx-auto"
			>
				<MissionIcon />
			</div>
			<h2 class="mt-3 md:mt-10 text-2xl md:text-4xl font-bold font-serif">Mission</h2>
			<p class="mt-3 md:mt-5 text-justify">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad.
			</p>
		</div>
		<div>
			<div
				class="mt-8 bg-pink rounded-full flex justify-center items-center w-24 h-24 md:h-44 md:w-44 p-5 md:p-8 mx-auto"
			>
				<ValuesIcon />
			</div>
			<h2 class="mt-3 md:mt-10 text-2xl md:text-4xl font-bold font-serif">Werte</h2>
			<p class="mt-3 md:mt-5 text-justify">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad.
			</p>
		</div>
	</div>
</section>
