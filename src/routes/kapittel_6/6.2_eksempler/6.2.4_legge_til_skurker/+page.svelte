<script>
	let skurker = [
		{ navn: "Pingvinen", fiende: "Lynvingen" },
		{ navn: "B-Gjengen", fiende: "Onkel Skrue" },
		{ navn: "Lex Luthor", fiende: "Supermann" },
	];

	skurker.push({ navn: "Thanos", fiende: "Avengers" });
	skurker.push({ navn: "Voldemort", fiende: "Harry Potter" });

	let skurkNavn = "";
	let fiendeNavn = "";

	// Lytterfunksjon for å legge til skurk
	const leggTilSkurk = () => {
		skurker.push({ navn: skurkNavn, fiende: fiendeNavn });
		skurkNavn = "";
		fiendeNavn = "";
		skurker = skurker
	};
</script>

<h1>Skurker</h1>

<label>Skurk</label><input type="text" bind:value={skurkNavn} />
<label>Fiende</label><input type="text" bind:value={fiendeNavn} />
<button on:click={leggTilSkurk}>Registrere</button>

{#each skurker as skurk}
	<article>
		<h1>{skurk.navn}</h1>
		<p>Fiende: {skurk.fiende}</p>
	</article>
{/each}
