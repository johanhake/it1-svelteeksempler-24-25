<script>

    let tilfeldig = Math.random();

</script>

{tilfeldig.toFixed(3)}
{#if tilfeldig < 0.1}
er et lite tall
{:else if tilfeldig > 0.9}
er et stort tall
{:else if tilfeldig > 0.7}
er større enn 0,7
{:else if tilfeldig > 0.5}
er større enn 0,5
{:else if tilfeldig > 0.3}
er større enn 0,3
{/if}
<br>
<button on:click={()=>{tilfeldig = Math.random()}}>Nytt tall</button>