<script>
	let middager = [
		{navn:"Taco", pris:45},
		{navn:"Pizza", pris:50},
		{navn:"Kebab", pris:55},
		{navn:"Hamburger", pris:35},
		{navn:"Kaffe", pris:15},
	]

	const sorterStigende = () => {
		middager = middager.sort((a,b) => a.pris - b.pris)
	}

	const sorterSynkende = () => {
		middager = middager.sort((a,b) => b.pris - a.pris)
	}

</script>
<h2>Meny</h2>
<button on:click={sorterStigende}>
	Stigende
</button>
<button on:click={sorterSynkende}>
	Synkende
</button>
	<!-- Viser meny -->
	{#each middager as rett}
	<h2>
		{rett.navn}
	</h2>
	<p>
		pris: {rett.pris} kr
</p>
	{/each}
