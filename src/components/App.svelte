<script>
	import Link from './Link.svelte'
	import Prism from './Prism.svelte'

	const socials = [
		{name: "Github", href: "https://github.com/stingalleman"},
		{name: "Instagram", href: "https://instagram.com/sting.alleman"},
		{name: "Discord", href: "https://discord.gg/SZ9Ept5CTM"},
		{name: "Email", href: "mailto:stingalleman@icloud.com"},
	]

	const code = (async () => {
		const res = await fetch("/placeholder.txt")
		return await res.text()
	})()
</script>

<section class="relative flex w-full h-full justify-center text-white shadow-2xl z-10 sm:bg-blue-1000 sm:overflow-hidden sm:w-4/5 sm:h-4/5 sm:rounded-3xl">
	<div class="relative w-11/12 pt-14">
		<div class="inline-block ml-4">
			<h1 class="font-extrabold text-4xl -mb-3 sm:text-5xl">Sting</h1>
			<h1 class="font-extrabold text-4xl sm:text-5xl">Alleman</h1>
		</div>
		<nav class="grid grid-cols-2 grid-rows-2 gap-2 mt-2 mr-4 float-right list-none sm:grid-cols-4 sm:grid-rows-none sm:mt-0 sm:gap-8">
			{#each socials as social}
				<Link name={social.name} href={social.href} />
			{/each}
		</nav>

		{#await code then data}
			<Prism language="js" code={data} />
		{/await}
	</div>
</section>

<style scoped>
	@media (min-width: 640px) {
		section::before {
			position: fixed;
			width: 100%;
			height: 100%;
			z-index: 20;
			pointer-events: none;
			content: '';
			background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4));
		}
	}
</style>