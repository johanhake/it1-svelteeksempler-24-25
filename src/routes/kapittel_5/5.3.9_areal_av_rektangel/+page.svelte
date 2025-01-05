<script>
	let lengde = 200
	let bredde = 80
	$: areal = lengde * bredde
	$: omkrets = 2*lengde + 2*bredde
</script>

<header>
	Lengde (m): <input type="range" min="150" max="800" bind:value={lengde}> {lengde} m<br>
	Bredde (m): <input type="range" min="40" max="400" bind:value={bredde}> {bredde} m
</header>
Omkrets: {omkrets} m
<main>
	<div style="width: {lengde}px; height: {bredde}px">
		Arealet er {areal} m<sup>2</sup>
	</div>
</main>

<style>
	main {
		height: 75vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	div {
		background-color: darkorange;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.2s;
	}
</style>
