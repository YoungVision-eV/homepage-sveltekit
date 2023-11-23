<script>
	import EventImage1 from '$lib/assets/projects-event-image-1.jpeg';
	import EventImage2 from '$lib/assets/projects-event-image-2.jpeg';
	import EventImage3 from '$lib/assets/projects-event-image-3.jpeg';
	const events = [
		{
			title: 'Summer Gathering',
			day: '24',
			month: 'August',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: EventImage1,
			for_all: true
		},
		{
			title: 'Winter Gathering',
			day: '11',
			month: 'Januar',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: EventImage2,
			for_all: true
		},
		{
			title: 'Mitgliederversammlung',
			day: '25',
			month: 'August',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: EventImage3,
			for_all: false
		}
	];

	let for_all = true;
	let only_members = true;
</script>

<section class="px-6 pt-14 lg:px-20 lg:pt-24">
	<h2 class="font-serif text-2xl font-bold">Our Yearly Events</h2>
	<p class="mt-5">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
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
	<ul class="mt-12 lg:grid lg:grid-cols-2 lg:gap-10">
		{#each events as event}
			{#if (event.for_all && for_all) || (!event.for_all && only_members)}
				<li>
					<img
						src={event.image}
						alt=""
						class="mt-12 rounded-t-2xl lg:h-64 lg:w-full lg:object-cover"
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
