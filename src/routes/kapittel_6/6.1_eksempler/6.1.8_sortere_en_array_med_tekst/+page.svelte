<script>
	let sjokoladene = [
		"Kvikk Lunsj",
		"Stratos",
		"Banansjokolade",
		"Troika",
		"Crispo"
	]

	// 1) Hvordan få Svelte å skjønne vi endrer verdiene
	// 2) Bruk en sammenligningsfunksjon som sammenligner to verdier til å sortere: (a, b)=>{...}
	// Hint: Denne skal returnere noe negativ hvis b er større enn
	const sorterAlfabetisk = () => {
		sjokoladene = sjokoladene.sort()
	}

	// 2) Bruk en sammenligningsfunksjon til å sortere baklengs
	// Denne skal returnere -1 om
	const sorterOmvendt = () => {
		sjokoladene = sjokoladene.sort((a,b)=>{
			if (a>b){
				return -1
			}else if (a<b){
				return 1
			}else{
				return 0
			}
		})
	}
</script>

<button on:click={sorterAlfabetisk}>
	Sorter alfabetisk
</button>
<button on:click={sorterOmvendt}>
	Sorter omvendt av alfabetisk
</button>

<p>{sjokoladene.join(" 🍫 ")}</p>
