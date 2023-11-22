<script lang="ts">
	import calendarCover from '$lib/assets/calendar-cover.jpeg';
	import pastEvent from '$lib/assets/calendar-past-event.jpeg';
	import thirdEvent from '$lib/assets/calendar-third-event.jpeg';
	import clsx from 'clsx';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	// TODO: should this be the event itself instead of the index?
	// Perhaps we should also just use embla
	let selectedEvent = 0;

	const location = tweened(0, { duration: 300, easing: cubicOut });
	$: location.set(selectedEvent);

	const events = [
		{
			title: 'YV Gathering',
			date: new Date(2024, 7, 24),
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: {
				src: calendarCover
			}
		},
		{
			title: 'YV Gathering',
			date: new Date(2023, 5, 12),
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: {
				src: pastEvent
			}
		},
		{
			title: 'YV Gathering',
			date: new Date(2022, 9, 15),
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: {
				src: thirdEvent
			}
		}
	];
</script>

<div class="grid w-full grid-cols-4 md:grid-cols-9 md:px-20">
	<div
		class="col-start-1 col-end-5 row-end-2 md:relative md:col-end-6 md:row-start-1 md:row-end-4 md:rounded-l-2xl md:rounded-r-none"
	>
		<div class="relative h-[22rem] w-full md:h-full">
			{#each events as event, index}
				<img
					loading="lazy"
					src={event.image.src}
					alt="Leute sitzen am Tisch"
					class={clsx(
						'absolute left-0 top-0 h-full w-full rounded-t-2xl object-cover transition-opacity duration-300 md:rounded-l-2xl md:rounded-tr-none',
						index === selectedEvent ? 'opacity-100' : 'opacity-5'
					)}
				/>
			{/each}
		</div>
		<div
			class="hidden md:absolute md:inset-y-0 md:right-[27%] md:flex md:flex-col md:justify-center"
		>
			<div class="relative">
				<!-- HACK: this transformation calculation feels bad
 								The calculation is: 100% for the height of the marker plus 0.25rem for the gap
				-->
				<svg
					class="absolute h-5 w-5 text-white"
					style="top: 0%; transform: translateY(calc({$location * 100}% + {$location * 0.25}rem))"
					fill="currentColor"
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="50" cy="50" r="50" />
				</svg>
				<div class="h-full md:flex md:flex-col md:justify-center md:gap-y-1">
					{#each events as _event, index}
						<button on:click={() => (selectedEvent = index)}>
							<svg
								class="h-5 w-5 text-yellow text-opacity-60"
								fill="currentColor"
								viewBox="0 0 100 100"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="50" cy="50" r="50" />
							</svg>
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<ul
		class="relative z-10 col-span-4 row-span-3 -mt-4 grid grid-cols-subgrid grid-rows-subgrid
		md:col-span-5 md:col-start-5 md:row-start-1 md:mt-0"
	>
		<div
			class={clsx(
				'absolute z-20 h-1/3 w-full bg-background md:-ml-8 md:w-[calc(100%+2rem)] md:rounded-l-2xl',
				selectedEvent === 0 ? 'rounded-t-2xl' : ''
			)}
			style="top: 0%; transform: translateY({$location * 100}%)"
		/>
		{#each events as event, index}
			<li
				class={clsx(
					'col-span-4 grid grid-cols-subgrid bg-soft-yellow transition-colors md:col-span-5 md:bg-yellow md:bg-opacity-60',
					index === selectedEvent ? 'text-black' : 'text-dark-green',
					index === 0 ? 'rounded-t-2xl md:rounded-tl-none' : ''
				)}
			>
				<button
					class="col-span-4 grid grid-cols-subgrid items-center py-7 text-left md:col-span-5"
					on:click={() => (selectedEvent = index)}
					disabled={selectedEvent === index}
				>
					<div
						class={clsx(
							'z-30 flex flex-col items-center justify-center',
							index === selectedEvent ? '' : 'md:text-dark-green'
						)}
					>
						<span class="font-serif text-5xl font-bold">{event.date.getDate()}</span>
						<span>{event.date.toLocaleString('de-DE', { month: 'long' })}</span>
						<p class="text-sm italic text-dark-green md:text-base">
							{event.date <= new Date() ? 'Past Event' : 'Upcoming'}
						</p>
					</div>
					<div class="z-30 col-span-3 px-4 md:col-span-4 md:px-10 md:py-3">
						<h3 class="font-bold md:text-xl">
							<span class="hidden md:inline">Our Next Event: </span>{event.title}
						</h3>
						<p>{event.description}</p>
					</div>
				</button>
			</li>
		{/each}
	</ul>
</div>

<div class="hidden w-full md:px-16">
	<div
		class="h-auto w-full md:relative md:h-[27rem] md:w-[42rem] md:rounded-l-2xl md:rounded-r-none"
	></div>
	<div
		id="calendar"
		class="relative -mt-4 grid grid-cols-4 gap-x-4 rounded-t-2xl md:-ml-36 md:mt-0 md:grid-cols-5 md:rounded-l-2xl"
	>
		{#each events as event, index}
			<div
				class={clsx(
					'col-span-4 grid h-36 grid-cols-subgrid items-center md:col-span-5',
					index === 0
						? 'rounded-l-2xl bg-background text-black md:rounded-r-2xl'
						: 'bg-yellow bg-opacity-60 text-dark-green '
				)}
			>
				<div
					class={clsx(
						'col-span-1 flex flex-col items-center justify-center md:col-start-2',
						index === 0 ? '' : 'md:text-white'
					)}
				>
					<span class="font-serif text-5xl font-bold">{event.date.getDate()}</span>
					<span>{event.date.toLocaleString('de-DE', { month: 'long' })} <br /></span>
					<p class="text-sm italic text-dark-green">
						{event.date <= new Date() ? 'Past Event' : 'Upcoming'}
					</p>
				</div>
				<div class="col-span-3">
					<h3 class="font-bold">{event.title}</h3>
					<p>{event.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	@media (min-width: 768px) {
		div#calendar {
			grid-template-columns: 1.5rem repeat(4, minmax(0, 1fr));
		}
	}
</style>
