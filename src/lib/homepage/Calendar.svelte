<script lang="ts">
	import calendarCover from '$lib/assets/calendar-cover.jpeg';

	export let nextEvent: {
		title: string;
		description: string;
		date: Date;
	};
	export let lastEvent: {
		title: string;
		description: string;
		date: Date;
	};
	export let nextPartnerEvent: {
		title: string;
		description: string;
		date: Date;
	};
</script>

<div class="w-full md:px-16 md:flex">
	<div
		class="w-full md:relative h-auto md:w-[42rem] md:h-[27rem] md:rounded-r-none md:rounded-l-2xl"
	>
		<img
			src={calendarCover}
			alt="Leute sitzen am Tisch"
			class="object-cover h-full w-full rounded-t-2xl"
		/>
		<div class="hidden md:flex flex-col gap-y-1 justify-center absolute right-[8.3rem] inset-y-0">
			<svg
				class="w-3.5 h-3.5 text-white"
				fill="currentColor"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="50" cy="50" r="50" />
			</svg>
			<svg
				class="w-3.5 h-3.5 text-soft-yellow"
				fill="currentColor"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="50" cy="50" r="50" />
			</svg>
			<svg
				class="w-3.5 h-3.5 text-soft-yellow"
				fill="currentColor"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="50" cy="50" r="50" />
			</svg>
		</div>
	</div>
	<!-- TODO: relative needed here for correct z-ordering, is there a better way? -->
	<div class="md:flex relative flex-col grow md:-ml-28">
		<div
			class="py-3 pl-7 pr-6 flex items-center justify-between grow gap-x-12 md:bg-white md:rounded-2xl md:rounded-br-none md:-ml-4"
		>
			<div class="text-center flex-none">
				<div class="text-5xl font-bold font-serif">{nextEvent.date.getDate()}</div>
				<div>{nextEvent.date.toLocaleString('de', { month: 'long' })}</div>
			</div>
			<div class="flex-auto">
				<h2 class="text-xl font-bold line-clamp-2">Our Next Event: {nextEvent.title}</h2>
				<p class="leading-6 text-justify">
					{nextEvent.description}
				</p>
			</div>
		</div>
		<div
			class="py-3 pl-7 pr-6 flex items-center justify-between grow gap-x-12 bg-soft-yellow text-dark-green"
		>
			<div class="text-center flex-none md:text-white">
				<div class="text-5xl font-bold font-serif">{lastEvent.date.getDate()}</div>
				<div>{lastEvent.date.toLocaleString('de', { month: 'long' })}</div>
			</div>
			<div class="flex-auto">
				<h2 class="text-xl font-bold line-clamp-2">Our Last Event: {lastEvent.title}</h2>
				<p class="leading-6 text-justify">{lastEvent.description}</p>
			</div>
		</div>
		<div
			class="py-3 pl-7 pr-6 flex items-center justify-between grow gap-x-12 bg-soft-yellow text-dark-green"
		>
			<div class="text-center flex-none md:text-white">
				<div class="text-5xl font-bold font-serif">{nextPartnerEvent.date.getDate()}</div>
				<div>{nextPartnerEvent.date.toLocaleString('de', { month: 'long' })}</div>
			</div>
			<div class="flex-auto">
				<h2 class="text-xl font-bold line-clamp-2">
					Workshop with our Partner: {nextPartnerEvent.title}
				</h2>
				<p class="leading-6 text-justify">{nextPartnerEvent.description}</p>
			</div>
		</div>
	</div>
</div>
