<script>
// @ts-nocheck

	let melding = ""
	let maskin_valg = "ukjent"
	let maskin_bilde = "/bilder/maskin_ukjent.png"

	// Funksjon som kalles når en brukere har gjort et valg
	const spillerValg = (valg) => {
		console.log(valg)
		const tilfeldig = Math.trunc(Math.random()*3);
		if (tilfeldig === 0){
			maskin_valg = "stein";
		}else if (tilfeldig === 1){
			maskin_valg = "saks";
		}else{
			maskin_valg = "papir";
		}
		maskin_bilde = "/bilder/maskin_" + maskin_valg + ".png"

		// Hvilken logikk må det være her for at koden skal funke?
		melding = "Du valgte: " + valg + " og maskinen valgte: " + maskin_valg+ ". Vant du?!"
	}

</script>
<main>
	<h2>
		Stein - Saks - Papir
	</h2>
	<div id="bilder">
		<img src="/bilder/spiller_stein.png" alt="stein" on:click={()=>{spillerValg("stein")}}>
		<img src="/bilder/spiller_saks.png" alt="saks">
		<img src="/bilder/spiller_papir.png" alt="papir">
		<img src={maskin_bilde} alt="maskin valg">
	</div>
	<h2>
		{melding}
	</h2>
</main>

<style>
	main{
		background-color: #ebf0f1;
		padding: 1em;
	}
	#bilder{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		width: 100%;
		gap: 0.5em;
	}
	#bilder img{
		width: 100%;
		transition: 0.125s;
	}
	#bilder img:hover{
		transform: scale(1.05)
	}
</style>