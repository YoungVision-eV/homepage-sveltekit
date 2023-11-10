<script>
	import { slide } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
	import ReadMoreExpandButton from '$lib/components/ReadMoreExpandButton.svelte';

	let showMore = false;

	const benefits = [
		'Du hast Lust uns mit größeren Mengen Geld zu unterstutzen?',
		'Einmalig oder wiederkehrende Spende.',
		'Du hast Lust dein Wissen und Erfahrung zu teilen? Gerne hier!',
		'Du hast Lust deine Dinge zu teilen? Gerne hier!',
		'Du hast Lust unsere Projekte zu unterstützen?'
	];
</script>

<section class="px-4 md:px-20 py-8 md:py-12 bg-light-green">
	<h1 class="text-2xl md:text-4xl font-serif font-bold">Werde Fördermitglied</h1>
	<h2 class="mt-3 md:mt-2 text-xl md:text-2xl font-serif">
		Die chance uns zu unterstutzen und mehr von uns zu erfahren!
	</h2>
	<p class="mt-8 md:mt-10 md:text-xl">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
	</p>
	<Button class="mt-8 md:mt-6" color="black" text="Sign Up Now" />
	{#if showMore}
		<div data-testid="benefits" class="pt-16 pb-12" transition:slide>
			<h3 class="font-serif font-bold text-2xl">Vorteile</h3>
			<div class="flex flex-col py-12">
				{#each benefits as benefit, index}
					<ul class="flex odd:flex-row-reverse items-center">
						<li
							class="w-24 h-24 text-5xl font-bold font-serif flex-none bg-gray-300 rounded-full flex justify-center items-center"
						>
							{index + 1}
						</li>
						<p class="ml-2 text-sm">{benefit}</p>
					</ul>
				{/each}
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad. T1
			</p>
			<p class="mt-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad. T1
			</p>
		</div>
	{/if}
	<ReadMoreExpandButton text="Show Benefits" class="mt-12 md:mt-8" bind:showMore />
</section>
