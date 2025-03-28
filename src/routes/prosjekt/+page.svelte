<script>
	const prosjekter = [
		"Nettbutikk", "Prøve programmering"
	]

</script>

<h1>Større prosjekter</h1>

{#each prosjekter as prosjekt}
	<a href="/prosjekt/{prosjekt.toLowerCase().split(" ").join("_")}">{prosjekt}</a><br>
{/each}

<style>

</style>
