<svelte:head>
  	<link rel="stylesheet" href="/prism.css">    
	<script src="/prism.js"></script>
</svelte:head>

<script>
	export let language
	export let code
</script>

<div class="block right-0 bottom-0 w-screen -ml-4 mt-8 sm:absolute sm:h-4/5 sm:w-3/5">
	<div class="hidden items-center w-full h-10 rounded-t-xl sm:flex" style="background-color: #2d2d2d">
		<div class="h-3 w-3 mt-2 ml-5 bg-red-600 rounded-full"></div>
		<div class="h-3 w-3 mt-2 ml-3 bg-yellow-400 rounded-full"></div>
		<div class="h-3 w-3 mt-2 ml-3 bg-green-600 rounded-full"></div>
	</div>
	<div class="flex items-center w-full h-10 justify-center rounded-t-xl sm:hidden" style="background-color: #2d2d2d">
		<div class="h-1 w-2/5 bg-white bg-opacity-10 rounded-3xl"></div>
	</div>
  	<pre class="line-numbers" style="margin: 0px; height: 100%; white-space:pre-wrap;">
		<code class="language-{language}">{code}</code>
	</pre>
</div>

<style>
	@media (min-width: 640px) {
		pre {
			height: calc(100% - 2.5rem)
		}
	}
</style>