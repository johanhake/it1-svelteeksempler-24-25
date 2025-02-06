<script>
	// Her henter vi ut de variablene som er lagret i stores
	import { highscore } from '../stores_oppgaver'

	const grense = 30
	let sum = 0, antallKast = 0, terning=1
	let spiller = false
	let melding = "Kast terning! Hvor mange ganger må du kaste for å nå summen " + grense + "?"

	const startSpill = ()=>{
		sum = 0
		antallKast = 0
		spiller = true
	}

	const kastTerning = ()=>{
		antallKast += 1
		terning = Math.trunc(Math.random()*6)+1
		sum += terning
		if (sum >= grense){
			spiller = false
			if (antallKast < $highscore){
				highscore.set(antallKast)
				melding = "Nytt highscore! Spille på nytt?"
			}else{
				melding = "Ferdig men ikke noe highscore."
			}

		}
	}

</script>

<h1>Highscore: {$highscore}</h1>

{#if !spiller}
	<h2>{melding}</h2>
	<button on:click={startSpill}>Start spill</button>
{:else}
	<h2>Kast terning til summen blir {grense}</h2>
	<button on:click={kastTerning}>Kast terning</button>
	<img src="/terning/terning_{terning}.png" alt="">
	<h3>Sum: {sum} Antall kast: {antallKast}</h3>
{/if}

