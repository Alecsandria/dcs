<script lang="ts">
	import clsx from 'clsx';
	const props = $props<{
		alt: string;
		name: string;
		url: string;
		portfolioUrl: string;
		src: string;
		height?: string;
	}>();
</script>

<div class="group relative">
	<p
		class="invisible absolute bottom-0 right-0 rounded-br-md bg-black/70 px-2 py-1 text-xs text-white group-hover:visible group-hover:block"
		style="background-color: rgb(158 60 44 / 50%);"
	>
		Photo by <a href={props.portfolioUrl}>{props.name}</a> on <a href={props.url}>Unsplash</a>
	</p>
	<img
		src={props.src}
		alt={props.alt}
		class={clsx('w-full rounded-md object-cover', props?.height ? `h-[${props.height}]` : 'h-full')}
	/>
</div>
