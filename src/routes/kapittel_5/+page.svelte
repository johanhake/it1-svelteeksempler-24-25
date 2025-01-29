<script>
	const eksempler = [
		[
			{ nr: "5.2.2", navn: "Regnemesteren" },
			{ nr: "5.2.3", navn: "Areal av vegg" },
			{ nr: "5.2.4", navn: "Datatyper" },
			{ nr: "5.2.5", navn: "Konkatenering" },
		],
		[
			{ nr: "5.3.1", navn: "Invitasjon" },
			{ nr: "5.3.2", navn: "Bruk av Math" },
			{ nr: "5.3.3", navn: "Omkretsen til en sirkel" },
			{ nr: "5.3.4", navn: "String metoder" },
			{ nr: "5.3.5", navn: "Sette farge til en overskrift" },
			{ nr: "5.3.8", navn: "Regnemaskin med reaktiv variabel" },
			{ nr: "5.3.9", navn: "Areal av rektangel" },
			{ nr: "5.3.x", navn: "Andregrads-funksjon" },
		],
		[
			{ nr: "5.4.1", navn: "Sant usant" },
			{ nr: "5.4.2", navn: "If-setning" },
			{ nr: "5.4.3", navn: "Ruter bilett" },
			{ nr: "5.4.4", navn: "Rik og eller berømt" },
			{ nr: "5.4.5", navn: "Gaming" },
			{ nr: "5.4.6", navn: "Ruter bilett svelte" },
			{
				nr: "5.4.6.5",
				navn: "Ruter bilett svelte med spørsmåls-operator",
			},
			{ nr: "5.4.7", navn: "Sammenligne tekster" },
			{ nr: "5.4.8", navn: "Rik og eller berømt svelte" },
		],[
			{nr:"5.5.1", navn: "Telle antall tegn og ord"},
			{nr:"5.5.2", navn: "Grense for antall tegn tilatt"},
			{nr:"5.5.3", navn: "Sjekk svar fra Quiz"},
			{nr:"5.5.4", navn: "Finn ordet i en tekst"},
		],[
			{nr:"5.6.1", navn: "Bytt ordet med en funksjon"},
			{nr:"5.6.2", navn: "Bytt president i USA"},
			{nr:"5.6.3", navn: "Øke verdi når vi klikker på en knapp"},
			{nr:"5.6.4", navn: "Snurre en tekst rundt når vi klikker på en knapp"},
			{nr:"5.6.5", navn: "Funksjon med to parameterer"},
			{nr:"5.6.6", navn: "Endre navn med klikk på en knapp"},
			{nr:"5.6.x", navn: "Andregradslikning"},
		]
	];

	const oppgaver = [
		[
			{ nr: "5.01", navn: "Grunnstoff" },
			{ nr: "5.02", navn: "Tre små kineser" },
			{ nr: "5.03", navn: "Adjektivhistorie" },
		],
		[
			{ nr: "5.04", navn: "Geometri" },
			{ nr: "5.05", navn: "Telefonnummer" },
			{ nr: "5.06", navn: "Konstanter" },
			{ nr: "5.07", navn: "bokstav" },
			{ nr: "5.08", navn: "Dele opp" },
			{ nr: "5.09", navn: "Regneopperasjon" },
			{ nr: "5.10", navn: "Skandinaviske tegn" },
			{ nr: "5.11", navn: "Celsius farenheit" },
			{ nr: "5.12", navn: "Pig latin" },
			{ nr: "5.13", navn: "Glider" },
		],
		[
			{ nr: "5.14", navn: "Hello world" },
			{ nr: "5.15", navn: "Kalkulator" },
			{ nr: "5.16", navn: "Beregninger" },
			{ nr: "5.18", navn: "Pig latin II" },
			{ nr: "5.19", navn: "Vektorprodukt" },
		],[
			{ nr: "5.21", navn: "True eller false" },
			{ nr: "5.22", navn: "Større enn" },
			{ nr: "5.23", navn: "Kvakk" },
			{ nr: "5.24", navn: "Høyde" },
			{ nr: "5.25", navn: "Grunnstoff" },
			{ nr: "5.26", navn: "Minibank" },
			{ nr: "5.27", navn: "Surt" },
		],
	];

	const antall_oppgaver =
		oppgaver.reduce((sum, element) => {
			return sum + element.length;
		}, 0) + oppgaver.length;

	// Variabel for å vise oppgaver
	let vis_oppgaver = false;
</script>

<main>
	<h1>Eksempler fra kap 5</h1>

	<div class="eksempler">
		{#each eksempler as undereksempler, under_indeks}
			<div>
				{#each undereksempler as eks, eks_indeks}
					{#if eks_indeks == 0}
						<h3>Eksempler fra 5.{under_indeks + 2}</h3>
					{/if}
					<a
						href="/kapittel_5/{eks.nr.slice(
							0,
							3,
						)}_eksempler/{eks.nr}_{eks.navn
							.toLowerCase()
							.split(' ')
							.join('_')}">{eks.nr} {eks.navn}</a
					>
				{/each}
			</div>
		{/each}
	</div>

	<button
		id="vis-oppgaver"
		style="background-color:{vis_oppgaver ? 'LightSalmon' : 'YellowGreen'}"
		on:click={() => {
			vis_oppgaver = !vis_oppgaver;
		}}
		title="Vis løsningsforslag"
		><h1>Løsningsforslag oppgaver fra kap 5</h1></button
	>
	{#if vis_oppgaver}
		<div
			class="oppgaver"
			style="height:{2.5 * (antall_oppgaver / eksempler.length)}em"
		>
			{#each oppgaver as underoppgaver, under_indeks}
				<h4>Kapittel {under_indeks + 1}</h4>
				{#each underoppgaver as oppgave}
					<a
						href="/kapittel_5/oppgaver/oppgave_{oppgave.nr}_{oppgave.navn
							.toLowerCase()
							.split(' ')
							.join('_')}"
						style="width:{100 / eksempler.length - 5}%"
						>{oppgave.nr} {oppgave.navn}</a
					>
				{/each}
			{/each}
		</div>
		{console.log(100 / eksempler.length)}
	{/if}
</main>

<style>
	button {
		width: 100%;
	}

	h1 {
		padding: 0.5em;
	}

	h4 {
		margin: 0;
		padding: 0.5em;
	}

	#vis-oppgaver:hover {
		cursor: pointer;
		background-color: antiquewhite;
	}

	.oppgaver {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}

	.eksempler {
		display: flex;
		gap: 10px;
	}
	.eksempler > div,
	.oppgaver {
		flex: 0 1 250px;
		display: flex;
		flex-direction: column;
	}
	.eksempler > div > h3 {
		text-align: center;
	}
	.eksempler > div a,
	.oppgaver a {
		text-decoration: none;
		padding: 0.5em;
	}
	.eksempler > div a:hover,
	.oppgaver a:hover {
		background-color: antiquewhite;
	}
</style>
