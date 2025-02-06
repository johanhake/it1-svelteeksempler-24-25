<script>
	let sprintere = [
		{ navn: 'Gløer Langslet', tid: 9.5 },
		{ navn: 'Usain Bolt', tid: 9.58 },
		{ navn: 'Asafa Powell', tid: 9.74 }
	];

	// La til funksjonalitet for å sortere etter befolkning
	const sorterTider = () => {
		sprintere = sprintere.sort((a, b) => a.tid - b.tid);
	};

	const sorterNavn = () => {
		sprintere = sprintere.sort((a, b) => a.navn.localeCompare(b.navn));
	};
</script>

<h1>Info om noen sprintere</h1>
<button on:click={sorterTider}>Sorter etter tid</button>
<button on:click={sorterNavn}>Sorter etter navn</button>
<ol>
	{#each sprintere as sprinter}
  <li>{sprinter.navn} : {sprinter.tid}</li>
  {/each}
</ol>
