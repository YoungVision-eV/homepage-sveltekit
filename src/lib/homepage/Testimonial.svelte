<script>
	import ArrowRight from '$lib/assets/Icons/Arrow-Right.svg';
	import ArrowLeft from '$lib/assets/Icons/Arrow-Left.svg';
	import LenaProfile from '$lib/assets/lena-testimonial-profile.jpeg';
</script>

<!-- TODO: add Background -->

<section class="w-full pt-24 pb-12 px-5">
	<h1 class="text-3xl font-bold font-serif">Von YoungVision Leuten</h1>
	<figure>
		<div class="w-full mt-3 flex justify-between items-center">
			<img src={ArrowLeft} alt="" class="w-6 h-6 -ml-3" />
			<img src={LenaProfile} alt="" class="w-24 h-24 rounded-full object-cover" />
			<img src={ArrowRight} alt="" class="w-6 h-6 -mr-3" />
		</div>

		<blockquote class="mt-2.5 leading-6">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad.
			</p>
		</blockquote>

		<figcaption class="mt-2 italic">Name, Age</figcaption>
	</figure>
</section>
