<script>
// @ts-nocheck

// Her henter vi ut de variablene som er lagret i stores
import { highscores } from '../stores'

/*
  På alle variablene kan vi bruke: set, update, og $
  variabel.set() - for å endre verdien NB: Husk at variablen blir overskreven helt!
  variabel.update(data=>{data.endret = "nyVerdi"; return data})
  $variabel - for å hente ut verdien OG lytte på mulige endringer.
*/

let navn = ""
let score = 0

function sorted(highscores){
  highscores.sort((a,b)=>a.score-b.score)
  return highscores
}

function sendinn(){
  console.log("JADA")
  // Legg til nytt highscore
  highscores.update(data=>{return data})
  navn = ""
  score = 0
}

</script>
<h1>Highscore Car Game</h1>
<main>
  <ol>
    {#each sorted($highscores) as score}
      <li>{score.navn} : {score.score}</li>
    {/each}
  </ol>
  <div>
    <label>Navn: <input type="text" placeholder="Skriv inn navn" bind:value={navn}></label>
    <label>Score: <input type="number" placeholder="Skriv inn score" bind:value={score}></label>
    <button on:click={sendinn}>Registrer</button>
  </div>
</main>

<style>
  main{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>