<script>
	// @ts-nocheck

	let tilstand = "oppstart";
	let navn = "";
	let melding = "";
	let spiller_poeng = 0;
	let maskin_poeng = 0;
	let spille = false;
	let maskin_valg = "ukjent";
	let maskin_bilde = "/bilder/maskin_ukjent.png";
	let bestav = 3;

	// Lager en animasjon for valg av maskinbilde
	const velg_maskin_bilde = (telling, valg) => {
		
		// Hvis vi er ferdige med animasjonen endre maskinbildet og sjekk 
		// hvem som vant
		if (telling > 15) {
			// Endrer bildet
			maskin_bilde = "/bilder/maskin_" + maskin_valg + ".png";
			sjekk_vinst(valg);
			return;
		}

		if (telling % 3 == 0) {
			maskin_bilde = "/bilder/maskin_stein.png";
		} else if (telling % 3 == 1) {
			maskin_bilde = "/bilder/maskin_saks.png";
		} else {
			maskin_bilde = "/bilder/maskin_papir.png";
		}

		// kaller velg_maskin_bilde etter 500/telling antall ms
		setTimeout(velg_maskin_bilde, 500 / telling, telling + 1, valg);
	};

	// Funksjon for å starte spillet
	const start_spill = () => {
		if (navn === "") {
			melding = "Skriv inn et navn...";
			return;
		}

		if (bestav % 2 === 0 || bestav > 9) {
			melding =
				"Velg et positivt (maks 9) oddetall for antall <em>best av</em>";
			return;
		}
		tilstand = "spiller";
		spiller_poeng = 0;
		maskin_poeng = 0;
		melding = "Gjør et valg " + navn;
	};

	// Funksjon for å resette spillet
	const reset = () => {
		tilstand = "oppstart";
		melding = "";
		navn = "";
		bestav = 3;
	};

	// Funksjon som kalles når en brukere har gjort et valg
	const spiller_valg = (valg) => {
		if (tilstand !== "spiller") {
			return;
		}
		maskin_valg = "stein";
		const tilfeldig = Math.trunc(Math.random() * 3);
		if (tilfeldig === 1) {
			maskin_valg = "saks";
		} else if (tilfeldig === 2) {
			maskin_valg = "papir";
		}

		velg_maskin_bilde(1, valg);
	};

	// Funksjon som sjekker hvem som vinner
	const sjekk_vinst = (valg) => {
		melding = "<em>" + valg + " vs " + maskin_valg + "</em><br>";

		// Sjekker for samme valg
		if (maskin_valg === valg) {
			melding += "Uavgjort!";
		} else if (maskin_valg === "stein") {
			if (valg === "saks") {
				maskin_poeng += 1;
				melding += "Maskinen fikk poeng";
			} else {
				spiller_poeng += 1;
				melding += "Du fikk et poeng";
			}
		} else if (maskin_valg === "saks") {
			if (valg === "papir") {
				maskin_poeng += 1;
				melding += "Maskinen fikk poeng";
			} else {
				spiller_poeng += 1;
				melding += "Du fikk et poeng";
			}
		} else {
			if (valg === "stein") {
				maskin_poeng += 1;
				melding += "Maskinen fikk poeng";
			} else {
				spiller_poeng += 1;
				melding += "Du fikk et poeng";
			}
		}

		// Sjekker om spillet er over.
		if (spiller_poeng + maskin_poeng >= bestav) {
			tilstand = "over";
			if (spiller_poeng > maskin_poeng) {
				melding = "Grattis " + navn + "! Du vant!";
			} else {
				melding = "Maskinen vant!";
			}
		}
	};
</script>

<main>
	<h1>Stein - Saks - Papir</h1>
	<div id="bilder">
		<button
			class="bilde-valg"
			on:click={() => {
				spiller_valg("stein");
			}}><img src="/bilder/spiller_stein.png" alt="stein" /></button
		>
		<button
			class="bilde-valg"
			on:click={() => {
				spiller_valg("saks");
			}}><img src="/bilder/spiller_saks.png" alt="saks" /></button
		>
		<button
			class="bilde-valg"
			on:click={() => {
				spiller_valg("papir");
			}}><img src="/bilder/spiller_papir.png" alt="papir" /></button
		>
		<img src={maskin_bilde} alt="maskin valg" />
	</div>
	{#if tilstand === "oppstart"}
		<h2>Starte spille?</h2>
		<label
			>Hva heter du: <input
				type="text"
				placeholder="Skriv ditt navn..."
				bind:value={navn}
			/></label
		>
		<label
			>Spille best av: <input type="number" bind:value={bestav} /></label
		>
		<button on:click={start_spill}>Start spill</button>
	{:else if tilstand === "spiller" || tilstand === "over"}
		<h2>
			Maskinpoeng: {maskin_poeng} vs Spillerpoeng: {spiller_poeng} Best av
			{bestav}
		</h2>
		{#if tilstand === "over"}
			<button on:click={reset}>Spill på nytt?</button>
		{/if}
	{/if}
	<h2>{@html melding}</h2>
</main>

<style>
	.bilde-valg {
		border: 0;
	}

	main {
		background-color: #ebf0f1;
		padding: 1em;
	}
	#bilder {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		width: 100%;
		gap: 0.5em;
	}
	#bilder img {
		width: 100%;
		transition: 0.125s;
	}

	#bilder img:hover {
		transform: scale(1.05);
	}

	#bilder img:active {
		transform: scale(1);
	}
</style>
