<script>
  // @ts-nocheck

  let tilbehør = [];
  let drikke = "Cola";

  let cola = false;
  let fanta = false;
  let sprite = false;
</script>

<h2>Velg tilbehør</h2>
<label>
  <input type="checkbox" value="Bacon" bind:group={tilbehør} />
  <span>Bacon</span>
</label>
<label>
  <input type="checkbox" value="Sylteagurk" bind:group={tilbehør} />
  <span>Sylteagurk</span>
</label>
<label>
  <input type="checkbox" value="Ekstra ost" bind:group={tilbehør} />
  <span>Ekstra ost</span>
</label>

<h2>Velg drikke</h2>
<label>
  <input type="radio" value="Cola" bind:group={drikke} />
  <span>Cola</span>
</label>
<label>
  <input type="radio" value="Fanta" bind:group={drikke} />
  <span>Fanta</span>
</label>
<label>
  <input type="radio" value="Sprite" bind:group={drikke} />
  <span>sprite</span>
</label>

{#each tilbehør as t}
<h4>Du har valgt: {t}</h4>
{/each}

<p>Tilbehør: {tilbehør.join(" 🍔 ")}</p>
<p>Drikk: {drikke}</p>
