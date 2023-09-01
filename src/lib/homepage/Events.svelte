<script>
	import Button from '$lib/components/Button.svelte';
	import Calendar from './Calendar.svelte';
</script>

<section class="w-full bg-cover pt-16">
	<div class="px-5 md:px-16">
		<h1 class="text-3xl md:text-4xl font-bold font-serif">Unsere Events</h1>
	</div>
	<div class="md:flex flex-col-reverse md:mt-14">
		<div class="px-5 md:px-16 pb-14 md:mt-14">
			<div class="mt-4 md:flex gap-x-8 justify-between">
				<p class="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
				<p class="text-xl hidden md:block">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua ut enim ad.
				</p>
			</div>
			<Button class="mt-14" text="Follow us on Telegram" color="black" />
		</div>
		<Calendar />
	</div>
</section>
