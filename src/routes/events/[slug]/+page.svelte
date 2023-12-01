<script>
	import ArrowLeft from '$lib/assets/Icons/Arrow-Left.svg';
	import Button from '$lib/components/Button.svelte';
	import Testimonial from '$lib/homepage/Testimonial.svelte';
	import HandWithMoney from '$lib/icons/HandWithMoney.svelte';
	import LoveEarth from '$lib/icons/LoveEarth.svelte';
	import People from '$lib/icons/People.svelte';

	import Placeholder1200 from '$lib/assets/placeholder/1200.jpg?enhanced';
	import Placeholder800x1200 from '$lib/assets/placeholder/800x1200.jpg?enhanced';

	/** @type {import('./$types').PageData} */
	export let data;

	const photos = [
		{
			src: Placeholder1200,
			alt: 'Placeholder'
		},
		{
			src: Placeholder800x1200,
			alt: 'Placeholder'
		},
		{
			src: Placeholder800x1200,
			alt: 'Placeholder'
		},
		{
			src: Placeholder800x1200,
			alt: 'Placeholder'
		}
	];

	const infos = [
		{
			title: 'Ort',
			icon: People,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing			elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.'
		},
		{
			title: 'Orga',
			icon: People,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing			elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.'
		},
		{
			title: 'Finanzierung',
			icon: HandWithMoney,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing			elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.'
		},
		{
			title: 'Motivation',
			icon: LoveEarth,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing			elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.'
		}
	];

	function goBack() {
		window.history.back();
	}
</script>

<enhanced:img
	class="h-[27rem] w-full object-cover"
	src="$lib/assets/gathering-24-hero.jpeg"
	alt="Gathering 2024"
/>
<div class="pr-4 lg:pr-20">
	<div class="flex h-12 w-full items-center rounded-br-xl bg-yellow-500 bg-opacity-60 lg:text-xl">
		<button on:click={goBack} class="p-3">
			<img src={ArrowLeft} alt="" class="h-6 w-6" />
			<span class="sr-only">Zur vorherigen Seite</span>
		</button>
		Get Involved
	</div>
</div>
<section class="mt-12 px-4 lg:mt-20 lg:px-20">
	<h1 class="text-center font-serif text-3xl font-bold lg:text-left lg:text-5xl">{data.title}</h1>
	<p class="mt-6 lg:mt-16 lg:text-xl lg:leading-8">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
	</p>
	<Button text="Sign Up" color="black" class="mt-12 lg:mt-14" />
</section>
<section class="mt-14 px-4 lg:mt-28 lg:px-20">
	<h2 class="font-serif text-2xl font-bold lg:text-3xl">Wichtige Infos</h2>
	<div
		id="info-grid"
		class="mt-12 grid grid-cols-1 items-center justify-center lg:grid-flow-col lg:grid-cols-4 lg:gap-x-16"
	>
		{#each infos as info}
			<div class="mx-auto h-40 w-40 rounded-full bg-yellow-500 bg-opacity-60 p-7">
				<svelte:component this={info.icon} />
			</div>
			<h3
				class="mt-12 text-center font-serif text-xl font-bold lg:mt-0 lg:pb-7 lg:pt-12 lg:text-3xl"
			>
				{info.title}
			</h3>
			<p class="mb-12 mt-2 w-full lg:my-0 lg:text-xl">{info.text}</p>
		{/each}
	</div>
</section>
<section class="mt-14 px-4 lg:mt-28 lg:px-20">
	<h2 class="font-serif text-2xl font-bold lg:text-4xl">Keep Updated</h2>
	<p class="mt-5 lg:mt-6 lg:text-xl">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
	</p>
	<Button class="mt-12" color="black" text="Follow Telegram Kanal" />
</section>
<Testimonial class="mt-14 bg-yellow-500 bg-opacity-60 lg:mt-40 lg:bg-opacity-0" />
<section class="mt-14 px-4 lg:mt-28 lg:px-20">
	<h2 class="font-serif text-2xl font-bold lg:text-4xl">Fotos vom letzten Gathering</h2>
	<div
		id="photo-grid"
		class="grid grid-cols-1 gap-y-12 py-12 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8 lg:pb-28 lg:pt-16"
	>
		{#each photos as photo, index}
			<div
				class:hidden={index > 2}
				class:lg:col-span-2={index === 0}
				class:lg:row-span-2={index === 1}
				class:lg:row-span-3={index === 0 || index === 2}
				class="lg:block"
			>
				<enhanced:img
					class="h-[30rem] w-full object-cover lg:h-full"
					src={photo.src}
					alt={photo.alt}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	@media (min-width: 1024px) {
		#info-grid {
			grid-template-rows: 10.75rem auto auto;
		}

		#photo-grid {
			grid-template-rows: repeat(3, 14rem);
		}
	}
</style>
