<script>

    let ord = $state("Svelte");
    let pigified = $derived(ord.slice(1)+ord[0]+"ay")

</script>
<h3>Pigify II</h3>
<input type="text" bind:value={ord}>
{ord} er blitt til <i>{pigified}</i>