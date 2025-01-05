<script>
	let a = 5
	let b = 2
	let c = 0, d= 0
	$:{
		c = a + b
		d = a - b
	}
</script>

<input bind:value={a} type="number">
<span> + </span>
<input bind:value={b} type="number">
<span> = </span>
<span> {c} </span><br>
{a}-{b}={d}
<style>
	input{
		width: 80px;
	}
</style>
