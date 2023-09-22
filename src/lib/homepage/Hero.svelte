<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	export let data: {
		title: string;
		subtitle: string;
		callToAction: string;
		image: {
			url: string;
			alt: string;
		};
	};
</script>

<section class="w-full bg-cover">
	<div class="px-5 pb-16 pt-14 md:px-16 md:grid grid-cols-2 gap-x-20 items-center">
		<div class="mx-6 md:mx-0 h-96 md:h-[36rem]">
			<img
				class="rounded-2xl h-full w-auto object-cover"
				src={data.image.url}
				alt={data.image.alt}
			/>
		</div>
		<div class="mt-14 md:mt-0 order-first">
			<h1 class="text-3xl md:text-5xl font-bold font-serif">{data.title}</h1>
			<!-- TODO: allow multiple paragraphs -->
			<p class="text-xl mt-8 md:mt-14">{data.subtitle}</p>
			<Button class="mx-auto md:mx-0 md:mt-10" text={data.callToAction} color="black" />
		</div>
	</div>
</section>

<style>
	section {
		background-image: url($lib/assets/background-hero-landscape.jpeg);
	}
	@media (min-width: 768px) {
		section {
			background-image: url($lib/assets/background-hero.jpeg);
		}
	}
</style>
