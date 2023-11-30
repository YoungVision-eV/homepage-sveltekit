<script>
	import FooterBackground from '$lib/assets/members-footer-background.jpeg';
	import Testimonial from '$lib/homepage/Testimonial.svelte';
	import Hero from '$lib/members/Hero.svelte';
	import MemberBenefits from '$lib/members/MemberBenefits.svelte';
</script>

<Hero />
<MemberBenefits />
<div class="lg:py-24">
	<Testimonial />
</div>
<img
	class="h-[35rem] w-full object-cover lg:h-[60rem]"
	alt="YoungVision Menschen sitzen am Lagerfeuer"
	src={FooterBackground}
/>
