<script>
	let tekst = $state("");
	let maks = $state(10);
	$effect(() => {
		if (tekst.length >= maks) {
			tekst = tekst.slice(0, maks);
		}
	});

	// Legg inn en melding om hvor mange tegn du har igjen
</script>

<textarea bind:value={tekst}></textarea>

{#if tekst.length < maks}
	<p>
		Du har nå skrevet {tekst.length} tegn. Du har {maks - tekst.length} tegn
		igjen
	</p>
{:else}
	<p class="advarsel">Du har skrevet for mye. Maks antall tegn er {maks}.</p>
{/if}

<style>
	textarea {
		width: 300px;
		height: 150px;
	}
	.advarsel {
		padding: 10px;
		background-color: red;
		color: white;
	}
</style>
