<script>
	import Button from '$lib/components/Button.svelte';
	import Calendar from './Calendar.svelte';
</script>

<section class="w-full bg-cover pt-16">
	<div class="px-5 pb-14">
		<h1 class="text-3xl font-bold font-serif">Unsere Events</h1>
		<p class="mt-4 text-xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua.
		</p>
		<Button class="mt-14" text="Follow us on Telegram" color="black" />
	</div>
	<Calendar />
</section>
