<script>
	import ArrowRight from '$lib/assets/Icons/Arrow-Right.svg';
	import ArrowLeft from '$lib/assets/Icons/Arrow-Left.svg';
	import LenaProfile from '$lib/assets/lena-testimonial-profile.jpeg';
</script>

<!-- TODO: add Background -->

<section class="relative w-full pt-24 pb-12 px-5 md:px-16">
	<h1 class="text-3xl font-bold font-serif">Von YoungVision Leuten</h1>
	<div class="mt-3 md:mt-16 md:flex gap-x-28 justify-between items-center md:items-center">
		<div class="w-full md:mt-0 flex justify-center items-center">
			<img src={ArrowLeft} alt="" class="w-6 h-6 absolute left-2 md:left-8" />
			<img src={ArrowRight} alt="" class="w-6 h-6 absolute right-2 md:right-8" />
			<img src={LenaProfile} alt="" class="w-24 h-24 md:w-96 md:h-96 rounded-full object-cover" />
		</div>

		<div class="md:pb-4">
			<blockquote class="mt-2.5 leading-6 md:text-xl">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua ut enim ad.
				</p>
				<p class="hidden md:block mt-8">
					Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
				</p>
			</blockquote>

			<p class="mt-2 md:mt-8 italic">Name, Age</p>
		</div>
	</div>
</section>
