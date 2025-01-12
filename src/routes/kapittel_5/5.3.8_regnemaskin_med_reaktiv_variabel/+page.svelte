<script>
	let a = 5
	let b = 2
	let c = a+b
	let	d = a-b
	
</script>

<input bind:value={a} type="number"> +  <input bind:value={b} type="number"> = {c}<br>
<input bind:value={a} type="number"> - <input bind:value={b} type="number"> = {d}<br>
<style>
	input{
		width: 2rem;
	}
</style>
