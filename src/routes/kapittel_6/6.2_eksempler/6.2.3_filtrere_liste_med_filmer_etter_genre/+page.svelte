<script>
	let filmene = [
	  {tittel: "The Shining", genre: "Skrekk"},
	  {tittel: "Alien", genre: "Skrekk"},
	  {tittel: "Hot Shots", genre: "Komedie"},
	  {tittel: "Panserkrysseren Potemkin", genre: "Drama"}
	]

	  let genre = "Komedie"

	$:skrekkfilmer = filmene.filter(film => film.genre === genre)
  </script>

  <select bind:value={genre}>
	  <option value="Skrekk">Skrekk</option>
	  <option value="Komedie">Komedie</option>
	  <option value="Drama">Drama</option>
  </select>

  <ul>
	{#each skrekkfilmer as film}
	  <li>{film.tittel}</li>
	{/each}
  </ul>
