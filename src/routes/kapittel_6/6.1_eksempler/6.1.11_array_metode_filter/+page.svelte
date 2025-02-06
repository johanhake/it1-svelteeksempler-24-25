<script>
	let grense = 10
	let tallene = [2, 14, 43, 1, 32]
	$: overTi = tallene.filter((tall)=>tall>grense)
  </script>
<label for="">Vis tall større enn eller lik:
	<input type="number" bind:value={grense}>
</label>
  <p>{overTi.join(", ")}</p>
