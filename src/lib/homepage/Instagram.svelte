<script lang="ts">
	// TODO: get from Instagram API
	import FirstImage from '$lib/assets/instagram/first.jpeg';
	import SecondImage from '$lib/assets/instagram/second.jpeg';

	const images = [
		{ src: FirstImage, alt: 'First Image' },
		{ src: SecondImage, alt: 'Second Image' }
	];
</script>

<section class="w-full pt-12 pb-20">
	<h1 class="mx-3 text-3xl font-bold font-serif text-dark-green">Folge uns auf Instagram</h1>
	<div class="mt-11 flex gap-x-2 min-w-full">
		{#each images as image}
			<img class="w-48 h-48 shrink-0 object-cover" src={image.src} alt={image.alt} />
		{/each}
	</div>
</section>
