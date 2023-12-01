<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section class="flex h-[44rem] flex-col justify-end bg-cover bg-center pb-10 lg:pb-6">
	<div class="flex flex-col items-center bg-black bg-opacity-60 px-4 py-12 text-white">
		<h1 class="font-serif text-4xl font-bold lg:text-5xl">Werde Mitglied</h1>
		<p class="mt-6 max-w-[35rem] lg:mt-7 lg:text-xl">
			Du willst Teil der YoungVision Community werden, dich selbst und andere tiefer erfahren und
			echte Verbindungen aufbauen? Dann bist du hier richtig.
		</p>
		<Button
			class="mt-12 lg:mt-4"
			text="Mitglied werden"
			href="https://easyverein.com/public/yv/applicationform/7213"
			color="black"
		/>
	</div>
</section>

<style>
	section {
		background-image: url($lib/assets/member-hero-background.jpeg);
	}
</style>
