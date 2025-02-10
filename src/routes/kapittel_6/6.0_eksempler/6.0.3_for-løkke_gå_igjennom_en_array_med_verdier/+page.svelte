<script>
	// @ts-nocheck

	let tall_liste = [5, 10];
	let tall = "";

	let sum = 0;
	for (let t of tall_liste) {
		sum += t;
	}

	// Legger til "tall" i en list
	const legg_til_tall = () => {
		//tall_liste.push(tall)
		tall_liste = [...tall_liste, tall];
		tall = "";
	};
</script>

<h2>Legg til tall i liste</h2>
<label
	>Tall: <input
		type="number"
		bind:value={tall}
		on:change={legg_til_tall}
	/></label
>
<p>
	Listen: {tall_liste}
</p>
<p>
	Gjennomsnitt: {sum / tall_liste.length}
</p>
