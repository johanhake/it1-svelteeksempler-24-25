<script>
	// Her henter vi ut de variablene som er lagret i stores
	import { teller } from '../stores_oppgaver'

const minekVerdi = ()=>{
	teller.set($teller+1)
}
</script>

<h1>Teller har nå verdien: {$teller}</h1>
<button on:click={minekVerdi}>-</button>
