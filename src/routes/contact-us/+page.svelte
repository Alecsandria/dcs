<script lang="ts">
	import clsx from 'clsx';
	import { z } from 'zod';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';
	import reporterDom from '@felte/reporter-dom';

	const ukPhonePattern = /^(07\d{9}|0[123](?:\d{9}|[89]\d{8}))$/;
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const schema = z.object({
		name: z.string().nonempty('Name is required').min(2, 'Name must be at least 2 characters'),
		phoneNumber: z
			.string()
			.nonempty('Phone number is required')
			.regex(ukPhonePattern, 'Please enter a valid UK phone number'),
		email: z.string().email('Invalid email'),
		descriptionOfService: z.string().nonempty('Description of service is required')
	});

	const { form, errors } = createForm({
		onSubmit: (data) => {
			console.log(data);
		},
		onError: (error) => error,
		extend: [validator({ schema }), reporterDom({ single: true })]
	});

	type InputFieldAttributes = {
		label: string;
		name: string;
		type: string;
		minLength?: number;
		required?: boolean;
		pattern?: string;
		placeholder?: string;
	};

	type SelectFieldAttributes = {
		label: string;
		name: string;
		options: string[];
	};
</script>

{#snippet inputField(attributes: InputFieldAttributes)}
	<div class="form-group w-full">
		<label for={attributes.name} class="form-label">{attributes.label}</label>
		<input
			type={attributes.type}
			id={attributes.name}
			name={attributes.name}
			required={attributes.required}
			placeholder={attributes.placeholder}
			minLength={attributes.minLength}
			class={clsx(
				'form-input',
				$errors?.[attributes.name] &&
					'border-brickRed focus:border-transparent focus:ring-2 focus:ring-brickRed'
			)}
			aria-describedby={`${attributes.name}-validation`}
		/>
		<p
			id={`${attributes.name}-validation`}
			data-felte-reporter-dom-for={attributes.name}
			class="text-brickRed"
		></p>
	</div>
{/snippet}

{#snippet selectField(attributes: SelectFieldAttributes)}
	<label for={attributes.name} class="form-label">{attributes.label}</label>
	<select id={attributes.name} name={attributes.name} class="form-input">
		{#each attributes.options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
{/snippet}

<div class="inner-page-grid gap-x-10 space-y-12 p-5.5">
	<div class="space-y-7 p-2 sm:col-span-3 sm:mt-20">
		<h1 class="heading-style-1">Why choose DCS Home and Garden Maintenance?</h1>
		<ul class="w-3/4 list-disc space-y-2 pl-12">
			<li>
				<strong>Local Expertise:</strong> Serving West Kent, East Sussex, and surrounding areas with
				pride.
			</li>
			<li>
				<strong>Experienced and Reliable:</strong> A family-run business committed to quality.
			</li>
			<li><strong>Fully Insured:</strong> Your peace of mind is always our priority.</li>
		</ul>
		<p>
			Don’t let those to-do lists grow any longer! Contact DCS Home and Garden Maintenance today to
			discuss your needs and get a free, no-obligation quote.
		</p>
		<!-- <div class="mt-2">
			<div class="h-[168px] w-4/5 rounded-lg bg-slate-400"></div>
		</div> -->
	</div>
	<form
		novalidate
		on:submit|preventDefault
		use:form
		class="form-shadow space-y-6 rounded-lg p-5.5 shadow-turquoise/40 sm:col-span-3"
	>
		<div class="flex gap-x-4">
			<div class="form-group w-28">
				{@render selectField({
					label: 'Title',
					name: 'title',
					options: ['', 'Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Prof', 'Rev']
				})}
			</div>

			{@render inputField({
				label: 'Name',
				name: 'name',
				type: 'text',
				required: true,
				placeholder: 'Enter your name',
				minLength: 2
			})}
		</div>

		{@render inputField({
			label: 'Phone Number',
			name: 'phoneNumber',
			type: 'tel',
			required: true,
			placeholder: 'Enter your phone number',
			pattern: ukPhonePattern.toString()
		})}

		{@render inputField({
			label: 'Email',
			name: 'email',
			type: 'email',
			required: true,
			placeholder: 'Enter your email address',
			pattern: emailPattern.toString()
		})}

		<div class="form-group">
			{@render selectField({
				label: 'Topic of Inquiry',
				name: 'topic',
				options: [
					'General Inquiry',
					'Home Maintenance Services',
					'Garden Maintenance Services',
					'Request a Quote'
				]
			})}
		</div>

		<div class="form-group">
			<label for="descriptionOfService" class="form-label">Description of Service</label>
			<textarea
				id="descriptionOfService"
				name="descriptionOfService"
				rows={6}
				required={true}
				class="form-input"
				aria-describedby="descriptionOfService-validation"
			></textarea>
			<p
				id="descriptionOfService-validation"
				data-felte-reporter-dom-for="descriptionOfService"
				class="text-brickRed"
			></p>
		</div>
		<button class="primary-button" type="submit">Submit</button>
	</form>
</div>
