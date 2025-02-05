<script>
	// @ts-nocheck

	let navn = "Mr Fats Domino"
	// Fat-arrow funksjon
	const endreNavn = (tittel) => {
		console.log("JADA")
		navn = tittel + " Plácido Domingo"
	}
	endreNavn("Mr") //Dette er funksjons-kallet
</script>
<h1>Mitt navn er {navn}</h1>
