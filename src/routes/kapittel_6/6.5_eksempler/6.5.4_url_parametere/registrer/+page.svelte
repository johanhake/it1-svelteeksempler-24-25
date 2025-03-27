<script>

	// Bruker page for å hente ut url parametre
	import { page } from '$app/state';

    const url = page.url;
    const navn = url.searchParams.get('navn')
	const drikke = url.searchParams.get('drikke')
	const velgMat = url.searchParams.get('velgMat')

</script>
<a href="/kapittel_6/6.5_eksempler/6.5.4_url_parametere">Tilbake</a>
<h1>Tusen takk for din bestilling {navn}</h1>
Du har bestilt {drikke} til å drikke og {velgMat} til å spise.