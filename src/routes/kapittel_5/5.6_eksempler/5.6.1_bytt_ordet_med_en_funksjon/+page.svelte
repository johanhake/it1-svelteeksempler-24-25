<script>
	// @ts-nocheck

	let navn = "Mr Fats Domino"
	// Fat-arrow funksjon
	const endreNavn = (tittel) => {
		navn = tittel + " Plácido Domingo"
	}
	endreNavn("Sir") //Dette er funksjons-kallet
</script>
<h1>Mitt navn er {navn}</h1>
