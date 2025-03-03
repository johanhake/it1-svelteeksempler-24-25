<script>
// @ts-nocheck

let elever = $state([
		{ fornavn: "Abbas", etternavn: "Ahmadi", klasse: "2STE" },
		{ fornavn: "Abdalla", etternavn: "Mohamed-Sharif", klasse: "2STB" },
		{ fornavn: "Ahad", etternavn: "Sajid", klasse: "2STB" },
		{ fornavn: "Ali", etternavn: "Gondal", klasse: "3STE" },
		{ fornavn: "Arsam", etternavn: "Nasar", klasse: "2STB" },
		{ fornavn: "Birk", etternavn: "Eilertsen", klasse: "3STB" },
		{ fornavn: "Henry", etternavn: "Tran", klasse: "2STE" },
		{ fornavn: "Leon", etternavn: "Almli", klasse: "3STE" },
		{ fornavn: "Margrethe", etternavn: "Gøthesen", klasse: "2STC" },
		{ fornavn: "Martin", etternavn: "Farahi", klasse: "3STA" },
		{ fornavn: "Martin", etternavn: "Larsen", klasse: "2STC" },
		{ fornavn: "Philip", etternavn: "Schytt", klasse: "2STD" },
		{ fornavn: "Rehman", etternavn: "Shah", klasse: "2STB" },
		{ fornavn: "Sergei", etternavn: "Titov", klasse: "3STE" },
		{ fornavn: "Simen", etternavn: "Mathiesen", klasse: "3STB" },
		{ fornavn: "Sondre", etternavn: "Arnesen", klasse: "3STC" },
		{ fornavn: "Tymofii", etternavn: "Chernata", klasse: "3STE" },
	])
	
	// Setter alle elever til å være tilstede
	for (let elev of elever){
		elev.tilstede = true
	}

	// Variabel for å vise eller ikke vise bildene
	let viseBilder = $state(false);

	// Variabler brukt for å søke
	let søkHva = $state("")
	let søkTekst = $state("")
	let ikkeSøking = $derived(søkHva === "" || søkTekst === "")

	// Reaktiv variabel som teller antall tilstede
	let tilstede = $derived(elever.filter(a=>a.tilstede).length)

	// Lytterfunksjon for å registrere tilstedeværelese for elev
	const byttTilstede = (elev)=>{
		elev.tilstede = !elev.tilstede
		elever = elever
	}

	// Lytterfunksjon med parameter for hva som skal sorteres etter
	const sorter = (hva) =>{
		// Sortere hva etter stigende rekkefølge
		if (stigende[hva]){
			elever = elever.sort((a,b)=>a[hva].localeCompare(b[hva]))
		}else{
			elever = elever.sort((a,b)=>b[hva].localeCompare(a[hva]))
		}
		stigende[hva] = !stigende[hva]

	}

	// Objekt for å holde hvilken vei vi skal sortere
	let stigende = {
		fornavn: true,
		etternavn: true,
		klasse: true
	}

	</script>
	<h2>
		Informasjonsteknologi 1
	</h2>
	<h3>Lærer: Johan Hake</h3>
	<img class="bilde" src="/klassebilder/Johan_Hake.jpg" alt="Hake">
	<h3>Tilstede: {tilstede} elever</h3>
	<label><input type="checkbox" bind:checked={viseBilder}>Vise bilder</label><br>
	<label for="">
		<select bind:value={søkHva}>
			<option value="">Søk etter</option>
			<option value="fornavn">Fornavn</option>
			<option value="etternavn">Etternavn</option>
			<option value="klasse">Klasse</option>
		</select>
		<input type="text" bind:value={søkTekst}>
	</label>
	<table>
		<thead>
			<tr>
				<th on:click={()=>{sorter("fornavn")}}>Fornavn {stigende.fornavn ? "▼":"▲"}</th>
				<th on:click={()=>{sorter("etternavn")}}>Etternavn {stigende.etternavn ? "▼":"▲"}</th>
				<th on:click={()=>{sorter("klasse")}}>Klasse {stigende.klasse ? "▼":"▲"}</th>
				{#if viseBilder}
				<th class="bilde">Bilde</th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#each elever as elev}
				{#if ikkeSøking || elev[søkHva].toLowerCase().includes(søkTekst.toLowerCase())}
				<tr on:click={()=>{byttTilstede(elev)}}>
					<td class={elev.tilstede ? "tilstede" : ""}>{elev.fornavn}</td>
					<td class={elev.tilstede ? "tilstede" : ""}>{elev.etternavn}</td>
					<td class="klasse {elev.tilstede ? "tilstede" : ""}">{elev.klasse}</td>
					{#if viseBilder}
						<td class="bilde"><img class={!elev.tilstede ? "bilde-ikke-tilstede": ""} src="/klassebilder/{elev.fornavn}_{elev.etternavn}.png" alt=""></td>
					{/if}
				</tr>
				{/if}
			{/each}
		</tbody>
	</table>
	<style>
		table{
			border-collapse: collapse;
			border: black 2px solid;
		}
		thead tr{
			background-color: lightgreen;
		}
		tbody tr:nth-child(even){
			background-color: lightgreen;
		}
		td, th {
			width: 7em;
			border: black 1px solid;
			padding: 0.2em;
		}
		.bilde {
			width: 5em;
		}
		tr:hover{
			cursor: pointer;
		}

		td img{
			height: 4em;
			border: 3px rgba(0,0,0,0) solid;
		}
		.bilde-ikke-tilstede{
			border: 3px red solid
		}
		.klasse{
			text-align: center;
		}

		.tilstede{
			font-weight:bold;
		}
</style>