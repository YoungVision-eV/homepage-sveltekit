<script>
	import ReadMoreExpandButton from '$lib/components/ReadMoreExpandButton.svelte';

	const partners = [1, 2, 3, 4, 5];
	const honours = new Array(12).fill({ name: 'Nachname, Vorname', place: 'Ort' });
</script>

<div class="hidden bg-light-green px-20 py-14 md:block">
	<section>
		<h1 class="font-serif text-4xl font-bold">Unsere Partner</h1>
		<ul class="mt-14 flex justify-between">
			{#each partners as partner}
				<li>
					<img
						class="h-40 w-40 rounded-full"
						src={'https://placehold.co/400/D9D9D9/434343?text=Partner ' + partner}
						alt="Partner"
					/>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h1 class="mt-32 font-serif text-4xl font-bold">YoungVision Dankes-Tafel</h1>
		<p class="mt-5 text-xl">
			Hier möchten wir speziell Menschen danken die Fördermitglieder sind oder eine größere Summe
			gespendet haben.
		</p>
		<ul id="honours" class="mt-20 grid w-full justify-between gap-y-14 text-xl">
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
