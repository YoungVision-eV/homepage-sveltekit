<script>
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import ChevronUp from '$lib/icons/ChevronUp.svelte';
	import ChevronDown from '$lib/icons/ChevronDown.svelte';

	const {
		elements: { root, content, trigger },
		states: { open }
	} = createCollapsible();
</script>

<section class="mb-28 px-4 lg:px-20">
	<div
		class="w-full items-center rounded-2xl bg-green-700 px-6 pb-10 pt-8 shadow-lg lg:flex lg:h-[30rem] lg:p-0 lg:pb-16 lg:pt-10"
	>
		<h2 class="font-serif text-2xl font-bold lg:hidden">YoungVision's Entstehung</h2>
		<div class="flex-none">
			<enhanced:img
				src="$lib/assets/luna-about-us-history.jpeg"
				alt=""
				class="mt-7 h-96 w-full rounded-2xl object-cover lg:mt-0 lg:h-[30rem] lg:w-[29rem] lg:rounded-r-none"
			/>
		</div>

		<div use:melt={$root} class="rounded-2xl bg-green-700 py-4 lg:px-24">
			<h2 class="hidden font-serif text-3xl font-bold lg:block">YoungVision's Entstehung</h2>
			<p class="mt-4 lg:mt-6">
				YoungVision wurde 2013 auf dem Celebrate Life Festival YoungVision gegründet, inspiriert von
				den Ideen und Werten von
				<a class="text-blue-700 hover:underline" href="https://thomashuebl.com/">Thomas Hübl</a>.
				Seitdem hat sich YoungVision stetig weiterentwickelt und ist zu einer engagierten
				Gemeinschaft gewachsen.
			</p>
			<p class="mt-4">
				Eine herausragende Persönlichkeit in der Entwicklung des Vereins war
				<a class="text-blue-700 hover:underline" href="https://lunainkontakt.de/"
					>Luna Garcia Fernandez</a
				>, die mit unermüdlicher Energie, Leidenschaft und Hingabe nicht nur jährlich eine große
				Sommerveranstaltung organisierte, sondern auch die Trainingsgruppen leitete.
			</p>
			{#if $open}
				<div class="mt-4" use:melt={$content} transition:slide>
					<p>
						Im Jahr 2023 hat sich mit einer demokratischen Organisationsstruktur und einem neuen
						Vorstand der Fokus des Vereins verändert. YoungVision strebt nun danach, noch stärker zu
						einer Gemeinschaft zu werden, die von ihren Mitgliedern aktiv mitgestaltet werden kann.
					</p>
				</div>
			{/if}
			<div class="mt-5 flex w-full flex-col items-center justify-center lg:mt-6">
				<button use:melt={$trigger} class="flex items-center">
					Mehr lesen
					<div class="h-10 w-10 p-2">
						{#if $open}
							<ChevronUp />
						{:else}
							<ChevronDown />
						{/if}
					</div>
				</button>

				<div class="mx-2 mt-2 w-full border-t border-green-200" />
			</div>
		</div>
	</div>
</section>
