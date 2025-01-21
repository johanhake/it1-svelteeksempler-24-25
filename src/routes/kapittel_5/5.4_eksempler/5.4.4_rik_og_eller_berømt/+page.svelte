<script>
	let rik = true
	let berømt = true
	let melding = "Du kommer ikke inn 😢"
	// Test med både || og &&
	if(rik && berømt) {
		melding = "Du kommer inn 🥳"
	}

</script>

<h1>{melding}</h1>
<label><input type="checkbox" bind:checked={rik}> rik</label><br>
<label><input type="checkbox" bind:checked={berømt}> berømt</label>