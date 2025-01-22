<script>
	let a = $state(5)
	let b = $state(2)
	let c = $derived(a+b)
	let	d = $derived(a-b)
	
</script>

<input bind:value={a} type="number"> +  <input bind:value={b} type="number"> = {c}<br>
<input bind:value={a} type="number"> - <input bind:value={b} type="number"> = {d}<br>
<style>
	input{
		width: 2rem;
	}
</style>
