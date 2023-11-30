<script>
	//Importing form hompage folder. Not sure if this is the way. Maybe Calender should be in lib/components/
	import Calendar from '$lib/homepage/Calendar.svelte';
</script>

<section class="relative mt-14">
	<div class="absolute -z-10 mt-16">
		<enhanced:img src="$lib/assets/projects-bg-lg-1.jpg" alt="" />
	</div>
	<div class="mb-10 px-4 lg:mb-16 lg:px-20">
		<h2 class="font-serif text-2xl font-bold">Our Next Events</h2>
		<p class="mt-3 lg:mt-6">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua.
		</p>
	</div>
	<div class="absolute -bottom-52 right-0 -z-20">
		<enhanced:img src="$lib/assets/projects-bg-lg-2.jpg" alt="" />
	</div>
	<Calendar />
</section>
