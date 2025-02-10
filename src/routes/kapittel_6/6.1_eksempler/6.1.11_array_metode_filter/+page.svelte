<script>
	let grense = 10
	let tallene = [2, 14, 43, 1, 32]
	let over_ti = tallene.filter(tall=>tall>grense)
  </script>
<label for="">Vis tall større enn eller lik:
	<input type="number" bind:value={grense}>
</label>
  <p>{over_ti.join(", ")}</p>
