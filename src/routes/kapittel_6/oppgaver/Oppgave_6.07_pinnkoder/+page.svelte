<script>
// @ts-nocheck

  let antallPinnkoder = 100
  let barePartall = false
  let ikkeLike = false
  let pinnkoder = []

  // Funksjon som returnerer en pinnkode
  const lagKode = ()=>{
    let a = Math.trunc(Math.random()*10)
    let b = Math.trunc(Math.random()*10)
    let c = Math.trunc(Math.random()*10)
    let d = Math.trunc(Math.random()*10)
    if(barePartall && d % 2 == 1){
      return lagKode()
    }
    if(ikkeLike && a===b && b===c && c===d){
      return lagKode()
    }
    // Returnerer pinnkoden som en string
    return String(a)+String(b)+String(c)+String(d)
  }

  // Funksjon som genererer alle pinnkodene
  const genererPinnkoder = ()=>{
    // Tøm listen med pinnkoder
    pinnkoder = []

    for (let i=0; i<antallPinnkoder; i++){
      pinnkoder.push(lagKode())
    }
  }

  // Generer de første pinnkodene
  genererPinnkoder()

</script>
<label>Antall pinnkoder
<input
       type="number"
       bind:value={antallPinnkoder}
       on:change={genererPinnkoder}>
</label>
<label>Bare partall
<input type="checkbox"
       bind:checked={barePartall}
       on:change={genererPinnkoder}>
</label>
<label>Ikke like
<input type="checkbox"
       bind:checked={ikkeLike}
       on:change={genererPinnkoder}>
</label>
<p>
{pinnkoder.join(" ")}
</p>
<style>
p{
  width: 500px;
  font-size:0.8em;
  font-family: Consolas
}
</style>
