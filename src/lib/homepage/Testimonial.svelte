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

<section class="w-full pb-12 pt-14" data-testid="testimonials">
	<h1 class="mx-5 font-serif text-3xl font-bold md:mx-16">Von YoungVision Leuten</h1>
	<div class="relative mt-3 overflow-hidden md:mt-16">
		<div
			class="embla__viewport px-5 md:px-32"
			use:emblaCarouselSvelte={{ options, plugins: [] }}
			on:emblaInit={onInit}
		>
			<div class="flex">
				{#each testimonials as testimonial}
					<div class="embla__slide mr-5 min-w-0 items-center gap-x-28 md:mr-32 md:flex">
						<img
							src={testimonial.image}
							alt={testimonial.name}
							class="mx-auto h-24 w-24 rounded-full object-cover md:mx-0 md:h-96 md:w-96"
						/>
						<div class="md:pb-4">
							<blockquote class="mt-2.5 leading-6 md:text-xl">
								<p>{testimonial.text}</p>
							</blockquote>

							<p class="mt-2 italic md:mt-8">{testimonial.name}, {testimonial.age}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="absolute top-9 flex w-full items-center justify-between px-3 md:top-44">
			<button on:click={() => emblaApi.scrollPrev()}>
				<img src={ArrowLeft} alt="" class="h-6 w-6 md:h-8 md:w-8" />
				<span class="sr-only">Previous Testimonial</span>
			</button>
			<button on:click={() => emblaApi.scrollNext()}>
				<img src={ArrowRight} alt="" class="h-6 w-6 md:h-8 md:w-8" />
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
