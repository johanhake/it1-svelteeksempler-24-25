<script>
// @ts-nocheck

	let person = ""
	const hentPerson = async () => {
		const data = await fetch("https://kode-1.github.io/person.json");
		const json = await data.json()
		person = json
	}
	hentPerson()
</script>

{#if person}
	<p>Navn: {person.navn}</p>
	<p>Alder: {person.alder}</p>
{:else}
	<p>Henter data...</p>
{/if}
