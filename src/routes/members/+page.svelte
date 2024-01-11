<script>
	import CampfireAvif from '$lib/assets/members/members-footer-background.83e514e1.avif';
	import CampfireAvif2x from '$lib/assets/members/members-footer-background.516645a1.avif';
	import CampfireWebp from '$lib/assets/members/members-footer-background.9b90b9e7.webp';
	import CampfireWebp2x from '$lib/assets/members/members-footer-background.c107c79b.webp';
	import CampfireJpg from '$lib/assets/members/members-footer-background.f9a97a37.jpg';
	import CampfireJpg2x from '$lib/assets/members/members-footer-background.2e6fc9b7.jpg';
	import CampfireBase from '$lib/assets/members/members-footer-background.f9a97a37.jpg';

	import Testimonial from '$lib/homepage/Testimonial.svelte';
	import Hero from '$lib/members/Hero.svelte';
	import MemberBenefits from '$lib/members/MemberBenefits.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let { testimonials } = data;
</script>

<svelte:head>
	<title>YoungVision e.V. - Mitglied werden</title>
	<meta name="description" content="YoungVision e.V. - Mitglied werden" />
</svelte:head>

<Hero />
<MemberBenefits />
<div class="lg:py-24">
	<Testimonial {testimonials} />
</div>
<picture data-svelte-h="svelte-ywgkb1">
	<source srcset="{CampfireAvif} 1x, {CampfireAvif2x} 2x" type="image/avif" />
	<source srcset="{CampfireWebp} 1x, {CampfireWebp2x} 2x" type="image/webp" />
	<source srcset="{CampfireJpg} 1x, {CampfireJpg2x} 2x" type="image/jpeg" />
	<img
		class="h-[35rem] w-full object-cover lg:h-[60rem]"
		alt="YoungVision Menschen sitzen am Lagerfeuer"
		src={CampfireBase}
		width="4096"
		height="3072"
	/>
</picture>
