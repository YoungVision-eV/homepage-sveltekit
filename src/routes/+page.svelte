<script>
	import Navbar from '$lib/homepage/Navbar.svelte';
	import Hero from '$lib/homepage/Hero.svelte';
	import ReadMore from '$lib/homepage/ReadMore.svelte';
	import Events from '$lib/homepage/Events.svelte';
	import Testimonial from '$lib/homepage/Testimonial.svelte';
	import Instagram from '$lib/homepage/Instagram.svelte';
	import Footer from '$lib/homepage/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Navbar />
<main>
	<Hero data={data.hero} />
	<ReadMore data={data.readMore} />
	<Events data={data.events} />
	<Testimonial />
	<Instagram />
	<div class="h-40 w-full bg-light-green" />
	<Footer />
</main>
