<script>
	import Hero from '$lib/homepage/Hero.svelte';
	import ReadMore from '$lib/homepage/ReadMore.svelte';
	import Events from '$lib/homepage/Events.svelte';
	import Testimonial from '$lib/homepage/Testimonial.svelte';
	import Instagram from '$lib/homepage/Instagram.svelte';
</script>

<svelte:head>
	<title>YoungVision e.V.</title>
	<meta
		name="description"
		content="YoungVision ist ein Verein für junge Menschen von jungen Menschen."
	/>
	<meta
		name="keywords"
		content="YoungVision, YoungVision e.V., Persönliche Entwicklung, Junge Menschen, Jugendliche, Spiritualität, Verein, Erwachsen werden"
	/>
	<meta name="author" content="YoungVision e.V." />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<Hero />
<ReadMore />
<Events />
<div id="testimonials-and-instagram">
	<Testimonial />
	<Instagram />
</div>

<style>
	#testimonials-and-instagram {
		background-position: bottom -200px right 95%;
		background-repeat: no-repeat;
		background-image: url($lib/assets/background-instagram.jpeg);
	}
	@media (min-width: 1024px) {
		#testimonials-and-instagram {
			background-position: bottom -100px right -500px;
		}
	}
</style>
