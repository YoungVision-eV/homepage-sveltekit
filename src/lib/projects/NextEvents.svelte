<script>
	//Importing form hompage folder. Not sure if this is the way. Maybe Calender should be in lib/components/
	import Calendar from '$lib/homepage/Calendar.svelte';
</script>

<section class="relative mt-14">
	<div class="absolute -z-10 mt-16">
		<enhanced:img src="$lib/assets/projects-bg-lg-1.jpg" alt="" />
	</div>
	<div class="mb-10 px-4 lg:mb-16 lg:px-20">
		<h2 class="font-serif text-2xl font-bold">Unsere nächsten Veranstaltungen</h2>
		<p class="mt-3 lg:mt-6">
			Trau dich! Wir wissen, es ist nicht so leicht, an Orte zu kommen, wo du niemanden kennst. Aber
			auch, wenn du bisher noch keinen Kontakt mit YoungVision hattest, bist du ganz herzlich
			eingeladen, zu kommen wie du bist. Du kannst dir sicher sein, wir fangen dich auf und halten
			den Raum für dich und deinen Prozess.
		</p>
	</div>
	<div class="absolute -bottom-52 right-0 -z-20">
		<enhanced:img src="$lib/assets/projects-bg-lg-2.jpg" alt="" />
	</div>
	<Calendar />
</section>
