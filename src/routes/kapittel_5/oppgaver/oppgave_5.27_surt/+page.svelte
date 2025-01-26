<script>
    let ph=$state(7)
    let mine = $derived(ph < 7 ? "😥" : ph > 7 ? "😃" : "😐")
    let melding = $derived(ph < 7 ? "sur" : ph > 7 ? "basisk" : "neutral")
</script>
<h1>pH-skala</h1>
<input type="range" min="0" max="14" bind:value={ph}> <span id="tall">{ph}</span>

<h2>Når pH-en til en løsninger er <span id="tall">{ph}</span>, er den {melding}</h2>
<span id="mine">{mine}</span>

<style>
    #tall{
        color: blue;
    }

    #mine{
        font-size:10em;
    }
</style>