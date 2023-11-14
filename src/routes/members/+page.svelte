<script>
	import FooterBackground from '$lib/assets/members-footer-background.jpeg';
	import Testimonial from '$lib/homepage/Testimonial.svelte';
	import Hero from '$lib/members/Hero.svelte';
	import MemberBenefits from '$lib/members/MemberBenefits.svelte';
</script>

<Hero />
<MemberBenefits />
<Testimonial />
<img
	class="h-[35rem] w-full object-cover"
	alt="YoungVision Menschen sitzen am Lagerfeuer"
	src={FooterBackground}
/>
<footer class="h-60 bg-dark-green" />
