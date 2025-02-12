<script>
// @ts-nocheck

	const terning = () => Math.trunc(Math.random() * 6) + 1;

	let antall_kast = 10;
	const tell_antall_seksere = (antall_kast) => {
		let antall_seksere = 0
		for (let i = 0; i < antall_kast; i++) {
			let kast = terning();
			if (kast === 6) {
				antall_seksere += 1;
			}
		}
		return antall_seksere;
	};
</script>

<h2>Hvor mange seksere?</h2>
<label>Antall kast <input type="number" bind:value={antall_kast} /></label>
Antall seksere for {antall_kast} kast er {tell_antall_seksere(antall_kast)}
