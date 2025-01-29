<script>
	let tekst =
		"Lille Petter Edderkopp. Han klatret på min hatt. Så begynte det å regne og Petter ned han datt. Så kom solen og skinte på min hatt. Da ble det liv i Petterkopp som klatret på min hatt";

	let søkeord = "mai";

	// Vis teksten og uthev funnet søkeord med hjelp av tekst.replace(søkeord, ...)
	// Bruk {@html tekstHTML} for å rendrere html i teksten
	// Hvordan hindre at tom søkestreng vises?
	// Kan vi bruke noe annet en replace? Hva med split og join?
</script>

<input bind:value={søkeord} />
{#if tekst.includes(søkeord)}
	<p>Søkeordet er funnet i teksten</p>
	{tekst.replace(søkeord, "<b>" + søkeord + "</b>")}
{:else}
	<p>Søkeordet er <b>ikke</b> funnet i teksten</p>
	{tekst}
{/if}
