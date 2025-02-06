<script>
	let antallKast = 10
	let antallSeksere = 0
	$:{
	antallSeksere = 0
	for(let i=0; i<antallKast; i++){
		let terning = Math.trunc(Math.random()*6)+1
		if (terning === 6){
			antallSeksere += 1
		}
	}
	}
</script>
<h2>Hvor mange seksere?</h2>
<label>Antall kast <input type="number" bind:value={antallKast}></label>
Antall seksere for {antallKast} kast er {antallSeksere}