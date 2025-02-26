<script>
	let skurker_liste = [
	  ["Pingvinen", "Lynvingen"],
	  ["B-Gjengen", "Onkel Skrue"],
	  ["Lex Luthor", "Supermann"]
	]

	let skurker_obj = [
	  {navn: "Pingvinen", fiende: "Lynvingen"},
	  {navn: "B-Gjengen", fiende: "Onkel Skrue"},
	  {navn: "Lex Luthor", fiende: "Supermann"}
	]

  </script>

  {#each skurker_liste as skurk}
	<article>
	  <h1>{skurk}</h1>
	  <p>Fiende: {skurk}</p>
	</article>
  {/each}
