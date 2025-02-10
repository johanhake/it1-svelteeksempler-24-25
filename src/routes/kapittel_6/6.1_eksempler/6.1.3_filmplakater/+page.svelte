<script>
	let plakater = ['harry-potter.jpg', 'hunger-games.jpg', 'lotr.jpg'];
	let i = 0;
	const vis_neste = () => {
		// Bruk av mod for økning av indeks
		//i = (i + 1 ) % 3;

		i = i - 1
		// Bruk av if
		if(i<0){
			i = plakater.length - 1
		}
	};
</script>

<button on:click={vis_neste}>Vis neste plakat ▶️</button><br />
<img src="/bilder/{plakater[i]}" alt="Poster" />

<style>
	img {
		height: 80vh;
		object-fit: contain;
	}
</style>
