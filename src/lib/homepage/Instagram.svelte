<script lang="ts">
	import ArrowRight from '$lib/assets/Icons/Arrow-Right.svg';
	import ArrowLeft from '$lib/assets/Icons/Arrow-Left.svg';
	import FirstImage from '$lib/assets/instagram/first.jpeg';
	import SecondImage from '$lib/assets/instagram/second.jpeg';

	// TODO: get from Instagram API

	const images = [
		{ src: FirstImage, alt: 'First Image' },
		{ src: SecondImage, alt: 'Second Image' },
		{ src: FirstImage, alt: 'First Image' },
		{ src: SecondImage, alt: 'Second Image' },
		{ src: FirstImage, alt: 'First Image' }
	];
</script>

<section class="w-full pb-32 pt-12 md:px-6">
	<h1 class="mx-5 font-serif text-3xl font-bold text-dark-green md:mx-12 md:text-black">
		Folge uns auf Instagram
	</h1>
	<div class="relative mt-11">
		<div class="flex max-w-full gap-x-2 overflow-hidden md:mx-14">
			{#each images as image}
				<img class="h-52 w-52 shrink-0 object-cover" src={image.src} alt={image.alt} />
			{/each}
		</div>
		<div class="absolute top-20 flex w-full items-center justify-between">
			<button class="p-3">
				<img src={ArrowLeft} alt="" class="h-6 w-6" />
				<span class="sr-only">Show previous image</span>
			</button>
			<button class="p-3">
				<img src={ArrowRight} alt="" class="h-6 w-6" />
				<span class="sr-only">Show next image</span>
			</button>
		</div>
	</div>
</section>
