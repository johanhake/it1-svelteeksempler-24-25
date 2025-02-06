<script>
// @ts-nocheck

	let elever = []
	let navn = ""
	  // Fjern navnet etter registrering
	  // Svelte skjønner ikke at elever er oppdatert. Fiks det!
	const registrerElev = () => {
		  elever = [...elever, navn]
		  navn = ""
	}

  </script>

  <input bind:value={navn} on:change={registrerElev}>
  <button on:click={registrerElev}>
	  Registrer oppmøte
  </button>
  <h1>Elever som har kommet:</h1>
  <p> {elever.join(" 👩‍🎓 ") } </p>
