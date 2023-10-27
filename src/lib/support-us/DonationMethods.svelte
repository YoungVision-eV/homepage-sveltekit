<script>
	import Button from '$lib/components/Button.svelte';

	const possibilities = [
		{
			title: 'Partner werden',
			description: 'Du hast lust uns mit groesseren mengen Geld zu unterstützen?'
		},
		{
			title: 'Geld spenden',
			description: 'Einmalig oder wiederkehrende Spende.'
		},
		{
			title: 'Expertise Spenden',
			description: 'DU hast Lust dein Wissen und Erfahrung zu teilen? Gerne hier!'
		},
		{
			title: 'Sachspenden',
			description: 'Du hast Lust deine Dinge zu teilen? Gerne hier!'
		}
	];
</script>

<section class="py-16 px-4 md:px-20 md:py-24">
	<h1 class="text-2xl font-bold font-serif">Andere Spenden Möglichkeiten</h1>
	<p class="text-xl mt-3 md:mt-4">Wir freuen uns über alle Spenden! Danke!</p>
	<ul class="mt-20 hidden md:flex gap-x-16 items-stretch">
		{#each possibilities as possibility}
			<li class="flex flex-col justify-between items-center text-center">
				<div class="rounded-full w-56 h-56 bg-gray-300" />
				<h3 class="mt-4 text-4xl font-serif font-bold">{possibility.title}</h3>
				<p class="mt-4">{possibility.description}</p>
				<Button class="mt-8" text="Email Now" color="black" />
			</li>
		{/each}
	</ul>
	<ul class="mt-16 md:hidden">
		{#each possibilities as possibility}
			<li
				class="first:mt-0 mt-24 md:mt-0 md:first:mt-0 group md:flex flex-col justify-between items-center md:text-center"
			>
				<div class="flex group-even:flex-row-reverse gap-x-4 items-center">
					<div class="flex-none w-40 h-40 bg-gray-300 rounded-full" />
					<div>
						<h3 class="text-xl">{possibility.title}</h3>
						<p class="mt-3">{possibility.description}</p>
					</div>
				</div>
				<Button class="group-odd:float-right" text="Email Now" color="black" />
			</li>
		{/each}
	</ul>
	<div class="hidden md:flex mt-36 py-10 px-24 bg-yellow rounded-2xl w-full gap-x-28">
		<div class="w-56 h-56 bg-gray-300" />
		<div>
			<h3 class="font-serif font-bold text-4xl">Ansprechpartner</h3>
			<dl class="mt-8 grid grid-cols-2">
				<dt class="font-bold">Name</dt>
				<dd>Jakob Voigt</dd>

				<dt class="font-bold">Email</dt>
				<dd>
					<a class="text-gray-800 underline" href="mailto:jakob.voigt@youngvision.org"
						>jakob.voigt@youngvision.org</a
					>
				</dd>
			</dl>
			<Button class="mt-7" text="Email Now" color="black" />
		</div>
	</div>
</section>
