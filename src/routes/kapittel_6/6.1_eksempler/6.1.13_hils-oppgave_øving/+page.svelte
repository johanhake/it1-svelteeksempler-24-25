<script>
// @ts-nocheck
	const hils_a = (navn)=>{return "Hei på deg, " + navn + "!"}

	const hils_b = (navn)=>{
		return `Hei på deg, ${navn}! Navnet består av ${navn.length} bokstaver.`
	}

	const hils_c = (navn)=>{

		let lengde = "langt"
		if (navn.length <= 3){
			lengde = "kort"
		} else if (navn.length <= 8){
			lengde = "middels langt"
		}

		return `Hei på deg, ${navn}! Navnet består av ${navn.length} bokstaver og er et ${lengde} navn.`
	}

	let input_navn = ""

	let navn_liste = []
	const legg_til_navn = ()=>{
		navn_liste = [...navn_liste, input_navn]
		input_navn = ""
	}

	const sorter_liste = ()=>{
		navn_liste = navn_liste.sort()
	}

</script>
<h1>Hils-oppgave</h1>
<h3>a) {hils_a("Petter")}</h3>
<h3>b) {hils_b("Petter")}</h3>
<h3>c) {hils_c("Petter")}</h3>
<h3>d) {hils_c(input_navn)}</h3>
<input type="text" bind:value={input_navn}>
<h3>e) Liste med hilsner</h3>
<button on:click={legg_til_navn}>Legg til navn</button>
<ul>
{#each navn_liste as navn}
	<li>{hils_c(navn)}</li>
{/each}
</ul>
<h3>f) Sorter hilsner</h3>
<button on:click={sorter_liste}>Sorter liste</button>
