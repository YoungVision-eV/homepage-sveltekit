<script>
	import EventImage1 from '$lib/assets/projects-event-image-1.jpeg?enhanced';
	import EventImage2 from '$lib/assets/projects-event-image-2.jpeg?enhanced';
	import EventImage3 from '$lib/assets/projects-event-image-3.jpeg?enhanced';
	const events = [
		{
			title: 'Sommerveranstaltung',
			day: '24',
			month: 'August',
			text: 'Unsere jährliche Sommerveranstaltung ist für viele das Highlight des Jahres! Du darfst dich auf leckeres Essen, inspirierende Workshops, ganz viel Spielen, Lachen und ein liebevolles Miteinander freuen. ',
			image: EventImage1,
			for_all: true
		},
		{
			title: 'Silvester',
			day: '31',
			month: 'Dezember',
			text: 'Lass uns das vergangene Jahr ausklingen lassen und gemeinsam in das neue Jahr starten!',
			image: EventImage2,
			for_all: true
		},
		{
			title: 'Mitgliederversammlung',
			day: '25',
			month: 'August',
			text: 'Ob online oder in Person, bei der Mitgliederversammlung kommen wir zusammen und entscheiden gemeinsam über die Zukunft von YoungVision. Werde Mitglied und nutze deine Stimme!',
			image: EventImage3,
			for_all: false
		}
	];

	let for_all = true;
	let only_members = true;
</script>

<section class="relative px-4 pt-14 lg:px-20 lg:pt-24 mb-20">
	<enhanced:img
		src="$lib/assets/projects-bg-lg-3.jpg"
		alt=""
		class="absolute -left-0 -z-10 mt-32"
	/>
	<h2 class="font-serif text-2xl font-bold">Unsere jährlichen Veranstaltungen</h2>
	<p class="mt-5">
		Unsere jährlichen Veranstaltungen sind ein fester Bestandteil unseres YoungVision-Kalenders. Sie
		bieten eine entspannte Gelegenheit, zusammenzukommen, zu wachsen, Kontakte zu knüpfen und das
		Leben in vollen Zügen zu genießen. Hier erfährst du mehr über diese besonderen Anlässe, die
		unsere Gemeinschaft jedes Jahr aufs Neue bereichern und inspirieren.
	</p>
	<div class="mt-3 flex flex-row">
		<div class="flex items-center">
			<input class="h-7 w-7" type="checkbox" id="for-all" bind:checked={for_all} />
			<label class="ml-4" for="for-all">Für Alle</label>
		</div>
		<div class="ml-10 flex items-center lg:ml-28">
			<input class="h-7 w-7" type="checkbox" id="only-members" bind:checked={only_members} />
			<label class="ml-4" for="only-members">Nur Mitglieder</label>
		</div>
	</div>
	<ul
		class="flex flex-col items-center lg:mt-12 lg:grid lg:grid-cols-2 lg:place-items-center lg:gap-10"
	>
		{#each events as event}
			{#if (event.for_all && for_all) || (!event.for_all && only_members)}
				<li class="">
					<enhanced:img
						alt=""
						src={event.image}
						class="mt-12 max-h-64 w-full rounded-t-2xl object-cover lg:mt-4"
					/>
					<div
						class="flex rounded-b-2xl p-6 shadow-lg {event.for_all
							? 'bg-soft-yellow'
							: 'bg-light-green'}"
					>
						<div class="mt-4 flex flex-col items-center">
							<div class="font-serif text-5xl font-bold">{event.day}</div>
							<div>{event.month}</div>
						</div>
						<div class="ml-10">
							<h3 class="font-bold lg:text-xl">{event.title}</h3>
							<p class="mt-3">{event.text}</p>
							<p class="mt-3 inline-block rounded-full bg-white px-5">
								{event.for_all ? 'Für Alle' : 'Nur Mitglieder'}
							</p>
						</div>
					</div>
				</li>
			{/if}
		{/each}
	</ul>
</section>
