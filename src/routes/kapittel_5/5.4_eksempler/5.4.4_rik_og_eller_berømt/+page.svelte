<script>
	let rik = $state(false);
	let berømt = $state(true);
	let melding = $state("Du kommer ikke inn 😢");
	// Test med både || og &&
	$effect(() => {
		if (rik && berømt) {
			melding = "Du kommer inn 🥳";
		} else {
			melding = "Du kommer ikke inn 😢";
		}
	});
</script>

<h1>{melding}</h1>
<label><input type="checkbox" bind:checked={rik} /> rik</label><br />
<label><input type="checkbox" bind:checked={berømt} /> berømt</label>
