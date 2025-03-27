<script>
// @ts-nocheck

	// Private nøkler til Johan Hake
	const KEY = "03cd9032d6135f19fe1fac56f7e04207"
	const ACCES_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2NkOTAzMmQ2MTM1ZjE5ZmUxZmFjNTZmN2UwNDIwNyIsIm5iZiI6MTYyMjUzNjE1My42NTUsInN1YiI6IjYwYjVlZmQ5YWJmOGUyMDA1OTZiYjgzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UUqD4W7SrLOC-38PHkWgxnRFp-WhhVYgJWh16IVMr74"

	const BASEURL = "https://api.themoviedb.org/3/"
	const SPRÅK = "&language=en-US" // no-No
	const POSTERURL = "http://image.tmdb.org/t/p/w500"
	
	let page = 1
	let totalPages = 1
	let søkeTekst = ""
	let filmListe = []
	let antallFilmer = 0
	let url =""

	const søkFilmer = async(pageLocal) => {
		const SØKE_TEKST = søkeTekst.split(" ").join("+")
		url = BASEURL + "search/movie?api_key=" + KEY + SPRÅK + "&include_adult=false&query=" + SØKE_TEKST + "&page=" + pageLocal;
		console.log(url)
		const data = await fetch(url, {
			'Authorization': 'Bearer ' + ACCES_TOKEN,
			'Content-Type': 'application/json;charset=utf-8'
		});
		const json = await data.json();
		filmListe = json.results
		totalPages = json.total_pages
		page = pageLocal
		antallFilmer = json.total_result
	};

	// Neste siden
	const nesteSide = ()=>{
		if (page < totalPages){
			page += 1
			søkFilmer(page)
		}
	}


</script>


<h1>Filmer</h1>

<label>Søk etter film: <input type="text" on:change={()=>{søkFilmer(1)}} bind:value={søkeTekst}></label>

<h5>URL:</h5>
<pre>{url}</pre>

<h2>Resultat</h2>
{page} of {totalPages}
<button on:click={nesteSide}>neste</button>
<section>
{#each filmListe as film}
<article>
	<h3>{film.original_title}</h3>
	<img src="{POSTERURL + film.poster_path}" alt="">
	<p>
		{film.overview}
	</p>
</article>


{/each}
</section>

<style>
	section{
		display: grid;
		grid-template-columns: repeat(4, 200px);
		gap: 10px;
	}
	section article img{
		width: 100%;
	}
</style>