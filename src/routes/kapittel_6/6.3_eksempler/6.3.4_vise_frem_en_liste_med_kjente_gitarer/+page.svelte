<script>
// @ts-nocheck

	import gitarer from "./gitarer.json"

</script>

<h1>{gitarer.tittel}</h1>
<ul>
	{#each gitarer.gitarer as g}
	<li>{g.merke} : {g.modell}</li>
	{/each}
</ul>