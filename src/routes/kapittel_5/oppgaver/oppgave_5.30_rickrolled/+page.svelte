<script>
    const src = "/bilder/rickroll-roll.gif" 
    let rotasjon = 0;
    let roter = ()=>{
        rotasjon += 90
    }
</script>

<img {src} style="transform: rotate({rotasjon}deg)" alt="Gif av Rick Astley.">
<button on:click={roter}>Rotér bildet</button>
<style>
    img{
        display: block;
        transition: 0.25s;
    }
</style>