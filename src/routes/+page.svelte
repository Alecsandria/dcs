<script>
	const aboutParagraphs = [
		'Welcome to DCS Home and Garden Maintenance! We are a proud, independent, family-run business dedicated to providing top-quality handyman and maintenance services for your home and garden across West Kent, East Sussex, and the surrounding areas.',
		'Whether it’s tackling those small odd jobs or handling larger projects you’d rather leave to the professionals, we’re here to help. Our wide range of services is designed to make your life easier, with expertise you can rely on and results you’ll love.',
		'At DCS Home and Garden Maintenance, your peace of mind is our priority. That’s why we’re fully covered by public liability insurance, ensuring every job we undertake is safe, secure, and stress-free for you.',
		'Let us take care of the tasks you don’t have time for—so you can spend more time enjoying your home and garden.'
	];

	const servicesContent = [
		'At DCS Home and Garden Maintenance, we understand how busy life can get, and how easy it is for home and garden tasks to pile up. That’s where we come in! We offer a wide range of handyman and garden maintenance services designed to make your home and garden look their best—all while saving you time and effort.',
		'We offer a wide range of services to help you keep your home and garden looking their best. From minor repairs to larger improvement projects, our expert handyman services are here to make your home run smoothly.',
		'Don’t let those to-do lists grow any longer! Contact DCS Home and Garden Maintenance today to discuss your needs and get a free, no-obligation quote.'
	];

	const customerReviews = [
		{
			name: 'Joe William',
			review:
				'Proin sed euismod eros. Suspendisse pretium tringilla eros eget tincidunt. Aliquam laoreet enim vitae nunc commodo luctus. sed at telis ut m Utrices Tauclous'
		},
		{
			name: 'Sarah Jones',
			review:
				'Proin sed euismod eros. Suspendisse pretium tringilla eros eget tincidunt. Aliquam laoreet enim vitae nunc commodo luctus. sed at telis ut m Utrices Tauclous'
		},
		{
			name: 'Robert Miles',
			review:
				'Proin sed euismod eros. Suspendisse pretium tringilla eros eget tincidunt. Aliquam laoreet enim vitae nunc commodo luctus. sed at telis ut m Utrices Tauclous'
		}
	];
</script>

<div class="inner-page-grid mt-12">
	<div class="col-span-4 flex flex-col gap-y-7 p-5.5">
		<h1 class="heading-style-1">
			Your trusted handyman <span class="md:whitespace-nowrap">services in West Kent,</span> East Sussex
			and surrounding areas.
		</h1>
		<div class="paragraph-spacing">
			{#each aboutParagraphs as paragraph}
				<p class="whitespace-pre-line">{paragraph}</p>
			{/each}
		</div>
		<a href="/services" class="primary-button w-fit">View our services</a>
	</div>
	<div class="top-left-image col-span-2 self-end"></div>
	<div class="middle-image col-span-full mt-2"></div>
	<div class="bottom-right-image col-span-2 mt-2"></div>
	<div class="col-span-4 flex flex-col gap-y-7 p-5.5">
		<div class="paragraph-spacing">
			{#each servicesContent as paragraph}
				<p class="whitespace-pre-line">{paragraph}</p>
			{/each}
		</div>
		<a href="/contact-us" class="primary-button w-fit">Contact us</a>
	</div>

	<div class="col-span-full mt-20 p-5.5">
		<div class="space-y-7 rounded-2xl bg-skyBlue p-11">
			<h2 class="heading-style-2">What our customers say</h2>
			<div id="customer-reviews" class="flex flex-col gap-11 md:flex-row md:justify-evenly">
				{#each customerReviews as review}
					<div class="space-y-2">
						<h3 class="text-lg font-medium">{review.name}</h3>
						<p>
							{review.review}
						</p>
					</div>
					<div class="border-b-1.5 border-navy last:border-none md:border-l-1.5"></div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.top-left-image {
		background-image: url('../assets/images/kitchen.jpg');
		background-size: 200% 507px;
		background-repeat: no-repeat;
		background-position: 0 0;
		height: 168px;
	}
	.middle-image {
		background-image: url('../assets/images/kitchen.jpg');
		background-size: 200% 507px;
		background-repeat: no-repeat;
		background-position: 0 -168px;
		height: 168px;
	}
	.bottom-right-image {
		background-image: url('../assets/images/kitchen.jpg');
		background-size: 200% 507px;
		background-repeat: no-repeat;
		background-position: 0 -336px;
		height: 168px;
	}

	@media (min-width: 472px) {
		.top-left-image {
			background-size: 140% 507px;
		}
		.middle-image {
			background-size: 140% 507px;
		}
		.bottom-right-image {
			background-size: 140% 507px;
		}
	}

	@media (min-width: 658px) {
		.top-left-image {
			background-size: 110% 507px;
		}
		.middle-image {
			background-size: 110% 507px;
		}
		.bottom-right-image {
			background-size: 110% 507px;
		}
	}

	@media (min-width: 768px) {
		.top-left-image {
			background-size: 300% 766px;
			background-position: 100% 0;
			height: 326px;
		}
		.middle-image {
			background-size: 100% 806px;
			background-position: 0 -326px;
		}
		.bottom-right-image {
			background-size: 300% 806px;
			background-position: 0 -494px;
			height: 312px;
		}
	}
</style>
