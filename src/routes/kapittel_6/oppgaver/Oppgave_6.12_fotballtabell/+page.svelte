<script>
// @ts-nocheck

	// Bruker objekter med hjemme og borte og så vises dette i tabellen
	// Lagrer IKKE total men bruker dataene i hjemme og borte til å finne total
	let resultat = [
		{
			lag: 'Molde',
			kamper: 30,
			hjemme: { V: 12, U: 1, T: 2, mål: [39, 13] },
			borte: { V: 13, U: 2, T: 0, mål: [32, 12] }
		},
		{
			lag: 'Bode/Glimt',
			kamper: 30,
			hjemme: { V: 8, U: 6, T: 1, mål: [47, 20] },
			borte: { V: 10, U: 0, T: 5, mål: [39, 21] }
		},
		{
			lag: 'Rosenborg',
			kamper: 30,
			hjemme: { V: 12, U: 2, T: 1, mål: [38, 15] },
			borte: { V: 4, U: 6, T: 5, mål: [31, 29] }
		},
		{
			lag: 'Lillestrøm',
			kamper: 30,
			hjemme: { V: 9, U: 2, T: 4, mål: [24, 13] },
			borte: { V: 7, U: 3, T: 5, mål: [25, 21] }
		},
		{
			lag: 'Odd',
			kamper: 30,
			hjemme: { V: 8, U: 1, T: 6, mål: [26, 22] },
			borte: { V: 5, U: 5, T: 5, mål: [17, 23] }
		}
	];

	// Funksjon for å beregne poengene gitt et lag
	const poeng = (lag) => (lag.hjemme.V + lag.borte.V)*3 + lag.hjemme.U + lag.borte.U


</script>

<h2>Eliteserien 2022</h2>
<!-- Viser tabellen -->
<table>
	<thead>
		<tr>
			<th rowspan="2">Plass</th><th rowspan="2" id="lag">Lag</th><th rowspan="2">Kamper</th>
			<th colspan="4">Hjemme</th><th colspan="4">Borte</th><th colspan="4">Total</th><th rowspan="2">Poeng</th>
		</tr>
		<tr>
			<th>V</th><th>U</th><th>T</th><th>Mål</th>
			<th>V</th><th>U</th><th>T</th><th>Mål</th>
			<th>V</th><th>U</th><th>T</th><th>Mål</th>
		</tr>
	</thead>
	{#each resultat as lag, i}
		<tr class="c">
			<td>{i+1}</td><td class="l">{lag.lag}</td><td>{lag.kamper}</td>
			<td>{lag.hjemme.V}</td><td>{lag.hjemme.U}</td><td>{lag.hjemme.T}</td>
			<td>{lag.hjemme.mål[0]}-{lag.hjemme.mål[1]}</td>
			<td>{lag.borte.V}</td><td>{lag.borte.U}</td><td>{lag.borte.T}</td>
			<td>{lag.borte.mål[0]}-{lag.borte.mål[1]}</td>
			<td>{lag.hjemme.V+lag.borte.V}</td><td>{lag.hjemme.U+lag.borte.U}</td><td>{lag.hjemme.T+lag.borte.T}</td>
			<td>{lag.hjemme.mål[0]+lag.borte.mål[0]}-{lag.hjemme.mål[1]+lag.borte.mål[1]}</td>
			<td>{poeng(lag)}</td>
		</tr>
	{/each}
</table>

<style>
	table {
		border: black 2px solid;
		border-collapse: collapse;
	}

	th[colspan="4"]{
		width: 150px;
	}
	th[rowspan="2"]{
		width: 50px;
	}
	#lag{
		width: 100px;
	}
	th, td{
		border: 1px black solid;
		padding: 2px;
	}
	.l{
		text-align: left;
	}
	.c{
		text-align: center;
	}

</style>
