<script>
// @ts-nocheck

	import svenskeByerOgFylker from "./svenske_byer_og_fylker.json";

	let byer = svenskeByerOgFylker.byer;
	let fylker = svenskeByerOgFylker.fylker;

	let viserBy = byer[0];

	let valgtFylke = "";

	const visBy = (by)=>{
		viserBy = by
	}

	const velgFylke = (fylke) => {
		console.log(fylke);
		valgtFylke = fylke;
	};

	const sorterFylker = () => {
		byer = byer.sort((a, b) => a.fylke.localeCompare(b.fylke));
	};
	const sorterNavn = () => {
		byer = byer.sort((a, b) => a.navn.localeCompare(b.navn));
	};
</script>

<h1>Oppgave 4 Svenske byer og fylker (8p)</h1>

<div class="container">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		on:click={() => {
			velgFylke("");
		}}
	>
		<h4>Alle fylker</h4>
	</div>
	{#each fylker as fylke}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => {
				velgFylke(fylke.navn);
			}}
		>
			<h4>{fylke.navn}</h4>
			<img src="/vaapen/{fylke.bilde}" alt="" />
		</div>
	{/each}
</div>

<h2>Byer</h2>
<button on:click={sorterNavn}>Sorter navn</button>
<button on:click={sorterFylker}>Sorter fylker</button>
<div class="container">
	{#each byer as by}
		{#if valgtFylke === "" || by.fylke === valgtFylke}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={()=>{visBy(by)}}>
				<h4>{by.navn}</h4>
				<h3>{by.fylke}</h3>
				<img src="/vaapen/{by.bilde}" alt="" />
			</div>
		{/if}
	{/each}
</div>

<h2>{viserBy.navn}</h2>
<h3>{viserBy.fylke}</h3>
<img src="/vaapen/{viserBy.bilde}" alt="">

<style>
	.container img {
		width: 100px;
	}

	.container {
		display: flex;
		gap: 20px;
	}

	.container div {
		cursor: pointer;
		text-align: center;
	}
</style>
