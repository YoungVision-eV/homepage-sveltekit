<script lang="ts">
	import firstPost from '$lib/assets/instagram/first-post.png?enhanced';
	import secondPost from '$lib/assets/instagram/second-post.png?enhanced';
	import thirdPost from '$lib/assets/instagram/third-post.png?enhanced';
	import fourthPost from '$lib/assets/instagram/fourth-post.jpeg?enhanced';
	import fifthPost from '$lib/assets/instagram/fifth-post.png?enhanced';
	import ArrowLeft from '$lib/icons/ArrowLeft.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';

	// TODO: get from Instagram API

	const images = [
		{ src: firstPost, alt: 'First Post', link: 'https://www.instagram.com/youngvision_ev/' },
		{ src: secondPost, alt: 'Second Post', link: 'https://www.instagram.com/youngvision_ev/' },
		{ src: thirdPost, alt: 'Third Post', link: 'https://www.instagram.com/youngvision_ev/' },
		{ src: fourthPost, alt: 'Fourth Post', link: 'https://www.instagram.com/youngvision_ev/' },
		{ src: fifthPost, alt: 'Fifth Post', link: 'https://www.instagram.com/youngvision_ev/' }
	];
</script>

<section class="w-full pb-32 pt-12 lg:px-6">
	<h1 class="mx-5 font-serif text-3xl font-bold text-dark-green lg:mx-12 lg:text-black">
		<a href="https://www.instagram.com/youngvision_ev/" target="_blank" rel="noopener">
			Folge uns auf Instagram
		</a>
	</h1>
	<div class="relative mt-11">
		<div class="flex max-w-full gap-x-2 overflow-hidden lg:mx-14">
			{#each images as image}
				<a href={image.link} target="_blank" rel="noopener">
					<div class="shrink-0">
						<enhanced:img class="h-52 w-52 object-cover" src={image.src} alt={image.alt} />
					</div>
				</a>
			{/each}
		</div>
		<!-- 
			disable pointer events so the div does not prevent clicking on the image links
			but we want it on top of the images to show the buttons above the images
		-->
		<div class="pointer-events-none absolute top-20 flex w-full items-center justify-between">
			<button class="pointer-events-auto p-3">
				<div class="h-6 w-6">
					<ArrowLeft />
				</div>
				<span class="sr-only">Show previous image</span>
			</button>
			<button class="pointer-events-auto p-3">
				<div class="h-6 w-6">
					<ArrowRight />
				</div>
				<span class="sr-only">Show next image</span>
			</button>
		</div>
	</div>
</section>
