<script>
	import Button from '$lib/components/Button.svelte';
	import Calendar from './Calendar.svelte';
</script>

<!-- We can't set the padding on the section here because the calendar is full-width on mobile -->
<section class="w-full bg-cover pt-16 lg:pb-10">
	<div class="px-5 lg:px-20">
		<h1 class="font-serif text-3xl font-bold lg:text-4xl">Unsere Events</h1>
	</div>
	<div class="mt-6 lg:mt-14">
		<Calendar />
		<div class="mt-10 px-5 lg:mt-12 lg:px-20">
			<div class="justify-between gap-x-10 lg:flex">
				<p class="text-justify">
					Unsere Veranstaltungen sind Orte der Inspiration, Heilung und Verbundenheit. Hier kannst
					du dich selbst erkunden, dich entfalten und Gleichgesinnte treffen, die deine Reise
					begleiten.
				</p>
				<p class="hidden text-justify lg:block">
					Als Mitglied kannst du auch eigene Events ins Leben rufen und deine Leidenschaften teilen.
					Egal, ob du einen Workshop, ein Treffen oder ein Projekt planst - wir sind für dich da, um
					deine Vision Wirklichkeit werden zu lassen.
				</p>
			</div>
			<Button class="mx-auto mt-14 lg:mx-0 lg:mt-12" text="Follow us on Telegram" color="dark" />
		</div>
	</div>
</section>
