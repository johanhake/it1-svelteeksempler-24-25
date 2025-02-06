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

	// Reaktiv variabel som teller antall tilstede
	$: tilstede = elever.filter(a=>a.tilstede).length

	</script>
	<h2>
		Informasjonsteknologi 1
	</h2>
	<h3>Tilstede: {tilstede} elever</h3>
	<table>
		<thead>
			<tr>
				<th>Fornavn</th>
				<th>Etternavn</th>
				<th>Klasse</th>
				<th>Tilstede</th>
			</tr>
		</thead>
		<tbody>
			{#each elever as elev}
				<tr>
					<td class={elev.tilstede ? "tilstede" : ""}>{elev.fornavn}</td>
					<td class={elev.tilstede ? "tilstede" : ""}>{elev.etternavn}</td>
					<td class="klasse {elev.tilstede ? "tilstede" : ""}">{elev.klasse}</td>
					<td><label><input type="checkbox" bind:checked={elev.tilstede}> </label></td>
				</tr>
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
		td label{
			display: block;
			width: 100%;
			text-align: center;
			cursor: pointer;
		}

		.klasse{
			text-align: center;
		}

		.tilstede{
			font-weight:bold;
		}
</style>