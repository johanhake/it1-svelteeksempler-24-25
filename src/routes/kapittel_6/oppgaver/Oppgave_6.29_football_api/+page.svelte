<script>
	// @ts-nocheck

	const KEY = 'ae8a52ba653e46ec4e5d4ecad97af6da';

	let myHeaders = new Headers();
	myHeaders.append('x-rapidapi-key', KEY);
	myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io');

	let resultat;

	let requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	const hente = async () => {
		const data = await fetch('https://v3.football.api-sports.io/leagues?id=585', requestOptions);
		resultat = await data.json();
		console.log(resultat.response);

	};

	hente();
</script>

<h1>Football</h1>

<ul>
	{#if resultat}
	{#each resultat.response as res, indeks}
	<li>League: {indeks}: {res.league.name} : {res.league.id}</li>
	{/each}
	{/if}
</ul>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(4, 200px);
		gap: 10px;
	}

	section article img {
		width: 100%;
	}
</style>
