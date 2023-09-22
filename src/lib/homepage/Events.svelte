<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Calendar from './Calendar.svelte';

	export let data: {
		title: string;
		leftSubtitle: string;
		rightSubtitle: string;
		callToAction: string;
	};
</script>

<section class="w-full bg-cover pt-16">
	<div class="px-5 md:px-16">
		<h1 class="text-3xl md:text-4xl font-bold font-serif">{data.title}</h1>
	</div>
	<div class="md:flex flex-col-reverse md:mt-14">
		<div class="px-5 md:px-16 pb-14 md:mt-14">
			<div class="mt-4 md:flex gap-x-8 justify-between">
				<p class="text-xl">{data.leftSubtitle}</p>
				<p class="text-xl hidden md:block">{data.rightSubtitle}</p>
			</div>
			<Button class="mt-14" text={data.callToAction} color="black" />
		</div>
		<Calendar />
	</div>
</section>
