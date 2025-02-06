<script>
// @ts-nocheck

	let elever = [
	{
		fornavn: "Kristian",
		etternavn: "Bakken",
		kjønn: "M",
		klasse: "2STA"
	},
	{
		fornavn: "Thomas",
		etternavn: "Berg",
		kjønn: "M",
		klasse: "2STA"
	},
	{
		fornavn: "Cato",
		etternavn: "Havig",
		kjønn: "M",
		klasse: "2STA"
	},
	{
		fornavn: "Martin",
		etternavn: "Klausen",
		kjønn: "M",
		klasse: "2STA"
	},
	{
		fornavn: "Lukas",
		etternavn: "Sørbu",
		kjønn: "M",
		klasse: "2STA"
	},
	{
		fornavn: "William",
		etternavn: "Feren",
		kjønn: "M",
		klasse: "2STB"
	},
	{
		fornavn: "Sander",
		etternavn: "Notstad",
		kjønn: "M",
		klasse: "2STB"
	},
	{
		fornavn: "Tobias",
		etternavn: "Rian",
		kjønn: "M",
		klasse: "2STC"
	},
	{
		fornavn: "Abdallah",
		etternavn: "Minta",
		kjønn: "M",
		klasse: "2STD"
	},
	{
		fornavn: "Linus",
		etternavn: "Dragland",
		kjønn: "M",
		klasse: "2STE"
	},
	{
		fornavn: "Marthe",
		etternavn: "Asbjørnsen",
		kjønn: "F",
		klasse: "2STF"
	},
	{
		fornavn: "Aksel ",
		etternavn: "Banelind",
		kjønn: "M",
		klasse: "2STF"
	},
	{
		fornavn: "Herman",
		etternavn: "Ly",
		kjønn: "M",
		klasse: "2STF"
	},
	{
		fornavn: "Tristan",
		etternavn: "Mietle",
		kjønn: "M",
		klasse: "2STF"
	},
	{
		fornavn: "Gurveer",
		etternavn: "Singh",
		kjønn: "M",
		klasse: "2STF"
	},
	{
		fornavn: "Mats",
		etternavn: "Ekeberg",
		kjønn: "M",
		klasse: "3STA"
	},
	{
		fornavn: "Mathias",
		etternavn: "Hestnes",
		kjønn: "M",
		klasse: "3STA"
	},
	{
		fornavn: "Erik",
		etternavn: "Huse",
		kjønn: "M",
		klasse: "3STA"
	},
	{
		fornavn: "Thien",
		etternavn: "Nguyen",
		kjønn: "M",
		klasse: "3STA"
	},
	{
		fornavn: "Mathias",
		etternavn: "Schiøtz",
		kjønn: "M",
		klasse: "3STB"
	},
	{
		fornavn: "Andreas",
		etternavn: "Skancke",
		kjønn: "M",
		klasse: "3STB"
	},
	{
		fornavn: "Lukas",
		etternavn: "Veidahl",
		kjønn: "M",
		klasse: "3STB"
	},
	{
		fornavn: "Kamilla",
		etternavn: "Haukås",
		kjønn: "F",
		klasse: "3STD"
	},
	{
		fornavn: "Erika",
		etternavn: "Iden",
		kjønn: "F",
		klasse: "3STD"
	},
	{
		fornavn: "Hallvard",
		etternavn: "Langen",
		kjønn: "M",
		klasse: "3STD"
	},
	{
		fornavn: "Johan",
		etternavn: "Salim",
		kjønn: "M",
		klasse: "3STD"
	},
	{
		fornavn: "Emilie Sophie",
		etternavn: "Skjelstad",
		kjønn: "F",
		klasse: "3STD"
	},
	{
		fornavn: "Jonas",
		etternavn: "Sørli",
		kjønn: "M",
		klasse: "3STE"
	},
	{
		fornavn: "Jonathan",
		etternavn: "Gjefsen",
		kjønn: "M",
		klasse: "3STF"
	},
	{
		fornavn: "Nicolay",
		etternavn: "Schiøtz-n",
		kjønn: "M",
		klasse: "3STF"
	},
	{
		fornavn: "Elias",
		etternavn: "Westad",
		kjønn: "M",
		klasse: "3STF"
	}
]
	// Setter alle elever til å være tilstede
	for (let elev of elever){
		elev.tilstede = true
	}

	// Variabel for å vise eller ikke vise bildene
	let viseBilder = false;

	// Variabler brukt for å søke
	let søkHva = ""
	let søkTekst = ""
	$:ikkeSøking = søkHva === "" || søkTekst === ""

	// Reaktiv variabel som teller antall tilstede
	$: tilstede = elever.filter(a=>a.tilstede).length

	// Lytterfunksjon for å registrere tilstedeværelese for elev
	const byttTilstede = (elev)=>{
		elev.tilstede = !elev.tilstede
		elever = elever
	}

	// Lytterfunksjon med parameter for hva som skal sorteres etter
	const sorter = (hva) =>{
		// Sortere hva etter stigende rekkefølge
		if (stigende[hva]){
			elever.sort((a,b)=>a[hva].localeCompare(b[hva]))
		}else{
			elever.sort((a,b)=>b[hva].localeCompare(a[hva]))
		}
		stigende[hva] = !stigende[hva]

		// Trigge oppdatering av tabellen
		elever = elever
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
	<img src="/klassebilder/hake.jpg" alt="Hake">
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
						<td class="bilde"><img class={!elev.tilstede ? "bilde-ikke-tilstede": ""} src="/klassebilder/{elev.etternavn.toLowerCase()}.jpg" alt=""></td>
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