<script>
	import Button from '$lib/components/Button.svelte';
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Tab,
		TabGroup,
		TabList,
		TabPanel,
		TabPanels
	} from '@rgossiaux/svelte-headlessui';

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
	<TabGroup class="mt-20 hidden md:block">
		<TabList class="flex gap-x-16 items-stretch">
			<Tab class="hidden" />
			{#each possibilities as possibility}
				<Tab class="flex flex-col justify-between items-center text-center" let:selected>
					<div
						class={'rounded-full w-56 h-56 bg-gray-300' +
							(selected ? ' border-4 border-black' : '')}
					/>
					<h3 class="mt-4 text-4xl font-serif font-bold">{possibility.title}</h3>
					<p class="mt-4">{possibility.description}</p>
					<Button class="mt-8" text="Email Now" color="black" />
				</Tab>
			{/each}
		</TabList>
		<TabPanels>
			<!-- TODO: is there a better way than this hidden tab? -->
			<TabPanel class="hidden" />
			<TabPanel class="pt-40 pb-16">
				<h3 class="text-5xl font-serif font-bold text-center">Partner werden</h3>
			</TabPanel>
			<TabPanel class="pt-40 pb-16">
				<h3 class="text-5xl font-serif font-bold text-center">Geld spenden</h3>
			</TabPanel>
			<TabPanel class="pt-40 pb-16 text-2xl">
				<h3 class="text-5xl font-serif font-bold text-center">Expertise Spenden</h3>
				<div class="mt-16 flex items-center justify-between gap-x-28">
					<img class="bg-gray-300 h-[38rem] w-[28rem] flex-none" alt="Expertise Spenden" />
					<div>
						<p>Du hast Lust YoungVision mit deiner Expertise voranzubringen?</p>
						<p class="mt-12">Wir suchen Unterstützung für folgende Bereiche:</p>
						<ul class="list-disc list-inside">
							<li>Supervision</li>
							<li>Kassenprüfer</li>
							<li>Steuerberatung</li>
							<li>Therapeutische Begleitung bei Events</li>
						</ul>
						<p class="mt-12">
							Wir freuen uns auf deine Kontaktaufnahme zu <a href="mailto:kontakt@youngvision.org"
								>kontakt@youngvision.org</a
							>
							<Button class="mt-8" text="Email Now" color="black" />
						</p>
					</div>
				</div>
			</TabPanel>
			<TabPanel class="pt-40 pb-16 text-2xl">
				<h3 class="text-5xl font-serif font-bold text-center">Sachspenden</h3>
				<div class="mt-16 flex items-center justify-between gap-x-28">
					<img class="bg-gray-300 h-[38rem] w-[28rem] flex-none" alt="Sachspenden" />
					<div>
						<p>
							Wenn du uns eine Sachspende schicken willst, dann schreib Name kurz ein Email: Email
						</p>
						<Button class="mt-8" text="Email Now" color="black" />
						<p>Oder bring deine Sachspende einfach zum nächsten Event in Rosow mit:).</p>
						<p>Das wird gerade benötigt</p>
						<ul class="list-disc list-inside">
							<li>Laminiergerät</li>
							<li>Zeltboden</li>
							<li>Tipis / Pavillons</li>
							<li>Verschiedener Bürobedarf</li>
							<li>Papierschneider</li>
							<li>Haltbare Lebensmittel</li>
						</ul>
					</div>
				</div>
			</TabPanel>
		</TabPanels>
	</TabGroup>
	<ul class="mt-16 md:hidden">
		{#each possibilities as possibility}
			<li class="first:mt-0 mt-24 group">
				<Disclosure>
					<DisclosureButton class="flex group-even:flex-row-reverse gap-x-4 items-center text-left">
						<div class="flex-none w-40 h-40 bg-gray-300 rounded-full" />
						<div>
							<h3 class="text-xl">{possibility.title}</h3>
							<p class="mt-3">{possibility.description}</p>
						</div>
					</DisclosureButton>
					<DisclosurePanel class="pt-4 pb-8">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua ut enim ad. T1
						</p>
						<p class="mt-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua ut enim ad. T1
						</p>
					</DisclosurePanel>
				</Disclosure>
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
