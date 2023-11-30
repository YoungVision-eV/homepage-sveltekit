<script>
	import MissionIcon from './icons/MissionIcon.svelte';
	import ValuesIcon from './icons/ValuesIcon.svelte';
	import VisionIcon from './icons/VisionIcon.svelte';
</script>

<section class="mb-28 w-full px-5 pt-14 text-center">
	<h1 class="text-center font-serif text-3xl font-bold">Über YoungVision -</h1>
	<h1 class="mt-3 text-center font-serif text-3xl font-bold">Wer wir sind</h1>
	<div class="gap-x-16 lg:mt-16 lg:grid lg:grid-cols-3 lg:px-48">
		<div>
			<div
				class="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-yellow p-5 lg:h-44 lg:w-44 lg:p-8"
			>
				<VisionIcon />
			</div>
			<h2 class="mt-3 font-serif text-2xl font-bold lg:mt-10 lg:text-4xl">Vision</h2>
			<p class="mt-3 text-justify lg:mt-5">
				Eine Gesellschafft, in der jeder Mensch sich besser kennerlernen kann, achtsam mit sich und
				seinem Umfeld ist und authentisch kommuniziert. Wir setzen uns für eine Welt ein, in der
				junge Menschen gestärkt sind und ihre Themen ernst genommen werden.
			</p>
		</div>
		<div>
			<div
				class="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-light-green p-5 lg:h-44 lg:w-44 lg:p-8"
			>
				<MissionIcon />
			</div>
			<h2 class="mt-3 font-serif text-2xl font-bold lg:mt-10 lg:text-4xl">Mission</h2>
			<p class="mt-3 text-justify lg:mt-5">
				Wir schaffen sichere Räume, in denen junge Menschen authentische Beziehungen und
				Gemeinschaft erfahren. Dadurch werden sie in ihrer Heilung und Entwicklung unterstützt.
			</p>
		</div>
		<div>
			<div
				class="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-pink p-5 lg:h-44 lg:w-44 lg:p-8"
			>
				<ValuesIcon />
			</div>
			<h2 class="mt-3 font-serif text-2xl font-bold lg:mt-10 lg:text-4xl">Werte</h2>
			<p class="mt-3 text-justify lg:mt-5">
				Unsere Werte sind Achtsamkeit, Empathie, Authentizität und Spielen und Ausprobieren. Mit
				diesen Werten schaffen wir eine unterstützende Umgebung für junge Menschen.
			</p>
		</div>
	</div>
</section>
