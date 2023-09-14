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
		}
	];
</script>

<section class="py-14 px-5 bg-cover">
	<h1 class="text-3xl font-bold font-serif">Team Members</h1>
	<div class="mt-14 grid grid-cols-2 gap-x-5 gap-y-14">
		{#each members as member}
			<div class="flex flex-col items-center">
				<img
					src={member.image}
					alt={member.name}
					class="w-full h-auto aspect-square rounded-full bg-white object-cover object-center"
				/>
				<h2 class="mt-6 font-bold font-sans">{member.name}</h2>
				<p>{member.job}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		background-image: url($lib/assets/about-us-members-background.jpeg);
	}
</style>
