<script>
	// @ts-nocheck

	let utstyr_liste = [];
	let utstyr = "";

	const legg_til_utstyr = () => {
		utstyr_liste = [...utstyr_liste, utstyr];
		utstyr = ""
	};
</script>

<h2>Legg til utstyr i liste</h2>
<label
	>Utstyr: <input
		type="text"
		bind:value={utstyr}
		on:change={legg_til_utstyr}
	/></label
>
<ul>
	<!-- Bruk en each - løkke til å vise en liste med utstyr -->
	<!-- Viser indeks med en andre variabel utstyr, indeks-->
	{#each utstyr_liste as utstyr, indeks}
		<li>{indeks+1}:{utstyr}</li>
	{/each}
</ul>
