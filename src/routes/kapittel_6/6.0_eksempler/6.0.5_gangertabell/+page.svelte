<script>
	// @ts-nocheck

	let ganger_tall = [1, 2, 3, 4, 5];
	let antall = 5

	const oppdater_tabell= ()=>{
		ganger_tall = []
		for (let i=1;i<=antall;i++){
			ganger_tall.push(i)
		}
	}
</script>

<h2>Gangertabell:</h2>
<input type="number" bind:value={antall} on:change={oppdater_tabell}>

<div
	class="tabell"
	style="grid-template-columns: repeat({ganger_tall.length+1}, 1fr)"
>
	<div></div>
	{#each ganger_tall as tall}
		<div class="topp">{tall}</div>
	{/each}
	{#each ganger_tall as tall_1}
		<div class="venstre">{tall_1}</div>
		{#each ganger_tall as tall_2}
			<div>{tall_1*tall_2}</div>
		{/each}
	{/each}
</div>

<style>
	.tabell {
		display: grid;
		width: 600px;
	}

	div {
		text-align: center;
		font-weight: normal;
	}

	.venstre {
		font-weight: bold;
		text-align: right;
	}

	.topp {
		font-weight: bold;
	}
</style>
