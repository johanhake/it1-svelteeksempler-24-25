<script>
	let datamengde = 0;
	let grunnpris = 129;
	let månedsavgift = 0
	let dataIntervall = [0, 1, 3, 5, 10]
	let pris = [79, 149, 199, 299]
	$:{
		for(let i=0; i<4; i++){
			if(dataIntervall[i]<=datamengde && datamengde < dataIntervall[i+1]){
				console.log(i, dataIntervall[i+1], datamengde)
				månedsavgift = grunnpris + pris[i]
			}
		}
	}
</script>
<h2>Hvor stor datamengde skal du ha?</h2>
<label>Datamengde <input type="number" bind:value={datamengde} step={0.5} min={0} max={10}></label>
Du skal betale en månedsavgift på: {månedsavgift}