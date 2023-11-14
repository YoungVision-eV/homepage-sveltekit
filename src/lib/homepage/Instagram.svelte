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

<section class="w-full pt-12 pb-32 md:px-6">
	<h1 class="mx-5 md:mx-12 text-3xl font-bold font-serif text-dark-green md:text-black">
		Folge uns auf Instagram
	</h1>
	<div class="mt-11 relative">
		<div class="flex gap-x-2 md:mx-14 max-w-full overflow-hidden">
			{#each images as image}
				<img class="w-52 h-52 shrink-0 object-cover" src={image.src} alt={image.alt} />
			{/each}
		</div>
		<div class="absolute flex items-center justify-between top-20 w-full">
			<button class="p-3">
				<img src={ArrowLeft} alt="" class="w-6 h-6" />
				<span class="sr-only">Show previous image</span>
			</button>
			<button class="p-3">
				<img src={ArrowRight} alt="" class="w-6 h-6" />
				<span class="sr-only">Show next image</span>
			</button>
		</div>
	</div>
</section>
