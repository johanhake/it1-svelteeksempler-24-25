<script>
	// @ts-nocheck
	
		let elever = ["Leon"]
		let navn = ""

		  // Fjern navnet etter registrering
		const registrer_elev = () => {
			//elever.push(navn)
			//elever = elever

			// Bruker spread operator (...) for å fordele verdiene i listen 
			// og så legge til en verdi på slutten
			elever = [...elever, navn]
			console.log(elever)
			navn = ""
		}
	
	  </script>
	
	  <input bind:value={navn}>
	  <button on:click={registrer_elev}>
		  Registrer oppmøte
	  </button>
	  <h1>Elever som har kommet:</h1>
	  <p> {elever.join(" 👩‍🎓 ") } </p>
	