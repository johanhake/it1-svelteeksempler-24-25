<script>
	// @ts-nocheck

	let ganger_tall = [1, 2, 3, 4, 5];
</script>

<h2>Gangertabell:</h2>

<div class="tabell" style="">
	{#each ganger_tall as tall}
		<div class="topp">{tall}</div>
	{/each}
</div>

<style>
	.tabell {
		display: grid;
		width: 600px;
		grid-template-columns: repeat(6, 1fr);
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
