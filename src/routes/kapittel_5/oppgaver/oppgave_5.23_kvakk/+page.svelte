<script>
    let går = false;
    let kvekker = false;
</script>

<h1>Er det en and?</h1>

<label><input type="checkbox" bind:checked={går} /> Går som en and</label><br />
<label
    ><input type="checkbox" bind:checked={kvekker} /> Kvekker som en and</label
>

{#if går && kvekker}
    <h2>Det er nok en and!</h2>
{:else}
    <h2>Det er nok ikke en and!</h2>
{/if}
