<script>
	let rik = false
	let berømt = false
	// Fiks feilen i if-testen under
</script>

<label>
	<input type="checkbox" bind:checked={rik}> Jeg er rik
</label>
<label>
	<input type="checkbox" bind:checked={berømt}> Jeg er berømt
</label>

<h1>
	{#if rik || berømt}
		Du er både rik og berømt, og får plass i VIP-avdelingen 🤑
	{:else if rik && berømt}
		Du er enten rik eller berømt. Velkommen inn 🥳
	{:else}
		Du er dessverre verken rik eller berømt. Du får gå et annet sted 😢
	{/if}
</h1>
