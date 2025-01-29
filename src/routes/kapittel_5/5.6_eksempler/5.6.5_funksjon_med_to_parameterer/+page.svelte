<script>
// @ts-nocheck

	let fullt_navn = "Johan Hake"
	const sett_sammen_navn = (fornavn, etternavn) => {
		fullt_navn = fornavn + " " + etternavn
	}

	sett_sammen_navn("Edvard", "Munch")
</script>

<h1 >God dag, {fullt_navn}!</h1>
