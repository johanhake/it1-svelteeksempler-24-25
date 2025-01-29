<script>
	let fasit = "Gro Harlem Brundtland"
	let svar = ""

</script>

<h1>Hvem var Norges første kvinnelig statsminister?</h1>
<input bind:value={svar}>

{#if svar === fasit}
	<p>Det er helt riktig!</p>
{/if}
