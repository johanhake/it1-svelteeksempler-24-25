<script>
	let farge = "darkorange"
	let fontSize = 16
</script>

<h1 style="color: {farge}; font-size:{fontSize}px">Inline CSS</h1>
<input bind:value={farge}>
<input type="number" bind:value={fontSize}>


<style>
/*	h1{
		color: {farge}; FEIL!
	}*/
</style>
