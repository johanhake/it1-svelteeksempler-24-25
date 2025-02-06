<script>
// @ts-nocheck

	let tilbehør = []
	  // Bruk bind:group={tilbehør} til å knyte valgte verdier til en array
	  let drikke = "Cola";
  </script>

  <h2>Velg tilbehør</h2>
  <label>
	<input type="checkbox" value="Bacon" bind:group={tilbehør}>
	<span>Bacon</span>
  </label>
  <label>
	<input type="checkbox" value="Sylteagurk" bind:group={tilbehør}>
	<span>Sylteagurk</span>
  </label>
  <label>
	<input type="checkbox" value="Ekstra ost" bind:group={tilbehør}>
	<span>Ekstra ost</span>
  </label>

  <h2>Velg drikke</h2>
  <label>
	<input type="radio" value="Cola" bind:group={drikke}>
	<span>Cola</span>
  </label>
  <label>
	<input type="radio" value="Fanta" bind:group={drikke}>
	<span>Fanta</span>
  </label>
  <label>
	<input type="radio" value="Sprite" bind:group={drikke}>
	<span>sprite</span>
  </label>

  <p> Tilbehør: {tilbehør.join(" 🍔 ")} </p>
  <p> Drikk: {drikke} </p>
