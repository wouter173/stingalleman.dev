<script>
	import {faDiscord, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
	import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

	import Link from './Link.svelte'
	import Prism from './Prism.svelte'

	const socials = [
		{name: "Github", icon: faGithub, href: "https://github.com/stingalleman"},
		{name: "Instagram", icon: faInstagram, href: "https://instagram.com/sting.alleman"},
		{name: "Discord", icon: faDiscord, href: "https://discord.gg/SZ9Ept5CTM"},
		{name: "Email", icon: faEnvelope, href: "mailto:stingalleman@icloud.com"},
	]

	const code = (async () => {
		const res = await fetch("/placeholder.txt")
		return await res.text()
	})()
</script>

<section class="relative flex w-full h-full justify-center text-white shadow-2xl z-10 sm:bg-blue-1000 sm:overflow-hidden sm:w-4/5 sm:h-4/5 sm:rounded-3xl">
	<div class="relative w-11/12 pt-14 2xl:pt-32">
		<div class="inline-block ml-4">
			<h1 class="font-extrabold text-4xl -mb-3 sm:text-5xl xl:text-6xl 2xl:text-9xl">Sting</h1>
			<h1 class="font-extrabold text-4xl sm:text-5xl xl:text-6xl 2xl:text-9xl">Alleman</h1>
		</div>
		<nav class="grid grid-rows-2 grid-cols-2 -mt-2 list-none float-right sm:block sm:float-none sm:ml-4 sm:mt-10 2xl:mt-20">
			{#each socials as social}
				<Link icon={social.icon} name={social.name} href={social.href} />
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