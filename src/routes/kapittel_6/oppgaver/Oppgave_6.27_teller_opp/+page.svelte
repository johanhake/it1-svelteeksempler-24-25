<script>
	// Her henter vi ut de variablene som er lagret i stores
	import { teller } from '../stores_oppgaver'

const økeVerdi = ()=>{
	teller.set($teller+1)
}
</script>

<h1>Teller har nå verdien: {$teller}</h1>
<button on:click={økeVerdi}>+</button>
