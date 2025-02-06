<script>
	import json from "./alfabet.json"
</script>

<h1>Alfabetet</h1>
	{#each json as bokstav}
  	{bokstav}
  	{/each}
