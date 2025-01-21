<script>
	// NB TO mellomrom mellom Petter og Edderkopp
	const orginal_tekst = "Lille Petter  Edderkopp"
  let tekst = ""

</script>
<h3>
	Klarer du å skrive EKSAKT det samme som står her?
</h3>
<p>
	<i>"{orginal_tekst}"</i>
</p>
<label><textarea bind:value={tekst}></textarea></label>
{#if orginal_tekst == tekst}
<p class="korrekt">
	  Korrekt!!
</p>
{:else}
<p class="feil">
    Close but no cigar!
</p>
{/if}

<style>
	textarea {
		width: 300px;
		height: 50px;
	}

	.korrekt{
		background-color: green;
		padding: 5px;
	}

	.feil{
		background-color: red;
		padding: 5px;
	}
</style>