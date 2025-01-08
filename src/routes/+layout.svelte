<script lang="ts">
	import { page } from '$app/state';
	import DCSLogo from '../assets/images/dcs-logo.png';
	import MyBuilderLogo from '../assets/svg/my-builder-logo.svg';

	import '../app.css';

	let { children } = $props();

	const routes = {
		home: '/',
		services: '/services',
		contactUs: '/contact-us'
	};
</script>

<nav class="outer-page-grid">
	<div
		class="inner-page-grid flex flex-col items-center gap-y-4 px-5.5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-0"
	>
		<img src={DCSLogo} alt="DCS Home and Garden company logo" width="162" />
		<ul class="flex gap-x-6 sm:gap-x-12">
			<li>
				<a href={routes.home} class="nav-link" class:active={page.route.id === routes.home}>Home</a>
			</li>
			<li>
				<a href={routes.services} class="nav-link" class:active={page.route.id === routes.services}
					>Services</a
				>
			</li>
			<li>
				<a
					href={routes.contactUs}
					class="nav-link"
					class:active={page.route.id === routes.contactUs}>Contact Us</a
				>
			</li>
		</ul>
	</div>
</nav>

<main class="outer-page-grid">
	{@render children()}
</main>

<!-- Add Footer -->
<footer class="outer-page-grid mb-12 mt-28 p-5.5">
	<div
		class="col-span-full grid grid-cols-1 items-center justify-items-center gap-6 md:col-span-4 md:col-start-2 md:grid-cols-8 md:justify-items-start"
	>
		<img
			src={DCSLogo}
			alt="DCS Home and Garden company logo"
			class="col-span-full w-40 md:col-span-2 md:w-full"
		/>
		<div
			class="col-span-full flex flex-col gap-y-1 text-center md:col-span-4 md:w-full md:self-center"
		>
			<p class="text-lg font-bold uppercase">drop us a line</p>
			<p><span class="font-bold">Email:</span> dcshomeandgarden@gmail.com</p>
			<p><span class="font-bold">Phone:</span> 07123 456 7890</p>
		</div>
		<div class="col-span-full md:col-span-2">
			<a href="https://www.instagram.com/dcs.homeandgarden" target="_blank" class="pl-3">
				<img src={MyBuilderLogo} alt="My Builder logo" class="w-40 md:w-full" />
			</a>
		</div>
	</div>
</footer>
