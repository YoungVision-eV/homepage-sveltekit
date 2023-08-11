<script>
	import logo from '$lib/assets/logo.svg';
	// TODO: get these from CMS?
	const pages = {
		Home: '/',
		About: '/about',
		Projekte: '/projects',
		Support: '/support',
		Platform: '/platform'
	};

	let menuOpen = false;
</script>

<header class="bg-background">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">YoungVision e.V.</span>
				<img class="h-8 w-auto" src={logo} alt="YoungVision Logo" />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark-green"
				on:click={() => (menuOpen = true)}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each Object.entries(pages) as [page, url]}
				<a href={url} class="text-sm font-semibold leading-6 text-black hover:underline">{page}</a>
			{/each}
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<!-- TODO: add animation on open and close.-->
	{#if menuOpen}
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-10" />
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img class="h-8 w-auto" src={logo} alt="YoungVision Logo" />
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						on:click={() => (menuOpen = false)}
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							{#each Object.entries(pages) as [page, url]}
								<a
									href={url}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black"
									>{page}</a
								>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
