<script>
	import { slide, fade } from 'svelte/transition';
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@rgossiaux/svelte-headlessui';

	import Button from '$lib/components/Button.svelte';
	import clsx from 'clsx';

	const benefits = [
		'Du hast Lust uns mit größeren Mengen Geld zu unterstutzen?',
		'Einmalig oder wieder​kehrende Spende.',
		'Du hast Lust dein Wissen und Erfahrung zu teilen? Gerne hier!',
		'Du hast Lust deine Dinge zu teilen? Gerne hier!',
		'Du hast Lust unsere Projekte zu unterstützen?'
	];
</script>

<section data-testid="supporting-members" class="bg-light-green px-4 py-8 lg:px-20 lg:py-12">
	<h1 class="font-serif text-2xl font-bold lg:text-4xl">Werde Fördermitglied</h1>
	<h2 class="mt-3 font-serif text-xl lg:mt-2 lg:text-2xl">
		Die chance uns zu unterstutzen und mehr von uns zu erfahren!
	</h2>
	<p class="mt-8 lg:mt-10 lg:text-xl">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
	</p>
	<Button class="mt-8 lg:mt-6" color="black" text="Sign Up Now" />
	<Disclosure data-testid="benefits" let:open>
		{#if open}
			<div transition:slide>
				<DisclosurePanel class="pb-12 pt-16 lg:px-16" static>
					<h3 class="font-serif text-2xl font-bold">Vorteile</h3>
					<ul class="grid grid-cols-3 py-12 lg:grid-cols-9 lg:gap-y-14">
						{#each benefits as benefit, index}
							<li
								class={clsx('group col-span-3 grid grid-cols-subgrid items-center', {
									// TODO: this will break if we have more than 5 benefits
									'lg:col-start-2': index === 3
								})}
							>
								<div
									class="flex flex-none flex-row group-odd:order-last group-odd:justify-end lg:group-odd:order-first"
								>
									<div
										class="flex h-24 w-24 flex-none items-center justify-center rounded-full bg-gray-300 font-serif text-5xl font-bold lg:h-32 lg:w-32 lg:bg-green-50 lg:text-white"
									>
										{index + 1}
									</div>
								</div>
								<p class="col-span-2 ml-2 text-justify text-sm lg:mx-10 lg:text-xl">{benefit}</p>
							</li>
						{/each}
					</ul>
					<div class="gap-x-5 lg:flex lg:text-xl">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua ut enim ad. T1
						</p>
						<p class="mt-4 lg:mt-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua ut enim ad. T1
						</p>
					</div>
				</DisclosurePanel>
			</div>
		{/if}
		<DisclosureButton class="mt-12 flex w-full flex-col items-center justify-center lg:mt-8">
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
					{#if open}
						<path
							transition:fade
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0 6.58449L1.51667 8.12085L6.5 3.0728L11.4833 8.12085L13 6.58449L6.5 7.05719e-05L0 6.58449Z"
							fill="#686B6F"
						/>
					{:else}
						<path
							transition:fade
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
	section {
		background-image: url($lib/assets/background-supporting-member.png);
		background-position: top center;
	}
	.benefit-item {
		display: grid;
		grid-template-columns: subgrid;
	}

	@media (min-width: 1024px) {
		section {
			background-size: cover;
		}
	}
</style>
