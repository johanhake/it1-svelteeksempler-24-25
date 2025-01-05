<script>
	let radius = 10
</script>

<label for="tall">Oppgi radius i antall cm: </label>
<input id="tall" type="number" bind:value={radius}>
<p>
	Omkretsen til sirkelen er {(2*Math.PI*radius).toFixed(2)} cm
</p>
