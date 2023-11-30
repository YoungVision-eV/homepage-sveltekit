<script lang="ts">
	import placeholder from '$lib/assets/Placeholder.svg';
	const members = [
		{
			name: 'Emma',
			job: 'Design, ÖA',
			image: placeholder
		},
		{
			name: 'Jakob',
			job: 'Finanzen, Events',
			image: placeholder
		},
		{
			name: 'Rebecca',
			job: 'ÖA, Events',
			image: placeholder
		},
		{
			name: 'Jonas',
			job: 'IT, Datenschutz',
			image: placeholder
		}
	];
</script>

<section class="bg-light-green px-5 py-14 lg:px-20 lg:pb-36 lg:pt-20">
	<h1 class="font-serif text-3xl font-bold">Das Team</h1>
	<div class="mt-14 grid grid-cols-2 gap-x-5 gap-y-14 lg:grid-cols-4 lg:gap-x-24">
		{#each members as member}
			<div class="flex flex-col items-center">
				<img
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
