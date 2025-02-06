<script>
	// @ts-nocheck
	import varer from  "./varer.json"

	let produkter = [];
	let merke = 'revlon';
	let unikeTall = new Set([3,4,5,4,3,2,5,6])
	let unikeMerker = new Set(varer.map(a=>a.brand).sort())
	// Vi kan nå fortsette å lage en nedtreksmeny for merker!
	console.log(unikeMerker)

	const getProdukter = async () => {
		const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=' + merke;
		const data = await fetch(url);
		const json = await data.json();
		produkter = json;
	};

	getProdukter();
</script>

<nav>
	<label>Vis produktene til:
	<input bind:value={merke} ></label>
	<button on:click={getProdukter}>OK</button>
</nav>

<section>
	{#each produkter as produkt}
		<article>
			<img src={produkt.image_link} alt="Produkt" >
			<div>{produkt.name}</div>
		</article>
	{:else}
		<p>Laster inn sminke...</p>
	{/each}
</section>

<style>


</style>
