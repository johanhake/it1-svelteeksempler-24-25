<script>
// @ts-nocheck

	// Leser inn json data
	import const_elever from "./elever.json"

	// Data importert fra json er const og kan IKKE endres på
	let elever = const_elever;

	// Setter alle elever til å være tilstede
	for (let elev of elever){
		elev.tilstede = true
	}

	// Reaktiv variabel som teller antall tilstede
	$: tilstede = elever.filter(a=>a.tilstede).length

	// Lytterfunksjon for å registrere tilstedeværelese for elev
	const byttTilstede = (elev)=>{
		elev.tilstede = !elev.tilstede
		elever = elever
	}

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
			</tr>
		</thead>
		<tbody>
			{#each elever as elev}
				<tr on:click={()=>{byttTilstede(elev)}}>
					<td class={elev.tilstede ? "tilstede" : ""}>{elev.fornavn}</td>
					<td class={elev.tilstede ? "tilstede" : ""}>{elev.etternavn}</td>
					<td class="klasse {elev.tilstede ? "tilstede" : ""}">{elev.klasse}</td>
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
		tr:hover{
			cursor: pointer;
		}

		.klasse{
			text-align: center;
		}

		.tilstede{
			font-weight:bold;
		}
</style>