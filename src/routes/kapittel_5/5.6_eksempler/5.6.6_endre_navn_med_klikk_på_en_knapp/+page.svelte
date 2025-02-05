<script>
// @ts-nocheck

	let navn = "John Donne"
	const lag_nytt_navn = (fornavn, etternavn) => {
		navn = fornavn + " " + etternavn
	}
</script>

<h1>
	Mitt navn er {navn}
</h1>
<!--
* Her kan vi IKKE bruke lagNyttNavnsom lytterfunksjon
* Vi kan HELLER IKKE bare kalle funksjonen når vi skal registrere den
* Vi må legge inn funksjonskallet i en annonym lytterfunksjon
-->
<button on:click={()=>{lag_nytt_navn("Marie", "Curie")}}>
		Marie Curie
</button>
<button on:click={()=>{lag_nytt_navn("James", "Bond")}}>
		James Bond
</button>
