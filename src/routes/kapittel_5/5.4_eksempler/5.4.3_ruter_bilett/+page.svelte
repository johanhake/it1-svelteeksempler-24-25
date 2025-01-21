<script>
	let melding = "";
	let alder = $state(0);
	// Fiks feilen i koden under
	// Hva med negativ alder?
	// Gi en fin tilbakemelding når det ikke står noen alder.
	if (alder === undefined) {
		melding = "Skriv inn alder";
	} else if (alder < 3) {
		melding = "Du skal ikke betale noe!";
	} else if (alder < 18) {
		melding = "Du skal betale 18 kr";
	} else if (alder < 65) {
		melding = "Du skal betale 36 kr";
	} else {
		melding = "Du skal betale 18 kr";
	}
</script>

<h1>Hva skal du betale på ruter?</h1>
<label>Alder: <input type="number" bind:value={alder} min="0" /></label>
<p>
	{melding}
</p>
