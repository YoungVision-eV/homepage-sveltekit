<script>
	import calendarCover from '$lib/assets/calendar-cover.jpeg';
</script>

<div class="w-full md:flex md:px-16">
	<div
		class="h-auto w-full md:relative md:h-[27rem] md:w-[42rem] md:rounded-l-2xl md:rounded-r-none"
	>
		<img
			src={calendarCover}
			alt="Leute sitzen am Tisch"
			class="h-full w-full rounded-t-2xl object-cover"
		/>
		<div class="absolute inset-y-0 right-[8.3rem] hidden flex-col justify-center gap-y-1 md:flex">
			<svg
				class="h-3.5 w-3.5 text-white"
				fill="currentColor"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="50" cy="50" r="50" />
			</svg>
			<svg
				class="h-3.5 w-3.5 text-soft-yellow"
				fill="currentColor"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="50" cy="50" r="50" />
			</svg>
			<svg
				class="h-3.5 w-3.5 text-soft-yellow"
				fill="currentColor"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="50" cy="50" r="50" />
			</svg>
		</div>
	</div>
	<!-- TODO: relative needed here for correct z-ordering, is there a better way? -->
	<div class="relative grow flex-col md:-ml-28 md:flex">
		<div
			class="flex grow items-center justify-between gap-x-12 py-3 pl-7 pr-6 md:-ml-4 md:rounded-2xl md:rounded-br-none md:bg-white"
		>
			<div class="flex-none text-center">
				<div class="font-serif text-5xl font-bold">24</div>
				<div>August</div>
			</div>
			<div class="flex-auto">
				<h2 class="line-clamp-2 text-xl font-bold">Our Next Event: YV Gathering</h2>
				<p class="text-justify leading-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
		</div>
		<div
			class="flex grow items-center justify-between gap-x-12 bg-soft-yellow py-3 pl-7 pr-6 text-dark-green"
		>
			<div class="flex-none text-center md:text-white">
				<div class="font-serif text-5xl font-bold">12</div>
				<div>Juni</div>
			</div>
			<div class="flex-auto">
				<h2 class="line-clamp-2 text-xl font-bold">Our Last Event: Playfulness Workshop</h2>
				<p class="text-justify leading-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
		</div>
		<div
			class="flex grow items-center justify-between gap-x-12 bg-soft-yellow py-3 pl-7 pr-6 text-dark-green"
		>
			<div class="flex-none text-center md:text-white">
				<div class="font-serif text-5xl font-bold">15</div>
				<div>Oktober</div>
			</div>
			<div class="flex-auto">
				<h2 class="line-clamp-2 text-xl font-bold">Workshop with our Partner: XX</h2>
				<p class="text-justify leading-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
		</div>
	</div>
</div>
