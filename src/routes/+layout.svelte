<script>
	import { melt } from '@melt-ui/svelte';
	import newsletterSignup from '$lib/stores/newsletterSignup';
	import Navbar from '$lib/homepage/Navbar.svelte';
	import '../app.postcss';
	import NewsletterSignupDialog from '$lib/components/NewsletterSignupDialog.svelte';
	import Footer from '$lib/homepage/Footer.svelte';
	import MainSponsors from '$lib/about-us/MainSponsors.svelte';

	const {
		elements: { overlay, content, portalled },
		states: { open }
	} = $newsletterSignup;
</script>

<div use:melt={$portalled}>
	<Navbar />
	<main>
		<slot />
	</main>

	<MainSponsors />
	<Footer />

	{#if $open}
		<div use:melt={$overlay} class="fixed inset-0 z-50 bg-black/50" />
		<div
			use:melt={$content}
			class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
            max-w-[540px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white
            p-6 shadow-lg"
		>
			<NewsletterSignupDialog />
		</div>
	{/if}
</div>
