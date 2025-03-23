<script>
// @ts-nocheck

	// Bruker page for å hente ut url parametre
	import { page } from '$app/stores';

	// Åpner json filen for å hente ut vare
	import varer from "../nettbutikk.json";

    const url = $page.url;
    const vareIndeks = url.searchParams.get('vare')
	const vare = varer[vareIndeks]

</script>
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.1/css/foundation.min.css"
/>

<header>
	<nav>
		<a class="button success" href="/prosjekt/nettbutikk">Tilbake</a>
	</nav>
</header>
<main>
	<h2>{vare.type} {vare.navn} <i>{vare.pris} kr</i></h2>
	<img src="/butikkbilder/{vare.bilde}" alt="" />
	<p>{vare.beskrivelse}</p>
</main>

<style>

	main{
		width: 50%;
		margin: 0 auto;
	}
	header nav {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}
</style>