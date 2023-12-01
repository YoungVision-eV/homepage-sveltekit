<script>
	import Background from '$lib/assets/background-vision-statement.png';

	import MissionIcon from './icons/MissionIcon.svelte';
	import ValuesIcon from './icons/ValuesIcon.svelte';
	import VisionIcon from './icons/VisionIcon.svelte';
</script>

<section class="relative w-full overflow-hidden px-5 pb-28 pt-14 text-center">
	<img
		class="absolute right-[-5rem] top-[-5rem] -z-10 h-[19rem] w-auto lg:right-[-7rem] lg:top-[-7rem] lg:h-[32rem]"
		src={Background}
		alt="YoungVision Logo"
	/>
	<img
		class="absolute left-[-7rem] top-[7rem] -z-10 h-[14rem] w-auto lg:top-[17rem] lg:h-[25rem]"
		src={Background}
		alt="YoungVision Logo"
	/>
	<img
		class="absolute bottom-[-7rem] right-[-4rem] -z-10 h-[14rem] w-auto"
		src={Background}
		alt="YoungVision Logo"
	/>

	<h1 class="text-center font-serif text-3xl font-bold">Über YoungVision -</h1>
	<h1 class="mt-3 text-center font-serif text-3xl font-bold">Wer wir sind</h1>
	<div class="gap-x-16 lg:mt-16 lg:flex lg:px-48">
		<div>
			<div
				class="bg-yellow mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full p-5 lg:h-44 lg:w-44 lg:p-8"
			>
				<VisionIcon />
			</div>
			<h2 class="mt-3 font-serif text-2xl font-bold lg:mt-10 lg:text-4xl">Vision</h2>
			<p class="mt-3 text-justify lg:mt-5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad.
			</p>
		</div>
		<div>
			<div
				class="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-light-green p-5 lg:h-44 lg:w-44 lg:p-8"
			>
				<MissionIcon />
			</div>
			<h2 class="mt-3 font-serif text-2xl font-bold lg:mt-10 lg:text-4xl">Mission</h2>
			<p class="mt-3 text-justify lg:mt-5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad.
			</p>
		</div>
		<div>
			<div
				class="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-pink p-5 lg:h-44 lg:w-44 lg:p-8"
			>
				<ValuesIcon />
			</div>
			<h2 class="mt-3 font-serif text-2xl font-bold lg:mt-10 lg:text-4xl">Werte</h2>
			<p class="mt-3 text-justify lg:mt-5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad.
			</p>
		</div>
	</div>
</section>
