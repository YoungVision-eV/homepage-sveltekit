<script>
	import readMoreBackground from '$lib/assets/background-read-more.jpeg';
	import readMoreImage from '$lib/assets/read-more-image.jpeg';
	import Button from './components/Button.svelte';
</script>

<div class="w-full bg-cover" style="background-image: url({readMoreBackground});">
	<div class="mx-auto lg:flex max-w-7xl justify-between items-center p-x6 pb-24 pt-10 lg:px-8">
		<div class="basis-5/12">
			<img
				class="rounded-2xl h-[36rem] object-cover"
				src={readMoreImage}
				alt="People sit on the ground hugging and embracing the person in the middle"
			/>
		</div>
		<div class="basis-7/12 ml-36">
			<h1 class="text-white text-5xl font-bold">Wir sind Young Vision e.V.</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua ut enim ad.
			</p>
			<Button text="Read More" />
		</div>
	</div>
</div>
