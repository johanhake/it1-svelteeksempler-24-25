<script>
	let radius = 10
	const PI = Math.PI
</script>

<label for="tall">Oppgi radius i antall cm: <input id="tall" type="number" bind:value={radius}></label>

<p>
	Omkretsen til sirkelen er {(2*PI*radius).toFixed(2)} cm
</p>
