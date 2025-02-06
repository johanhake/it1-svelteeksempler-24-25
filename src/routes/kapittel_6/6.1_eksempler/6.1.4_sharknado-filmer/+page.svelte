<script>
	let filmer = ["Ben Hur", "Sharknado 2"]
	  filmer.splice(0,1)
	  filmer.unshift("Sharknado 1")
	  filmer.push("Sharknado 3")
	  filmer.push("Sharknado 4")
	  filmer.push("Sharknado 5")
	  // Fjern Ben Hur, legg til Sharknado 1,3,4,5 i rekkefølge!
	  // Bruk: splice, unshift, push,

  </script>

  <h1>Mine favorittfilmer</h1>
  <h2>{filmer.join(" 🍿 ")}</h2>
