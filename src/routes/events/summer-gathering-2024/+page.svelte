<script>
	import Gathering2024 from '$lib/assets/gathering-24-hero.jpeg';
	import ArrowLeft from '$lib/assets/Icons/Arrow-Left.svg';
	import Button from '$lib/components/Button.svelte';
	import Footer from '$lib/homepage/Footer.svelte';
	import Testimonial from '$lib/homepage/Testimonial.svelte';
	import HandWithMoney from '$lib/icons/HandWithMoney.svelte';
	import LoveEarth from '$lib/icons/LoveEarth.svelte';
	import People from '$lib/icons/People.svelte';

	const photos = [
		{
			src: 'https://placehold.co/800x1200',
			alt: 'Placeholder'
		},
		{
			src: 'https://placehold.co/800x1200',
			alt: 'Placeholder'
		},
		{
			src: 'https://placehold.co/800x1200',
			alt: 'Placeholder'
		}
	];
</script>

<img class="h-[27rem] w-full object-cover" src={Gathering2024} alt="Gathering 2024" />
<div class="pr-4">
	<div class="flex h-12 w-full items-center rounded-br-xl bg-yellow bg-opacity-60">
		<button class="p-3">
			<img src={ArrowLeft} alt="" class="h-6 w-6" />
			<span class="sr-only">Show previous image</span>
		</button>
		Get Involved
	</div>
</div>
<section class="px-4 pt-12">
	<h1 class="text-center font-serif text-3xl font-bold">Summer Gathering 2024</h1>
	<p class="mt-6">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
	</p>
	<Button text="Sign Up" color="black" class="mt-12" />
</section>
<section class="px-4 pt-14">
	<h2 class="font-serif text-2xl font-bold">Wichtige Infos</h2>
	<dl class="mt-12 flex flex-col items-center">
		<dt>
			<div class="h-40 w-40 rounded-full bg-yellow bg-opacity-60 p-7">
				<People />
			</div>
			<h3 class="mt-12 text-center font-serif text-xl font-bold">Ort</h3>
		</dt>
		<dd>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
		</dd>
		<dt class="mt-12">
			<div class="h-40 w-40 rounded-full bg-yellow bg-opacity-60 p-7">
				<People />
			</div>
			<h3 class="mt-12 text-center font-serif text-xl font-bold">Orga</h3>
		</dt>
		<dd>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
		</dd>
		<dt class="mt-12">
			<div class="h-40 w-40 rounded-full bg-yellow bg-opacity-60 p-7">
				<HandWithMoney />
			</div>
			<h3 class="mt-12 text-center font-serif text-xl font-bold">Finanzierung</h3>
		</dt>
		<dd>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
		</dd>
		<dt class="mt-12">
			<div class="h-40 w-40 rounded-full bg-yellow bg-opacity-60 p-7">
				<LoveEarth />
			</div>
			<h3 class="mt-12 text-center font-serif text-xl font-bold">Motivation</h3>
		</dt>
		<dd>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
			elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
		</dd>
	</dl>
</section>
<section class="mt-14 px-4">
	<h2 class="font-serif text-2xl font-bold">Keep Updated</h2>
	<p class="mt-5">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
	</p>
	<Button class="mt-12" color="black" text="Follow Telegram Kanal" />
</section>
<Testimonial class="mt-14 bg-yellow bg-opacity-60" />
<section class="mt-14 px-4">
	<h2 class="font-serif text-2xl font-bold">Fotos vom letzten Gathering</h2>
	<div class="flex flex-col gap-12 py-12">
		{#each photos as photo}
			<img class="h-[30rem] w-full object-cover" src={photo.src} alt={photo.alt} />
		{/each}
	</div>
</section>
<Footer />
