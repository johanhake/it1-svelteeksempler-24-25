<script>
// @ts-nocheck

	let tallListe = [5,10]
	let tall = ""
	let sum = 0;
	$:{
		sum = 0
		for(let t of tallListe){
			sum += t
		}
	}
	const leggTilTall = ()=>{
		tallListe=[...tallListe, tall]
		tall = ""
	}

</script>
<h2>Legg til tall i liste</h2>
<label>Tall: <input type="number" bind:value={tall} on:change={leggTilTall}></label>
<p>
	Listen: {tallListe}
</p>
<p>
  Gjennomsnitt: {sum / tallListe.length}
</p>

