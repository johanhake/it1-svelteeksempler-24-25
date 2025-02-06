<script>
	let skurker = [
	  {navn: "Pingvinen", fiende: "Lynvingen"},
	  {navn: "B-Gjengen", fiende: "Onkel Skrue"},
	  {navn: "Lex Luthor", fiende: "Supermann"}
	]
  </script>

  {#each skurker as skurk}
	<article>
	  <h1>{skurk.navn}</h1>
	  <p>Fiende: {skurk.fiende}</p>
	</article>
  {/each}
