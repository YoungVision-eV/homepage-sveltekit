<script>
	import heroImage from '$lib/assets/hero-image.jpeg';
	import heroBackground from '$lib/assets/background-hero.jpeg';
	import Button from './components/Button.svelte';
</script>

<div class="w-full bg-cover" style="background-image: url({heroBackground});">
	<div class="mx-auto lg:flex max-w-7xl justify-between items-center p-x6 pb-24 pt-10 lg:px-8">
		<div class="basis-7/12">
			<h1 class="text-5xl font-bold font-sans">Schön, dass du hier bist!</h1>
			<p class="text-xl mt-12">
				Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
				Elit sunt amet fugiat veniam occaecat fugiat aliqua.
			</p>
			<Button text="Call To Action" inverted={true} />
		</div>
		<div class="basis-5/12">
			<img
				class="rounded-2xl h-[36rem] object-cover"
				src={heroImage}
				alt="People sit on the ground hugging and embracing the person in the middle"
			/>
		</div>
	</div>
</div>
