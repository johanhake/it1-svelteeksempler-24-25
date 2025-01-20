<script>
   let tall = 2;
</script>

<h1>Bruk av Math i JavaScript</h1>
<input type="number" step="0.1" bind:value={tall}>

<p>
   9.85 avrundet er <b> { Math.round(9.85) } </b>
</p>
<p>
    12.1 avrundet oppover er <b> {Math.ceil(12.1)} </b>
</p>
<p>
   {tall}<sup>3</sup> er <b> { Math.pow(tall, 3) } </b>
</p>
<p>
   &pi; = <b> { Math.PI } </b>
</p>