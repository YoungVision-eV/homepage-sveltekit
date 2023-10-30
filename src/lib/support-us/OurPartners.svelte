<script>
	import ReadMoreExpandButton from '$lib/components/ReadMoreExpandButton.svelte';

	const partners = [1, 2, 3, 4, 5];
	const honours = new Array(12).fill({ name: 'Nachname, Vorname', place: 'Ort' });
</script>

<div class="hidden md:block bg-light-green px-20 py-14">
	<section>
		<h1 class="text-4xl font-serif font-bold">Unsere Partner</h1>
		<ul class="flex justify-between mt-14">
			{#each partners as partner}
				<li>
					<img
						class="rounded-full w-40 h-40"
						src={'https://placehold.co/400/D9D9D9/434343?text=Partner ' + partner}
						alt="Partner"
					/>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h1 class="mt-32 font-serif font-bold text-4xl">YoungVision Dankes-Tafel</h1>
		<p class="mt-5 text-xl">
			Hier möchten wir speziell Menschen danken die Fördermitglieder sind oder eine größere Summe
			gespendet haben.
		</p>
		<ul id="honours" class="mt-20 grid text-xl w-full gap-y-14 justify-between">
			{#each honours as honour}
				<li>
					<h3 class="font-bold">{honour.name}</h3>
					<p>{honour.place}</p>
				</li>
			{/each}
		</ul>
		<ReadMoreExpandButton class="mt-14" />
	</section>
</div>

<style>
	ul#honours {
		grid-template-columns: repeat(4, auto);
	}
</style>
