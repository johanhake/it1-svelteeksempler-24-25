<script>
// @ts-nocheck

	let partier = ["Ap", "SV", "Høyre", "V", "FrP", "Rødt", "Mgp", "Sp", "Krf"]
	  let stemmer = [0,0,0,0,0,0,0,0,0]
	  let leder = ""

	  // Lytter funksjon for det å registrere en stemme
	  const registrerStemme = (parti)=>{
			  const i = partier.indexOf(parti)
			  stemmer[i] += 1
	  }

	  // Oppdatere det parti som har flest stemmer
	  $:{
		  leder = ""
		  let flest = 0;
		  for (let i=0; i<stemmer.length; i++){
			  if(stemmer[i] > flest){
				  flest = stemmer[i]
				  leder =  partier[i]
			  }
		  }
	  }
  </script>
  <h2>
	  Registrer en stemme!
  </h2>
  {#each partier as parti}
	  <button on:click={()=>{registrerStemme(parti)}}>
		  {parti}
	  </button>
  {/each}
  <table>
	  <thead>
		  <tr>
  {#each partier as parti}
	  <th>
		  {parti}
	  </th>
  {/each}
			  </tr>
	  </thead>
	  <tbody>
		  <tr>
  {#each stemmer as stemme}
	  <td>
		  {stemme}
	  </td>
  {/each}
			  </tr>
	  </tbody>
  </table>
  <h2>
	  {#if leder}
	  Følgende parti leder: {leder}
	  {:else}
	  Gi et parti en stemme
	  {/if}
  </h2>

  <style>
	  button{
		  width: 75px;
	  }
	  td, th{
		  text-align: center;
		  font-size: 0.75em;
		  width: 50px
	  }
  </style>