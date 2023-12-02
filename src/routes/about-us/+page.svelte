<script>
	import FlowerDecoration from '$lib/about-us/FlowerDecoration.svelte';
	import History from '$lib/about-us/History.svelte';
	import MainSponsors from '$lib/about-us/MainSponsors.svelte';
	import TeamMembers from '$lib/about-us/TeamMembers.svelte';
	import TryThisAtHome from '$lib/about-us/TryThisAtHome.svelte';
	import VisionMissionValues from '$lib/about-us/VisionMissionValues.svelte';
	import WhatWeDo from '$lib/about-us/WhatWeDo.svelte';

	import Background from '$lib/assets/background-vision-statement.png?enhanced';
</script>

<div class="relative overflow-hidden">
	<enhanced:img
		class="absolute right-[-5rem] top-[-5rem] -z-10 h-[19rem] w-auto lg:right-[-7rem] lg:top-[-7rem] lg:h-[32rem]"
		src={Background}
		alt="YoungVision Logo"
	/>
	<enhanced:img
		class="absolute left-[-7rem] top-[7rem] -z-10 h-[14rem] w-auto lg:left-[-14rem] lg:top-[17rem] lg:h-[25rem]"
		src={Background}
		alt="YoungVision Logo"
	/>
	<enhanced:img
		class="absolute bottom-[-7rem] right-[-4rem] -z-10 h-[14rem] w-auto"
		src={Background}
		alt="YoungVision Logo"
	/>
	<enhanced:img
		class="absolute left-[-4rem] top-[70rem] -z-10 h-[14rem] w-auto lg:left-[5rem] lg:top-[43rem]"
		src={Background}
		alt="YoungVision Logo"
	/>

	<VisionMissionValues />
	<History />
</div>
<TeamMembers />
<WhatWeDo />
<TryThisAtHome />
<FlowerDecoration />
<MainSponsors />
