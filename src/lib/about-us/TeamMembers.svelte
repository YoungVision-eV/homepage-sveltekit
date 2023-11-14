<script lang="ts">
	import placeholder from '$lib/assets/Placeholder.svg';
	const members = [
		{
			name: 'Jonas',
			job: 'Developer',
			image: placeholder
		},
		{
			name: 'Emma',
			job: 'Designer',
			image: placeholder
		},
		{
			name: 'Rebecca',
			job: 'Events',
			image: placeholder
		},
		{
			name: 'Jakob',
			job: 'Marketing',
			image: placeholder
		},
		{
			name: 'Noa',
			job: 'Communication',
			image: placeholder
		},
		{
			name: 'Charly',
			job: 'Finances',
			image: placeholder
		}
	];
</script>

<section class="bg-light-green px-5 py-14 md:px-20 md:pb-36 md:pt-20">
	<h1 class="font-serif text-3xl font-bold">Team Members</h1>
	<div class="mt-14 grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-4 md:gap-x-24">
		{#each members as member}
			<div class="flex flex-col items-center">
				<img
					src={member.image}
					alt={member.name}
					class="aspect-square h-auto w-full rounded-full bg-white object-cover object-center"
				/>
				<h2 class="mt-6 font-sans font-bold md:mt-5 md:text-xl">{member.name}</h2>
				<p class="md:mt-3">{member.job}</p>
			</div>
		{/each}
	</div>
</section>
