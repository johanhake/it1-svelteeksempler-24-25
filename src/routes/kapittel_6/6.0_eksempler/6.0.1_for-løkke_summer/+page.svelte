<script>
	let start=0
	let slutt=4
	let sum = 0
	$:{
		sum = 0
		for(let i=start; i<=slutt; i++){
			sum += i
		}
	}
</script>
<h2>Summere tall</h2>
<label>Start <input type="number" bind:value={start}></label>
<label>Slutt <input type="number" bind:value={slutt}></label>
Summen av tallene mellom {start} og {slutt} er: {sum}