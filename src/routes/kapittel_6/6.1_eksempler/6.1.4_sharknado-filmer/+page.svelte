<script>
	let filmer = ["Ben Hur", "Sharknado 2"]
	  // Fjern Ben Hur, legg til Sharknado 1,3,4,5 i rekkefølge!
	  // Bruk: splice, unshift, push,

    filmer.splice(0, 1)
    filmer.unshift("Sharknado 1")
    filmer.push("Sharknado 3")

    // Legger til 2 verdier på slutten
    filmer.splice(filmer.length, 0, "Sharknado 4", "Sharknado 5")

  </script>

  <h1>Mine favorittfilmer</h1>
  <h2>{filmer.join(" 🍿 ")}</h2>
