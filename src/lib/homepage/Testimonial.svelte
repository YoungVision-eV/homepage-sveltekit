<script lang="ts">
	import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte';

	import ArrowRight from '$lib/assets/Icons/Arrow-Right.svg';
	import ArrowLeft from '$lib/assets/Icons/Arrow-Left.svg';
	import LenaProfile from '$lib/assets/lena-testimonial-profile.jpeg';

	let emblaApi: EmblaCarouselType;
	let options = { loop: true };

	const onInit = (event: CustomEvent<EmblaCarouselType>) => {
		emblaApi = event.detail;
	};

	const testimonials = [
		{
			name: 'Name',
			age: 'Age',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.',
			image: LenaProfile
		},
		{
			name: 'Name 2',
			age: 'Age 2',
			text: 'Hello',
			image: 'https://placehold.co/400'
		}
	];
</script>

<!-- TODO: add Background -->

<section class="w-full pt-24 pb-12" data-testid="testimonials">
	<h1 class="mx-5 md:mx-16 text-3xl font-bold font-serif">Von YoungVision Leuten</h1>
	<div class="relative overflow-hidden mt-3 md:mt-16">
		<div
			class="embla__viewport px-5 md:px-32"
			use:emblaCarouselSvelte={{ options, plugins: [] }}
			on:emblaInit={onInit}
		>
			<div class="flex">
				{#each testimonials as testimonial}
					<div class="embla__slide min-w-0 md:flex items-center gap-x-28 mr-5 md:mr-32">
						<img
							src={testimonial.image}
							alt={testimonial.name}
							class="w-24 h-24 md:w-96 md:h-96 rounded-full object-cover mx-auto md:mx-0"
						/>
						<div class="md:pb-4">
							<blockquote class="mt-2.5 leading-6 md:text-xl">
								<p>{testimonial.text}</p>
							</blockquote>

							<p class="mt-2 md:mt-8 italic">{testimonial.name}, {testimonial.age}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="absolute flex items-center justify-between top-9 md:top-44 w-full px-3">
			<button on:click={() => emblaApi.scrollPrev()}>
				<img src={ArrowLeft} alt="" class="w-6 h-6 md:w-8 md:h-8" />
				<span class="sr-only">Previous Testimonial</span>
			</button>
			<button on:click={() => emblaApi.scrollNext()}>
				<img src={ArrowRight} alt="" class="w-6 h-6 md:w-8 md:h-8" />
				<span class="sr-only">Next Testimonial</span>
			</button>
		</div>
	</div>
</section>

<style>
	.embla__slide {
		flex: 0 0 100%;
	}
</style>
