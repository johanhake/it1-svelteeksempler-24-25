<script>
// @ts-nocheck

    let igjen = (tank, forbruk, lengde)=>tank - forbruk*lengde
    let tanken = 75
    let gjennomsnitt_forbruk = 0.86
    let tilbakelagt_strekning = 52.7
</script>

<h1>Drivstoffkalkulator</h1>
<label>Liter bensin i tanken: <input type="number" bind:value={tanken}> liter</label>
<label>Gjennomsnittlig forbruk <input type="number" bind:value={gjennomsnitt_forbruk}> liter/mil</label>
<label>Hvor langt er kjørturen <input type="number" bind:value={tilbakelagt_strekning}> /mil</label>

<p>
    Det vil være {igjen(tanken, gjennomsnitt_forbruk, tilbakelagt_strekning).toFixed(1)}
</p>
<style>

    p{
        color: red;
    }

    label{
        display: block;
    }
</style>