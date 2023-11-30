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
	import clsx from 'clsx';

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

<section class="px-4 py-16 lg:px-20 lg:py-24">
	<h1 class="font-serif text-2xl font-bold">Andere Spenden Möglichkeiten</h1>
	<p class="mt-3 text-xl lg:mt-4">Wir freuen uns über alle Spenden! Danke!</p>
	<TabGroup class="mt-20 hidden lg:block">
		<TabList class="flex items-stretch gap-x-16">
			<Tab class="hidden" />
			{#each possibilities as possibility}
				<Tab class="flex flex-col items-center justify-between text-center" let:selected>
					<div
						class={clsx('h-56 w-56 rounded-full bg-gray-300', selected && 'border-4 border-black')}
					/>
					<h3 class="mt-4 font-serif text-4xl font-bold">{possibility.title}</h3>
					<p class="mt-4">{possibility.description}</p>
					<Button class="mt-8" text="Email Now" color="dark" />
				</Tab>
			{/each}
		</TabList>
		<TabPanels>
			<!-- TODO: is there a better way than this hidden tab? -->
			<TabPanel class="hidden" />
			<TabPanel class="pb-16 pt-40">
				<h3 class="text-center font-serif text-5xl font-bold">Partner werden</h3>
			</TabPanel>
			<TabPanel class="pb-16 pt-40">
				<h3 class="text-center font-serif text-5xl font-bold">Geld spenden</h3>
			</TabPanel>
			<TabPanel class="pb-16 pt-40 text-2xl">
				<h3 class="text-center font-serif text-5xl font-bold">Expertise Spenden</h3>
				<div class="mt-16 flex items-center justify-between gap-x-28">
					<img class="h-[38rem] w-[28rem] flex-none bg-gray-300" alt="Expertise Spenden" />
					<div>
						<p>Du hast Lust YoungVision mit deiner Expertise voranzubringen?</p>
						<p class="mt-12">Wir suchen Unterstützung für folgende Bereiche:</p>
						<ul class="list-inside list-disc">
							<li>Supervision</li>
							<li>Kassenprüfer</li>
							<li>Steuerberatung</li>
							<li>Therapeutische Begleitung bei Events</li>
						</ul>
						<p class="mt-12">
							Wir freuen uns auf deine Kontaktaufnahme zu <a href="mailto:kontakt@youngvision.org"
								>kontakt@youngvision.org</a
							>
						</p>
						<Button class="mt-8" text="Email Now" color="dark" />
					</div>
				</div>
			</TabPanel>
			<TabPanel class="pb-16 pt-40 text-2xl">
				<h3 class="text-center font-serif text-5xl font-bold">Sachspenden</h3>
				<div class="mt-16 flex items-center justify-between gap-x-28">
					<img class="h-[38rem] w-[28rem] flex-none bg-gray-300" alt="Sachspenden" />
					<div>
						<p>
							Wenn du uns eine Sachspende schicken willst, dann schreib Name kurz ein Email: Email
						</p>
						<Button class="mt-8" text="Email Now" color="dark" />
						<p>Oder bring deine Sachspende einfach zum nächsten Event in Rosow mit:).</p>
						<p>Das wird gerade benötigt</p>
						<ul class="list-inside list-disc">
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
	<ul class="mt-16 lg:hidden">
		{#each possibilities as possibility}
			<li class="group mt-24 first:mt-0">
				<Disclosure>
					<DisclosureButton class="flex items-center gap-x-4 text-left group-even:flex-row-reverse">
						<div class="h-40 w-40 flex-none rounded-full bg-gray-300" />
						<div>
							<h3 class="text-xl">{possibility.title}</h3>
							<p class="mt-3">{possibility.description}</p>
						</div>
					</DisclosureButton>
					<DisclosurePanel class="pb-8 pt-4">
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
				<Button class="group-odd:float-right" text="Email Now" color="dark" />
			</li>
		{/each}
	</ul>
	<div class="mt-36 hidden w-full gap-x-28 rounded-2xl bg-yellow px-24 py-10 lg:flex">
		<div class="h-56 w-56 bg-gray-300" />
		<div>
			<h3 class="font-serif text-4xl font-bold">Ansprechpartner</h3>
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
			<Button class="mt-7" text="Email Now" color="dark" />
		</div>
	</div>
</section>
