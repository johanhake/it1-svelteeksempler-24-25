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


</script>

<h1>Velkommen {$navn} du er {$alder} år</h1>

<h2>Brukernavnet: {$bruker.brukernavn}</h2>