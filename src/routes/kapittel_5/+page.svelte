<script>
	const eksempler = [
		[
			{nr:"5.2.2", navn: "Regnemesteren"},
			{nr:"5.2.3", navn: "Areal av vegg"},
			{nr:"5.2.4", navn: "Datatyper"},
			{nr:"5.2.5", navn: "Konkatenering"},
		],[
			{nr:"5.3.1", navn: "Invitasjon"},
			{nr:"5.3.2", navn: "Bruk av Math"},
			{nr:"5.3.3", navn: "Omkretsen til en sirkel"},
			{nr:"5.3.4", navn: "String metoder"},
			{nr:"5.3.5", navn: "Sette farge til en overskrift"},
			{nr:"5.3.8", navn: "Regnemaskin med reaktiv variabel"},
			{nr:"5.3.9", navn: "Areal av rektangel"},
		]
	];

	const oppgaver = [
		{nr:"5.01", navn: "Grunnstoff"},
		{nr:"5.02", navn: "Tre små kineser"},
		{nr:"5.03", navn: "Adjektivhistorie"},
		{nr:"5.04", navn: "Geometri"},
		{nr:"5.05", navn: "Telefonnummer"},
		{nr:"5.06", navn: "Konstanter"},
		{nr:"5.07", navn: "bokstav"},
		{nr:"5.08", navn: "Dele opp"},
		{nr:"5.09", navn: "Regneopperasjon"},
		{nr:"5.10", navn: "Skandinaviske tegn"},
		{nr:"5.11", navn: "Celsius farenheit"},
		{nr:"5.12", navn: "Pig latin"},
		{nr:"5.13", navn: "Glider"},
		{nr:"5.14", navn: "Hello world"},
		{nr:"5.15", navn: "Kalkulator"},
		]

	// Vartiabel for å vise oppgaver
	let vis_oppgaver = false;

</script>
<main>
<h1>Eksempler fra kap 5</h1>

<div class="eksempler">
{#each eksempler as undereksempler, under_indeks}
	<div>
		{#each undereksempler as eks, eks_indeks}
			{#if eks_indeks == 0}
				<h3>Eksempler fra 5.{under_indeks+2}</h3>
			{/if}
			<a href="/kapittel_5/{eks.nr}_{(eks.navn.toLowerCase().split(" ").join("_"))}">{eks.nr} {eks.navn}</a>
		{/each}
	</div>
	{/each}
</div>

<h1 id="vis-oppgaver" on:click={()=>{vis_oppgaver=!vis_oppgaver}} title="Vis løsningsforslag">Løsningsforslag oppgaver fra kap 5</h1>
{#if vis_oppgaver}
<div class="oppgaver" style="height:{2.5*(oppgaver.length/eksempler.length)}em">
{#each oppgaver as oppgave}
	<a href="/kapittel_5/oppgave_{oppgave.nr}_{(oppgave.navn.toLowerCase().split(" ").join("_"))}" style="width:{100/eksempler.length-5}%">{oppgave.nr} {oppgave.navn}</a>
{/each}
</div>
{console.log(100/eksempler.length)}
{/if}
</main>
<style>
	h1{
		padding:0.5em;
	}

	#vis-oppgaver:hover{
		cursor: pointer;
		background-color: antiquewhite;
	}

	.oppgaver{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}

	.eksempler{
		display: flex;
		gap: 10px;
	}
	.eksempler > div, .oppgaver{
		flex: 0 1 250px;
		display: flex;
		flex-direction: column;
	}
	.eksempler > div > h3{
		text-align: center;
	}
	.eksempler > div a, .oppgaver a{
		text-decoration: none;
		padding: 0.5em;
	}
	.eksempler > div a:hover, .oppgaver a:hover{
		background-color: antiquewhite;
	}
</style>
