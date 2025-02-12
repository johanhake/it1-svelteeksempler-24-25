<script>
// @ts-nocheck

	let start = 0;
	let slutt = 4;
	const summer = (a, b) => {
		let sum = 0;
		for (let i = a; i <= b; i++) {
			console.log("i", i);
			sum += i;
		}
		return sum;
	};
</script>

<h2>Summere tall</h2>
<label>Start <input type="number" bind:value={start} /></label>
<label>Slutt <input type="number" bind:value={slutt} /></label>
Summen av tallene mellom {start} og {slutt} er: {summer(start, slutt)}
