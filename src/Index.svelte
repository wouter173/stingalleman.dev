<script>
	import App from './components/App.svelte'
</script>

<main class="flex w-full h-screen items-center justify-center">
	<div class="absolute h-screen w-full bg-gradient-to-tr from-purple-950 to-blue-950 bg-cover" style="background-image: url('/background.png')"></div>
  	<App />
</main>

<style global lang="postcss">
	@tailwind base;
  	@tailwind components;
  	@tailwind utilities;

  	:root {
    	font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      	Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  	}
</style>
