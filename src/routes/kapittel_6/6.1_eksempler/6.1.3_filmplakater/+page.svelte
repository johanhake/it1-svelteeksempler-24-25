<script>
	let plakater = ["https://kode-1.github.io/harry-potter.jpg",
									  "https://kode-1.github.io/hunger-games.jpg",
									  "https://kode-1.github.io/lotr.jpg"]
	let i = 0
	const visNeste = () => {
	  i++
		  if(i==3){
			  i = 0
		  }
		  // i = (i+1)%3
	}
  </script>

  <button on:click={visNeste}>Vis neste plakat ▶️</button><br>
  <img src={plakater[i]} alt="Poster">

  <style>
	  img {
		  height: 80vh;
		  object-fit: contain;
	  }
  </style>
