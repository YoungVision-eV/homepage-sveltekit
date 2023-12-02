<script>
	import Hero from '$lib/homepage/Hero.svelte';
	import ReadMore from '$lib/homepage/ReadMore.svelte';
	import Events from '$lib/homepage/Events.svelte';
	import Testimonial from '$lib/homepage/Testimonial.svelte';
	import Instagram from '$lib/homepage/Instagram.svelte';
</script>

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
