<script>
    // Variabel
    let tekst = "Jeg begynte å fortære en sandwich mens jeg kjørte taxi på vei til quiz"
</script>
<h3>Original tekst</h3>
{tekst}
<h3>Endret tekst</h3>
{tekst.replace("æ", "ae").replace("ø", "oe").replace("å","aa")}
