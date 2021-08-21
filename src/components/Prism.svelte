<svelte:head>
  	<link rel="stylesheet" href="/prism.css">    
	<script src="/prism.js"></script>
</svelte:head>

<script>
	export let language
	export let code
</script>

<div class="hidden right-0 bottom-0 -ml-4 mt-16 sm:absolute h-4/5 w-3/5 sm:block">
	<div class="hidden items-center w-full h-10 rounded-t-xl bg-blackblue-100 sm:flex">
		<div class="h-3 w-3 mt-2 ml-5 bg-red-600 rounded-full"></div>
		<div class="h-3 w-3 mt-2 ml-3 bg-yellow-400 rounded-full"></div>
		<div class="h-3 w-3 mt-2 ml-3 bg-green-600 rounded-full"></div>
	</div>
  	<pre class="line-numbers" style="margin: 0px; height: 100%; white-space:pre-wrap; background-color: rgb(33, 32, 34);">
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