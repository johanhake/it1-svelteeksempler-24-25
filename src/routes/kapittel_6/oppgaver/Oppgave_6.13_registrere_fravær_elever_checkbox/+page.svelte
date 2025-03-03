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

	// Reaktiv variabel som teller antall tilstede
	let tilstede = $derived(elever.filter(a=>a.tilstede).length)

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