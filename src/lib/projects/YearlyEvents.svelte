<script>
	import EventImage from '$lib/assets/projects-event-image.jpeg';
</script>

<section class="px-6 py-14">
	<h1 class="text-2xl font-serif font-bold">Our Yearly Events</h1>
	<p class="mt-5">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua ut enim ad. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.
	</p>
	<div class="mt-3 flex flex-row">
		<div class="flex-1 flex items-center">
			<input class="w-7 h-7" type="checkbox" id="for-all" />
			<label class="ml-4" for="for-all">Für Alle</label>
		</div>
		<div class="flex-1 flex items-center">
			<input class="w-7 h-7" type="checkbox" id="only-members" />
			<label class="ml-4" for="only-members">Nur Mitglieder</label>
		</div>
	</div>
	<section class="mt-12">
		<img src={EventImage} alt="" class="mt-12 rounded-t-2xl" />
		<div class="p-6 rounded-b-2xl bg-soft-yellow flex">
			<div class="flex flex-col justify-center items-center">
				<h1 class="text-5xl font-serif font-bold">24</h1>
				<h1>August</h1>
			</div>
			<div class="ml-10">
				<h1 class="font-bold">Sommer Gathering</h1>
				<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<p class="mt-3 px-5 inline-block rounded-full bg-white">Für Alle</p>
			</div>
		</div>
	</section>
</section>
