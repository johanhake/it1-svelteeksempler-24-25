<script>
	let sjokoladene = [
		"Kvikk Lunsj",
		"Stratos",
		"Banansjokolade",
		"Troika",
		"Crispo"
	]

	// 1) Hvordan få Svelte å skjønne vi endrer verdiene
	const sorterAlfabetisk = () => {
		sjokoladene = sjokoladene.sort()
	}

	// 2) Bruk en sammenligningsfunksjon som sammenligner to verdier til å sortere: (a, b)=>{...}
	// Hint: Denne skal returnere noe negativ hvis a er større enn b
	const sorterOmvendt = () => {
		sjokoladene = sjokoladene.sort(
			(a,b)=>{
			if (a>b){
				return -1
			}else if (a<b){
				return 1
			}else{
				return 0
			}
		}
		)
	}
</script>

<button on:click={sorterAlfabetisk}>
	Sorter alfabetisk
</button>
<button on:click={sorterOmvendt}>
	Sorter omvendt av alfabetisk
</button>

<p>{sjokoladene.join(" 🍫 ")}</p>
