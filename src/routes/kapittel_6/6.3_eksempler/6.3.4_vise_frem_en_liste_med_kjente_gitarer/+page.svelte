<script>
// @ts-nocheck

	import abdalla from "./gitarer.json"
	let merke = "Gibson"

</script>

<h1>{abdalla.tittel}</h1>
<select bind:value={merke}>
	<option value="Gibson">Gibson</option>
	<option value="Fender">Fender</option>
</select>

<ul>
	{#each abdalla.gitarer as henry}
	{#if henry.merke === merke}
	<li>{henry.merke} : {henry.modell}</li>
	{/if}
	{/each}
</ul>