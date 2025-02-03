<script>
// @ts-nocheck

    let gjennomsnitt=(a, b)=>(a+b)/2
    let a = 3
    let b = 8

</script>
<label>a=<input type="number" bind:value={a}></label>
<label>b=<input type="number" bind:value={b}></label>

<h2>Gjennomsnitt av <em>{a}</em> og <em>{b}</em> er <em>{gjennomsnitt(a, b)}</em></h2>

<style>
    label{
        display: block;
    }
</style>