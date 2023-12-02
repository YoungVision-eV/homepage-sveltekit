<script lang="ts">
	import EmmaPortrait from '$lib/assets/emma-portrait.png?enhanced';
	import JakobPortrait from '$lib/assets/jakob-portait.jpeg?enhanced';
	import RebeccaPortrait from '$lib/assets/rebecca-portrait.jpeg?enhanced';
	import JonasPortrait from '$lib/assets/jonas-portrait.jpeg?enhanced';

	const members = [
		{
			name: 'Emma',
			job: 'Design, ÖA',
			image: EmmaPortrait
		},
		{
			name: 'Jakob',
			job: 'Finanzen, Events',
			image: JakobPortrait
		},
		{
			name: 'Rebecca',
			job: 'ÖA, Events',
			image: RebeccaPortrait
		},
		{
			name: 'Jonas',
			job: 'IT, Datenschutz',
			image: JonasPortrait
		}
	];
</script>

<section class="bg-light-green px-5 py-14 lg:px-20 lg:pb-36 lg:pt-20">
	<h1 class="font-serif text-3xl font-bold">Das Team</h1>
	<div class="mt-14 grid grid-cols-2 gap-x-5 gap-y-14 lg:grid-cols-4 lg:gap-x-24">
		{#each members as member}
			<div class="flex flex-col items-center">
				<enhanced:img
					src={member.image}
					alt={member.name}
					class="aspect-square h-auto w-full rounded-full bg-white object-cover object-center"
				/>
				<h2 class="mt-6 font-sans font-bold lg:mt-5 lg:text-xl">{member.name}</h2>
				<p class="lg:mt-3">{member.job}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	@media (min-width: 1024px) {
		section {
			background-color: transparent;
			background-image: url($lib/assets/background-team.png);
			background-size: cover;
		}
	}
</style>
