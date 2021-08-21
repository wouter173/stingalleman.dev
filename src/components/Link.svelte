<script>
// @ts-nocheck

	import Icon from 'svelte-awesome';

	export let name = 'name';
	export let href = 'href';
	export let icon;

	let width;
</script>

<svelte:window bind:innerWidth={width} />

<li class="flex items-center mt-3 lg:text-lg 2xl:text-5xl 2xl:mt-6">
	<Icon data={icon} scale={width > 1440? "2.6": "1.2"}/>
	<a class="ml-2 hover:underline 2xl:ml-4" target="_blank" rel="noreferrer" href={href}>{name}</a>
</li>