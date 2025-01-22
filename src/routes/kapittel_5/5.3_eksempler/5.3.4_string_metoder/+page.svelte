<script>
	let overskrift = "String-metoder"
</script>

<h1>{overskrift}</h1>
<p>
	string.toUpperCase():
	<b> { overskrift.toUpperCase() } </b>
</p>
<p>
	string.slice(start, slutt):
	<b> { overskrift.slice(7) } </b>
</p>
<p>
	string.replace("Gammel tekst", "Ny tekst"):
	<b> { overskrift.replace("metoder", "funksjoner") } </b>
</p>
<p>
	string.replace("Gammel tekst", "Ny tekst").toUpperCase():
	<b> { overskrift.replace("metoder", "funksjoner").toUpperCase() } </b>
</p>
