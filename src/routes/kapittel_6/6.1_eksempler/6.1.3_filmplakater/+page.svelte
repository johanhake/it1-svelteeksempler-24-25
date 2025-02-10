<script>
	let plakater = ['harry-potter.jpg', 'hunger-games.jpg', 'lotr.jpg'];
	let i = 0;
	const vis_neste = () => {
		i = i + 1;
	};
</script>

<button on:click={vis_neste}>Vis neste plakat ▶️</button><br />
<img src={plakater[i]} alt="Poster" />

<style>
	img {
		height: 80vh;
		object-fit: contain;
	}
</style>
