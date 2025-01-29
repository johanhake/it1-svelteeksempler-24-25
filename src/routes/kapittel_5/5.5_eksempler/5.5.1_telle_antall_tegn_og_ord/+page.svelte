<script>
	let tekst = "Tekst i et tekstfelt"
	// Hvordan kan vi fikse slik at antall ord blir telt?
</script>

<textarea value={tekst}></textarea>
<p>
	Du har nå skrevet {tekst.length} tegn ord
</p>

<style>
	textarea {
		width: 300px;
		height: 250px;
	}
</style>
