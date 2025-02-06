<script>
// @ts-nocheck

	let utstyrsListe = []
	let utstyr = ""

	const leggTilUtstyr = ()=>{
		utstyrsListe=[...utstyrsListe, utstyr]
		utstyr = ""
	}

</script>
<h2>Legg til utstyr i liste</h2>
<label>Utstyr: <input type="text" bind:value={utstyr} on:change={leggTilUtstyr}></label>
<ul>
	<!-- Bruk en each - løkke til å vise en liste med utstyr -->
	<!-- Viser indeks med en andre variabel -->
	{#each utstyrsListe as utstyr, indeks}
	<li>{indeks} : {utstyr}</li>
	{/each}
</ul>
