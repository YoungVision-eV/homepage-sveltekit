<script>
	import ArrowLeft from '$lib/assets/Icons/Arrow-Left.svg';

	import Button from '$lib/components/Button.svelte';
	import CalendarIcon from '$lib/icons/CalendarIcon.svelte';
	import HandWithMoney from '$lib/icons/HandWithMoney.svelte';
	import LocationPin from '$lib/icons/LocationPin.svelte';
	import People from '$lib/icons/People.svelte';

	import KompostToiletteIcon from './KompostToiletteIcon.svelte';
	import LagerIcon from './LagerIcon.svelte';
	import PlattformIcon from './PlattformIcon.svelte';
</script>

<svelte:head>
	<title>YoungVision e.V. - Bauwoche</title>
	<meta name="description" content="YoungVision e.V. - Bauwoche" />
</svelte:head>

<enhanced:img
	class="h-[27rem] w-full object-cover"
	src="$lib/assets/bauwoche-hero.jpeg"
	alt="Gathering 2024"
/>
<div class="pr-4 lg:pr-20">
	<div class="flex h-12 w-full items-center rounded-br-xl bg-yellow-500 bg-opacity-60 lg:text-xl">
		<a href="/events" class="p-3">
			<img src={ArrowLeft} alt="" class="h-6 w-6" />
			<span class="sr-only">Zur vorherigen Seite</span>
		</a>
		Get Involved
	</div>
</div>

<div class="px-4 pb-24 pt-12">
	<h1 class="font-serif text-4xl font-bold">Bauwoche</h1>
	<h2 class="mt-6 font-serif text-2xl font-bold">Wichtige Infos</h2>
	<div class="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 px-4">
		<div class="flex flex-col items-center">
			<div class="flex h-40 w-40 items-center justify-center rounded-full bg-yellow-700 shadow-xl">
				<LocationPin class="h-24 w-24" />
			</div>
			<h3 class="mt-8 font-serif text-xl font-bold">Wo</h3>
			<a class="mt-3 underline" href="https://maps.app.goo.gl/kak1RX8pJwZGnFFD7">
				<address class="not-italic">Am bhf 4, 166307 Mescherin</address>
			</a>
		</div>

		<div class="flex flex-col items-center">
			<div class="flex h-40 w-40 items-center justify-center rounded-full bg-yellow-700 shadow-xl">
				<People class="h-24 w-24" />
			</div>
			<h3 class="mt-8 font-serif text-xl font-bold">Wer</h3>
			<p class="mt-3">20 junge Menschen</p>
		</div>
		<div class="flex flex-col items-center">
			<div class="flex h-40 w-40 items-center justify-center rounded-full bg-yellow-700 shadow-xl">
				<CalendarIcon class="h-24 w-24" />
			</div>
			<h3 class="mt-8 font-serif text-xl font-bold">Wann</h3>
			<p class="mt-3">01.04. - 07.04.2024</p>
		</div>
		<div class="flex flex-col items-center">
			<div class="flex h-40 w-40 items-center justify-center rounded-full bg-yellow-700 shadow-xl">
				<HandWithMoney class="h-24 w-24" />
			</div>
			<h3 class="mt-8 font-serif text-xl font-bold">Kosten</h3>
			<p class="mt-3">Verpflegungskosten sind 50 Euro.</p>
		</div>
	</div>
	<div class="mt-20">
		<h2 class="font-serif text-2xl font-bold">Brief an Euch</h2>
		<p class="mt-10">Hallo du lieber Mensch🧚🏻‍♂️✨,</p>
		<p class="mt-4">
			vom <b>1. bis 7. April</b> laden wir dich ein zu einer Woche voller
			<b>Gemeinschaft, Kreativität und gemeinsamen Schaffens.</b> Zusammen mit etwa
			<b>20 jungen Menschen</b> werden wir unseren <b>Vereinssitz</b> für die kommende Veranstaltungssaison
			fit machen.
		</p>
		<p class="mt-4">
			In der Woche werden wir eine <b>Komposttoilette</b> bauen, das <b>YV Lager</b> einrichten und
			eine <b>Plattform</b>
			für unsere Veranstaltungszelt bauen. Wir werden täglich mit einer <b>Morgenrunde</b> beginnen,
			um uns zu verbinden und den Tag gemeinsam zu starten. Abends haben wir Zeit für
			<b>Spiele, Lagerfeuer und Massagen.</b>
			Du hast Lust einen Programmpunkt anzubieten? Dann schreib uns gerne eine Email an
			<a class="text-gray-800 underline" href="mailto:jakob.voigt@youngvision.org"
				>jakob.voigt@youngvision.org</a
			>.
		</p>
		<p class="mt-4">
			Mit deinem Betrag von 50€ können wir einen Teil deiner Verpflegungskosten decken, die
			Übernachtung ist für dich kostenfrei. Wenn du dir den Beitrag gerade nicht leisten kannst,
			schreibe uns richtig gerne eine Email.
		</p>
		<p class="mt-4">
			Um die Bauwoche bestmöglich vorzubereiten und uns schon vorab kennenzulernen, laden wir dich
			herzlich zu unserem Online-Treffen am 13. März 2024 von 17:30 bis 19:00 Uhr ein (optional).
		</p>
		<p class="mt-4">
			Bis ganz Bald💜,<br />
			Euer YV Team
		</p>

		<Button
			text="Anmelden"
			color="dark"
			class="mt-12 lg:mt-14"
			href="https://coda.io/form/YoungVision-Bauwoche-2024_dfqXbo6awYm"
		/>
	</div>

	<div class="mt-32">
		<h2 class="font-serif text-2xl font-bold">Unsere Bauprojekte</h2>

		<div class="mt-14 flex flex-col items-center gap-y-12">
			<div>
				<KompostToiletteIcon />
				<h3 class="mt-4 text-xl font-bold">Komposttoilette</h3>
			</div>
			<div>
				<LagerIcon />
				<h3 class="mt-4 text-xl font-bold">Lager</h3>
			</div>
			<div>
				<PlattformIcon />
				<h3 class="mt-4 text-xl font-bold">Plattform</h3>
			</div>
		</div>
	</div>

	<div class="mt-24">
		<h2 class="font-serif text-2xl font-bold">Wochenplan</h2>

		<Button
			text="Wochenplan runterladen"
			href="/Bauwoche-Wochenplan.png"
			download="YoungVision Bauwoche 2024 - Wochenplan"
			color="dark"
			class="mt-8"
		/>
	</div>

	<div class="mt-24 flex flex-col items-center">
		<div class="h-64 w-64 rounded-full">
			<enhanced:img
				class="h-full w-full rounded-full object-cover object-center"
				src="$lib/assets/jakob-und-jonas.png"
				alt="Jakob & Jonas"
			/>
		</div>
		<p class="mt-6 text-xl font-bold">Wir freuen uns auf dich!</p>
		<p class="mt-4">Links: Jonas Roth (Handwerk)</p>
		<p>Rechts: Jakob Voigt (Organisation)</p>

		<Button text="Anmelden" color="dark" class="mt-12 lg:mt-14" />
	</div>
</div>
