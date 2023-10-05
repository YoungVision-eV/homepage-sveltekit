<script lang="ts">
	import ArrowRight from '$lib/assets/Icons/Arrow-Right.svg';
	import ArrowLeft from '$lib/assets/Icons/Arrow-Left.svg';

	export let testimonials: {
		quote: string;
		author: {
			name: string;
			age: number;
			location: string;
		};
		image: { url: string; alt: string };
	}[] = [];
</script>

<!-- TODO: add Background -->
<!-- TODO: iterate through testimonials -->
<!-- TODO: make interactive -->

<section class="relative w-full pt-24 pb-12 px-5 md:px-16">
	<h1 class="text-3xl font-bold font-serif">Von YoungVision Leuten</h1>
	<div class="mt-3 md:mt-16 md:flex gap-x-28 justify-between items-center md:items-center">
		<div class="w-full md:mt-0 flex justify-center items-center">
			<img src={ArrowLeft} alt="" class="w-6 h-6 absolute left-2 md:left-8" />
			<img src={ArrowRight} alt="" class="w-6 h-6 absolute right-2 md:right-8" />
			<img
				src={testimonials[0].image.url}
				alt=""
				class="w-24 h-24 md:w-96 md:h-96 rounded-full object-cover"
			/>
		</div>

		<div class="md:pb-4">
			<blockquote class="mt-2.5 leading-6 md:text-xl">
				<p>{testimonials[0].quote}</p>
			</blockquote>

			<p class="mt-2 md:mt-8 italic">
				{testimonials[0].author.name}, {testimonials[0].author.age}, {testimonials[0].author
					.location}
			</p>
		</div>
	</div>
</section>
