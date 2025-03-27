<script>
// @ts-nocheck

// Her henter vi ut de variablene som er lagret i stores
import { navn, alder, bruker } from '../stores'

/*

 På alle variablene kan vi bruke: set, update, og $
  variabel.set() - for å endre verdien NB: Husk at variablen blir overskreven helt!
  variabel.update(data=>{data.endret = "nyVerdi"; return data})
  $variabel - for å hente ut verdien OG lytte på mulige endringer.
*/

let nyttNavn = ""
let nyAlder = ""


const endreNavnet = ()=>{
    navn.set(nyttNavn)
    bruker.update(data => {
      data.fornavn = nyttNavn
      return data
    })
    nyttNavn = ""
}

const endreAlderen = ()=>{
  alder.set(nyAlder)
  nyAlder = ""
}

</script>

<h1>Velkommen {$navn} du er {$alder} år</h1>


<label>Navn: <input type="text" placeholder="Endre navn" bind:value={nyttNavn} on:change={endreNavnet}></label>
<label>Alder: <input type="number" placeholder="Endre alder" bind:value={nyAlder} on:change={endreAlderen}></label>


<h2>{$bruker.fornavn}</h2>