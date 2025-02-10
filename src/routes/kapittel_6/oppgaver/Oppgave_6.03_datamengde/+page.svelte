<script>
	let datamengde = $state(0);
	let grunnpris = $state(129);
	let månedsavgift = $state(0)
	let dataIntervall = $state([0, 1, 3, 5, 10])
	let pris = $state([79, 149, 199, 299])
	$effect(()=>{
		for(let i=0; i<4; i++){
			if(dataIntervall[i]<=datamengde && datamengde < dataIntervall[i+1]){
				console.log(i, dataIntervall[i+1], datamengde)
				månedsavgift = grunnpris + pris[i]
			}
		}
	})
</script>
<h2>Hvor stor datamengde skal du ha?</h2>
<label>Datamengde <input type="number" bind:value={datamengde} step={0.5} min={0} max={10}></label>
Du skal betale en månedsavgift på: {månedsavgift}