<script>
	let fasit = "Gro Harlem Brundtland"
	let svar = ""

</script>

<h1>Hvem var Norges første kvinnelig statsminister?</h1>
<input bind:value={svar}>

{#if svar.toLowerCase() === fasit.toLowerCase()}
	<p>Det er helt riktig!</p>
{/if}
