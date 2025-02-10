<script>
  // @ts-nocheck

  let tilbehør = [];
  let drikke = "Cola";

  let bacon = false;
  let syltagurk = false;
  let ekstra_ost = false;
  let cola = false;
  let fanta = false;
  let sprite = false;
</script>

<h2>Velg tilbehør</h2>
<label>
  <input type="checkbox" value="Bacon" bind:checked={bacon} />
  <span>Bacon</span>
</label>
<label>
  <input type="checkbox" value="Sylteagurk" bind:checked={syltagurk} />
  <span>Sylteagurk</span>
</label>
<label>
  <input type="checkbox" value="Ekstra ost" bind:checked={ekstra_ost} />
  <span>Ekstra ost</span>
</label>

<h2>Velg drikke</h2>
<label>
  <input type="radio" value="Cola" name="drikke" />
  <span>Cola</span>
</label>
<label>
  <input type="radio" value="Fanta" name="drikke" />
  <span>Fanta</span>
</label>
<label>
  <input type="radio" value="Sprite" name="drikke" />
  <span>sprite</span>
</label>

{#if bacon}
<h4>Du har valgt Bacon</h4>
{/if}
{#if syltagurk}
<h4>Du har valgt syltagurk</h4>
{/if}
{#if ekstra_ost}
<h4>Du har valgt ekstra ost</h4>
{/if}

<p>Tilbehør: {tilbehør.join(" 🍔 ")}</p>
<p>Drikk: {drikke}</p>
