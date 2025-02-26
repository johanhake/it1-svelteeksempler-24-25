<script>
// @ts-nocheck

  let skurk = {
      navn: "Pingvinen",
      nasjonalitet: "svensk"
    }

    const endreNasjonalitet = (nyVerdi) => {
      skurk.nasjonalitet = nyVerdi
    }

</script>

<button on:click={ () => {endreNasjonalitet("norsk")} }>norsk</button>
<button on:click={ () => {endreNasjonalitet("svensk")} }>svensk</button>
<button on:click={ () => {endreNasjonalitet("dansk")} }>dansk</button>

<!-- Bruker både indeks-notasjon og prikk-notasjon -->
<p> {skurk} er <b>{skurk}</b></p>
