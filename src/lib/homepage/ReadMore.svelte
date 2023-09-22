<script lang="ts">
	import readMoreBackground from '$lib/assets/background-read-more.jpeg';
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

<section
	class="w-full md:flex flex-row justify-between items-center gap-x-40 bg-cover pt-12 pb-16 md:px-16"
	style="background-image: url({readMoreBackground});"
>
	<img
		src={data.image.url}
		alt={data.image.alt}
		loading="lazy"
		class="hidden md:block h-[24rem] object-cover rounded-2xl"
	/>
	<div class="flex flex-col items-center md:items-start">
		<h1 class="text-white text-3xl md:text-4xl font-bold font-serif">{data.title}</h1>
		<p class="mt-4 md:mt-5 text-xl text-center md:text-left mx-5 md:mx-0 leading-8">
			{data.subtitle}
		</p>
		<Button class="mt-14 md:mt-20" text={data.callToAction} color="white" />
	</div>
</section>
