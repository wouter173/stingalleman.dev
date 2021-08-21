<script>
// @ts-nocheck

	import Icon from 'svelte-awesome'
	import {beer} from 'svelte-awesome/icons'

	export let name = 'name';
	export let href = 'href';
	export let icon;
</script>

<li class="flex items-center mt-3">
	<Icon data={icon} />
	<a class="ml-2 hover:underline" target="_blank" rel="noreferrer" href={href}>{name}</a>
</li>