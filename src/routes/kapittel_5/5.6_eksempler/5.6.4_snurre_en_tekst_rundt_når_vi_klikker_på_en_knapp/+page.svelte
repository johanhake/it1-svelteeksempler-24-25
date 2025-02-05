<script>
	let runder = 0
	const snurr = () => {
		runder += 1
	}
</script>

<button on:click={snurr}>Snurr en runde</button>
<!-- Bruk transform: rotate(Xturn) -->
<p style="transform: rotate({runder}turn)">
	Nå har jeg snurret {runder} ganger
</p>

<style>
	p {
		width: 200px;
		background-color: steelblue;
		padding: 10px;
		color: white;
		transition: 0.5s;
	}
</style>
