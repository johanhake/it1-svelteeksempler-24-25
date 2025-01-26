<script>
    let atomnummer = $state(1);
    let grunnstoff = $state("");
    let melding = $state("");
    let farge = $state("black");
    $effect(() => {
        if (atomnummer < 1) {
            grunnstoff = "?";
            melding = "Ugyldig atomnummer! Skriv et tal større enn 1.";
            farge = "red";
        } else if (atomnummer > 5) {
            grunnstoff = "?";
            melding = "Grunnstoff med atomnummer større en 5 er ikke lagt inn!";
            farge = "blue";
        } else {
            melding = "";
            farge = "green";
            if (atomnummer === 1) {
                grunnstoff = "Hydrogen";
            } else if (atomnummer === 2) {
                grunnstoff = "Helium";
            } else if (atomnummer === 3) {
                grunnstoff = "Litium";
            } else if (atomnummer === 4) {
                grunnstoff = "Beryllium";
            } else if (atomnummer === 5) {
                grunnstoff = "Brom";
            }
        }
    });
</script>

<h1>Interaktivt periodesystem</h1>
<label
    >Skriv inn et atomnummer (1-5) <input
        type="number"
        bind:value={atomnummer}
    /></label
>
<p style="color:{farge}">
    Grunnstoffet: {grunnstoff} <br />
    {melding}
</p>
