<script>
    let høyde = ""
</script>

<label>Hva er høyden din? <input type="number" bind:value={høyde} min="0" placeholder="høyde..."></label>
<p>
{#if Number(høyde) > 3}
NB! Du kan ikke skrive inn en høyde høyere enn 3 meter; kontakt Guinness rekordbok dersom du trenger mer.
{:else if høyde}
Du er {høyde} m
{/if}
</p>