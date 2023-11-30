<script>
	import Background from '$lib/assets/background-what-we-do.png?enhanced';
	import ReadMoreExpandButton from '$lib/components/ReadMoreExpandButton.svelte';

	const exercises = [
		{
			title: 'Triaden',
			description:
				'Eine Triade ist eine Übung der authentischen Kommunikation, in der jede*r erleben kann, andere wirklich zu hören und selbst gehört zu werden. Sie schafft Raum für Selbsterkenntnis und unterstützt den Aufbau authentischer Verbindungen.'
		},
		{
			title: 'Kuscheln',
			description:
				'Körperlicher Kontakt ist einer von vielen Ausdrücke von zwischenmenschlicher Verbindung. Bei unseren Veranstaltungen entsteht durch den sicheren Raum ganz natürlich eine Kuschelatmosphäre. Aber auch hier gilt: alles darf, nichts muss! Wir schreiben Konsent ganz groß und daher wird dein “nein” nicht nur respektiert sondern ist auch willkommen.'
		},
		{
			title: 'Meditation',
			description:
				'Schon eine kurze Meditation zu Anfang jeder Runde macht einen riesen Unterschied! Sie schafft inneren Raum für eigene Empfinfungen, Tiefe in der Wahrnehmung und damit die Basis unserer gemeinsamen Arbeit'
		},
		{
			title: 'Tanzen',
			description:
				'Hier geht es nicht um Schritte oder Choreografie, sondern um das Loslassen und deinen Selbstausdruck. Dies ist dein Raum, dich selbst und deinen Körper zu spüren und dich einfach mal fallen zu lassen. '
		},
		{
			title: 'Sharing',
			description:
				'In unseren Sharingrunden hat jede*r die Möglichkeit eigene Erfahrungen und Gefühle mit der Gruppe zu teilen. So können unheimlich tiefe, befreiende und verbindende Momente entstehen. '
		}
	];
</script>

<section class="relative w-full px-5 pb-16 pt-24 lg:px-20">
	<enhanced:img
		class="absolute left-[-6rem] top-[-9rem] -z-10 h-[18rem] w-auto lg:left-[-12rem] lg:top-[-31rem]
		lg:h-auto lg:w-[50em]"
		alt="Flowers"
		src={Background}
	/>
	<h2 class="text-center font-serif text-3xl font-bold lg:text-5xl">Was wir tun</h2>
	<h3 class="mt-14 font-serif text-2xl font-bold lg:mt-20 lg:text-4xl">
		Was dich bei unseren Veranstaltungen erwartet
	</h3>
	<div class="mt-6 grid grid-cols-1 gap-y-3 lg:mt-10 lg:grid-cols-2 lg:gap-6">
		<p class="font-sans">
			Unsere Veranstaltungen sind das Herzstück dessen, was YoungVision so besonders macht. Wir
			möchten dir einen Vorgeschmack geben auf das, was dich erwartet, und hoffen, dass du genauso
			begeistert von unseren Angeboten sein wirst wie wir es sind.
		</p>
		<p class="font-sans">
			Im Fokus stehen die Selbsterkundung- und Reflektion und das Erfahren von Verbindung. Die
			folgenden Aktivitäten erwarten dich bei all unseren Veranstaltungen und mehr.
		</p>
	</div>
	<div
		id="exercises"
		class="mt-16 grid auto-rows-[0] grid-cols-[1fr] grid-rows-2 gap-12 overflow-hidden lg:mt-40 lg:grid-cols-3 lg:grid-rows-1"
	>
		{#each exercises as exercise}
			<div class="exercise">
				<div class="px-20 lg:px-0">
					<div class="aspect-square h-auto w-full rounded-full bg-light-green" />
				</div>
				<h3 class="mt-5 text-center font-sans text-xl lg:mt-8">{exercise.title}</h3>
				<p class="mt-3 font-sans text-sm lg:mt-8">{exercise.description}</p>
			</div>
		{/each}
	</div>
	<ReadMoreExpandButton class="mt-16 lg:mt-20" />
</section>

<style>
	.exercise:nth-of-type(1n + 3) {
		display: none;
	}

	@media (min-width: 1024px) {
		.exercise:nth-of-type(3) {
			display: block;
		}
	}
</style>
