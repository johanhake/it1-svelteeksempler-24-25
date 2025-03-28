<script>
// @ts-nocheck

	// Returnerer karakteren fra en poengsum
	const karakter = (poengsum) => {
		if (poengsum < 12) {
			return 1;
		}
		if (poengsum < 24) {
			return 2;
		}
		if (poengsum < 35) {
			return 3;
		}
		if (poengsum < 45) {
			return 4;
		}
		if (poengsum < 56) {
			return 5;
		}
		return 6;
	};

	const måloppnåelse = (poengsum) => {
		if (poengsum < 24){
			return "Lav"
		}
		if (poengsum < 45){
			return "Middels"
		}
		return "Høy"
	}

	const registrerPoeng = ()=>{
		poengsummer = [...poengsummer, poengsum]
		poengsum = 0
	}

	const gjennomsnitt = (poengsummer)=>{
		if (poengsummer.length === 0){
			return 0
		}
		let sum = 0
		for (let poeng of poengsummer){
			sum = sum + poeng
		}
		return sum / poengsummer.length
	}


	let poengsum = 0;
	let poengsummer = []

</script>

<h1>Oppgave 2 Karakterføring (10p)</h1>
<input type="number" bind:value={poengsum} on:change={registrerPoeng} />
<h1>
	Poengsum: {poengsum} | Karakter: {karakter(poengsum)} | Måloppnåelse: {måloppnåelse(
		poengsum
	)}
</h1>

<ul>
	{#each poengsummer as poeng}
		<li>Poengsum: {poeng} Karakter: {karakter(poeng)} | Måloppnåelse: {måloppnåelse(poeng)}</li>
	{/each}
</ul>

Gjennomsnitt: {gjennomsnitt(poengsummer).toFixed(2)}