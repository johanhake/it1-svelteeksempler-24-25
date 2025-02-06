<script>
	let i = 1
	let tallene = [i]
	// Bruk reduce til å redusere tallene i arrayen til ett tall.
	// Reduce tar en funksjon. Funksjonen må ta to tall-parametere (a, b) og returnerer et tall.
	$: sum= tallene.reduce((a, b)=>a+b)
	$: produkt = tallene.reduce((a, b)=>a*b)

	const økMedEn = () => {
		i++
		tallene = [...tallene, i]
	}
</script>

<button on:click={økMedEn}>Øk med én {i}</button>
<p>{tallene.join(" + ")} = {sum}</p>
<p>{tallene.join(" * ")} = {produkt}</p>
