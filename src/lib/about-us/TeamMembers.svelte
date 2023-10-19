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

<section class="py-14 md:pt-20 md:pb-36 px-5 md:px-20 bg-light-green">
	<h1 class="text-3xl font-bold font-serif">Team Members</h1>
	<div class="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-5 md:gap-x-24 gap-y-14">
		{#each members as member}
			<div class="flex flex-col items-center">
				<img
					src={member.image}
					alt={member.name}
					class="w-full h-auto aspect-square rounded-full bg-white object-cover object-center"
				/>
				<h2 class="md:text-xl mt-6 md:mt-5 font-bold font-sans">{member.name}</h2>
				<p class="md:mt-3">{member.job}</p>
			</div>
		{/each}
	</div>
</section>
