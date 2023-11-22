<script>
	import Button from '$lib/components/Button.svelte';
	import Calendar from './Calendar.svelte';
</script>

<!-- We can't set the padding on the section here because the calendar is full-width on mobile -->
<section class="w-full bg-cover pt-16 md:pb-10">
	<div class="px-5 md:px-20">
		<h1 class="font-serif text-3xl font-bold md:text-4xl">Unsere Events</h1>
	</div>
	<div class="mt-6 md:mt-14">
		<Calendar />
		<div class="mt-10 px-5 md:mt-12 md:px-20">
			<div class="justify-between gap-x-10 md:flex">
				<p class="text-justify">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
				<p class="hidden text-justify md:block">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua ut enim ad.
				</p>
			</div>
			<Button class="mx-auto mt-14 md:mx-0 md:mt-12" text="Follow us on Telegram" color="black" />
		</div>
	</div>
</section>
