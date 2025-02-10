<script>
	// @ts-nocheck
	
		let elever = []
		let navn = ""
		  // Fjern navnet etter registrering
		const registrer_elev = () => {
			  elever.push(navn)
			  console.log(elever)
		}
	
	  </script>
	
	  <input bind:value={navn}>
	  <button on:click={registrer_elev}>
		  Registrer oppmøte
	  </button>
	  <h1>Elever som har kommet:</h1>
	  <p> {elever.join(" 👩‍🎓 ") } </p>
	