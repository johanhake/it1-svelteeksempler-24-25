<script>
	let ordene = ["Hest", "ku", "APE"]
	// Arrow-funksjoner med EN parameter og EN linje kan skrives MEGET kort.
	let ordMedSmåBokstaver = ordene.map(ord=>ord.toLowerCase())
</script>

<p>{ordMedSmåBokstaver.join(", ")}</p>