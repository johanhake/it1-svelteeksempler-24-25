<script>
	let ordene = ["Hest", "ku", "APE"]
	let nytt_ord = ""

	const legg_til = ()=>{
		ordene = [...ordene, nytt_ord]
		nytt_ord = ""
	}

	// Arrow-funksjoner med EN parameter og EN linje kan skrives MEGET kort.
	let ordMedSmåBokstaver = ordene.map(ord=>ord.toLowerCase())
</script>

<label for="">Legg til et ord<input type="text" bind:value={nytt_ord} on:change={legg_til}></label>

<p>{ordMedSmåBokstaver.join(", ")}</p>