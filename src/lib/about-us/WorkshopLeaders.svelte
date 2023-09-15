<script lang="ts">
	export let title: string;
	const leaders = [
		{
			name: 'Matthias',
			job: 'JOB FOR YV'
		},
		{
			name: 'Luna',
			job: 'JOB FOR YV'
		},
		{
			name: 'Matthias',
			job: 'JOB FOR YV'
		},
		{
			name: 'Luna',
			job: 'JOB FOR YV'
		}
	];
</script>

<section class="px-5 py-16">
	<h1 class="text-2xl font-bold font-serif">{title}</h1>
	<p class="mt-6">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua ut enim ad.
	</p>
	<div class="mt-10">
		{#each leaders as leader}
			<div class="mt-6 flex even:flex-row-reverse justify-between items-center">
				<div class="bg-gray-300 rounded-full aspect-square h-52 w-auto" />
				<div class="text-center">
					<h3 class=" text-xl">{leader.name}</h3>
					<p class="mt-3 text-sm">{leader.job}</p>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-12 w-full flex flex-col justify-center">
		<button class="text-sm">See More</button>
		<div class="mt-6 w-full border-t border-gray-300" />
	</div>
</section>
