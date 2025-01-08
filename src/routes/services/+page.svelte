<script lang="ts">
	import gardenPath from '../../assets/images/garden-path.jpg';
	import tableAndChair from '../../assets/images/table-and-chair.jpg';
	import { UnsplashImage } from '$lib';

	type Service = {
		title: string;
		description: string;
	};

	const homeServices: Service[] = [
		{
			title: 'Fixture Replacement',
			description:
				'Whether it’s a faucet, cabinet, or light fixture, we’ll help update your home’s features.'
		},
		{
			title: 'Drywall Repairs and Installation',
			description: 'We can patch holes, fix cracks, and install new drywall for a flawless finish.'
		},
		{
			title: 'Interior and Exterior Painting',
			description: 'Refresh your home with a new coat of paint, inside or out.'
		},
		{
			title: 'Tile Installation and Repairs',
			description: 'Perfectly fitted tiles for your bathroom, kitchen, or flooring needs.'
		},
		{
			title: 'Flat-Pack Furniture Assembly',
			description: 'Let us take the hassle out of assembling your new furniture.'
		},
		{
			title: 'Power Washing',
			description:
				'Clean and restore driveways, patios, and exterior walls to their original glory.'
		},
		{
			title: 'Picture and Shelf Hanging',
			description: 'Securely hang artwork, mirrors, shelves, and more.'
		},
		{
			title: 'General Repairs',
			description: 'Fix squeaky doors, loose handles, and any other issues.'
		}
	];

	const gardenServices: Service[] = [
		{
			title: 'Lawn Mowing and Care',
			description: 'Keep your lawn healthy and beautifully trimmed.'
		},
		{
			title: 'Hedge Trimming and Shaping',
			description: 'Expert care to maintain the perfect look for your hedges and shrubs.'
		},
		{
			title: 'Weeding and Seasonal Planting',
			description: 'Say goodbye to weeds and refresh your garden with vibrant seasonal blooms.'
		},
		{
			title: 'Garden Clean-Ups',
			description: 'Seasonal tidy-ups to prepare your garden for summer barbecues or winter rest.'
		},
		{
			title: 'Decking Installation and Repairs',
			description:
				'Create a stunning outdoor space with new decking or bring old decking back to life.'
		},
		{
			title: 'Fence Installation and Repairs',
			description: 'Secure and enhance your property with quality fencing solutions.'
		},
		{
			title: 'Shed Assembly and Painting',
			description: 'Professional installation and finishing for your garden storage needs.'
		},
		{
			title: 'Outdoor Painting and Staining',
			description: 'Protect and beautify fences, sheds, and other outdoor structures.'
		}
	];
</script>

{#snippet servicesContent(services: Service[])}
	<div class="col-span-6 md:col-span-3">
		<ul class="mt-2 space-y-4">
			{#each services as service}
				<li class="paragraph-spacing rounded-md bg-skyBlue/50 p-4">
					<h4 class="font-medium uppercase text-navy">{service.title}</h4>
					<p>
						{service.description}
					</p>
				</li>
			{/each}
		</ul>
	</div>
{/snippet}

<div class="inner-page-grid mt-12 space-y-10">
	<div class="col-span-4 space-y-7 p-5.5">
		<h1 class="heading-style-1">
			Professional Home and Garden Maintenance Services in West Kent & East Sussex
		</h1>
		<p>
			At DCS Home and Garden Maintenance, we’re here to make your home and garden projects
			hassle-free. Whether it’s a quick fix, a full refresh, or ongoing care, we provide a wide
			range of professional services tailored to your needs.
		</p>
	</div>
	<div id="home-services-container" class="col-span-full space-y-7 p-5.5">
		<h2 class="heading-style-2">Our Home Maintenance Services</h2>
		<div class="grid grid-cols-6 gap-10">
			<div class="col-span-6 space-y-8 md:col-span-3">
				<p>
					From minor repairs to larger improvement projects, our expert handyman services are here
					to make your home run smoothly.
				</p>
				<UnsplashImage
					alt="Table and chairs by Hutomo Abrianto on Unsplash"
					name="Hutomo Abrianto"
					url="https://unsplash.com/photos/white-steel-chair-in-front-round-table-on-white-rug-X5BWooeO4Cw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					portfolioUrl="https://unsplash.com/@hutomoabrianto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					src={tableAndChair}
				/>
				<p>Whatever task you need done we're here to help.</p>
				<div>
					<a class="primary-button" href="/contact-us"> Get in touch</a>
				</div>
			</div>
			{@render servicesContent(homeServices)}
		</div>
	</div>

	<div id="garden-services-container" class="col-span-full space-y-7 p-5.5">
		<h2 class="heading-style-2">Our Garden Maintenance Services</h2>
		<div class="grid grid-cols-6 gap-10">
			<div class="col-span-6 space-y-8 md:col-span-3">
				<div class="paragraph-spacing">
					<p>
						Your garden deserves care and attention, and we provide just that with tailored services
						to suit your needs.
					</p>
				</div>
				<UnsplashImage
					alt="Garden path by Tim Cooper on Unsplash"
					name="Tim Cooper"
					url="https://unsplash.com/photos/green-leafed-plant-XfqGuWevmvs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					portfolioUrl="https://unsplash.com/@tcooper86?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
					src={gardenPath}
					height="390px"
				/>
				<p>
					If the service you need isn’t listed, don’t hesitate to contact us. We’ll work with you to
					find a solution!
				</p>
				<div>
					<a class="primary-button" href="/contact-us"> Get in touch</a>
				</div>
			</div>
			{@render servicesContent(gardenServices)}
		</div>
	</div>
</div>
