<script>
	import { slide } from 'svelte/transition';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';

	import Button from '$lib/components/Button.svelte';

	let showMore = false;

	const benefits = [
		'Du hast Lust uns mit größeren Mengen Geld zu unterstutzen?',
		'Einmalig oder wieder​kehrende Spende.',
		'Du hast Lust dein Wissen und Erfahrung zu teilen? Gerne hier!',
		'Du hast Lust deine Dinge zu teilen? Gerne hier!',
		'Du hast Lust unsere Projekte zu unterstützen?'
	];
</script>

<section data-testid="supporting-members" class="px-4 md:px-20 py-8 md:py-12 bg-light-green">
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
	<Disclosure data-testid="benefits">
		<DisclosurePanel>
			<div class="pt-16 pb-12 md:px-16" transition:slide>
				<h3 class="font-serif font-bold text-2xl">Vorteile</h3>
				<ul class="grid grid-cols-3 md:grid-cols-9 py-12 md:gap-y-14">
					{#each benefits as benefit, index}
						<li
							class={'benefit-item group items-center col-span-3' +
								// TODO: this will break if we have more than 5 benefits
								(index === 3 ? ' md:col-start-2' : '')}
						>
							<div
								class="group-odd:order-last md:group-odd:order-first flex flex-row flex-none group-odd:justify-end"
							>
								<div
									class="w-24 h-24 md:w-32 md:h-32 flex-none text-5xl font-bold font-serif bg-gray-300 md:bg-green-50 md:text-white rounded-full flex justify-center items-center"
								>
									{index + 1}
								</div>
							</div>
							<p class="ml-2 md:mx-10 text-sm text-justify md:text-xl col-span-2">{benefit}</p>
						</li>
					{/each}
				</ul>
				<div class="md:flex gap-x-5 md:text-xl">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua ut enim ad. T1
					</p>
					<p class="mt-4 md:mt-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua ut enim ad. T1
					</p>
				</div>
			</div>
		</DisclosurePanel>
		<DisclosureButton class="mt-12 md:mt-8 w-full flex flex-col justify-center items-center">
			<span class="text-sm">Show Benefits</span>
			<div>
				<svg
					class="mt-2"
					xmlns="http://www.w3.org/2000/svg"
					width="13"
					height="9"
					viewBox="0 0 13 9"
					fill="none"
				>
					{#if showMore}
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0 6.58449L1.51667 8.12085L6.5 3.0728L11.4833 8.12085L13 6.58449L6.5 7.05719e-05L0 6.58449Z"
							fill="#686B6F"
						/>
					{:else}
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M13 1.53636L11.4833 0L6.5 5.04805L1.51667 0L0 1.53636L6.5 8.12078L13 1.53636Z"
							fill="#686B6F"
						/>
					{/if}
				</svg>
			</div>
		</DisclosureButton>
	</Disclosure>

	<div class="mx-2 mt-2 w-full border-t border-gray-300" />
</section>

<style>
	.benefit-item {
		display: grid;
		grid-template-columns: subgrid;
	}
</style>
