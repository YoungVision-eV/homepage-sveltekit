<script>
	import Button from '$lib/components/Button.svelte';
	import Calendar from './Calendar.svelte';
</script>

<section class="w-full bg-cover pb-10 pt-16">
	<div class="px-5 md:px-16">
		<h1 class="font-serif text-3xl font-bold md:text-4xl">Unsere Events</h1>
	</div>
	<div class="flex-col-reverse md:mt-14 md:flex">
		<div class="px-5 pb-14 md:mt-14 md:px-16">
			<div class="mt-4 justify-between gap-x-8 md:flex">
				<p class="text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
				<p class="hidden text-xl md:block">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua ut enim ad.
				</p>
			</div>
			<Button class="mx-auto mt-14 md:mx-0 md:mt-8" text="Follow us on Telegram" color="black" />
		</div>
		<Calendar />
	</div>
</section>
