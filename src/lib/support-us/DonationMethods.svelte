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

<section class="py-16 px-4">
	<h1 class="text-2xl font-bold font-serif">Andere Spenden Möglichkeiten</h1>
	<p class="text-xl mt-3">Wir freuen uns über alle Spenden! Danke!</p>
	<div class="mt-16">
		{#each possibilities as possibility}
			<div class="first:mt-0 mt-24 group">
				<div class="flex group-even:flex-row-reverse gap-x-4 items-center">
					<div class="flex-none w-40 h-40 bg-gray-300 rounded-full"></div>
					<div>
						<h3 class="text-xl">{possibility.title}</h3>
						<p class="mt-3">{possibility.description}</p>
					</div>
				</div>
				<Button class="group-odd:float-right" text="Email Now" color="black" />
			</div>
		{/each}
	</div>
</section>
