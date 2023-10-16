<script>
	import Button from '$lib/components/Button.svelte';
</script>

<section class="w-full bg-yellow px-5 md:pl-20 md:pr-40 py-10 md:pb-14 md:flex gap-x-28 items-end">
	<div class="hidden md:block flex-shrink-0 w-60 h-60 bg-white" />
	<div>
		<h1 class="text-2xl md:text-4xl font-bold font-serif text-center md:text-left">
			Try this with your friends!
		</h1>
		<p class="text-sm mt-6 md:mt-9">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua ut enim ad.
		</p>
		<Button class="mt-14 md:mt-7 mx-auto md:mx-0" color="black" text="Call to action" />
	</div>
</section>
