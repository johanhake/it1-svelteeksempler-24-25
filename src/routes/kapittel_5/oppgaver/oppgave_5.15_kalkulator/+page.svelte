<script>
    // Tall
    let tall1 = 1;
    let tall2 = 1;
    let tall3 = 1;
    let tall4 = 1;
    let tall5 = 1;
    let tall6 = 1;
    let tall7 = 1;
    let tall8 = 1;

</script>

<h1>Kalkulator med tall man kan skrive inn</h1>
<table>
    <thead>
        <tr><th>Tall 1</th><th>Regneart</th><th>Tall 2</th><th>=</th><th>Svar</th></tr>
    </thead>
    <tbody>
        <tr><td><input type="number" bind:value={tall1}></td><td>+</td><td><input type="number" bind:value={tall2}></td><td>=</td><td>{tall1+tall2}</td></tr>
        <tr><td><input type="number" bind:value={tall3}></td><td>-</td><td><input type="number" bind:value={tall4}></td><td>=</td><td>{tall3-tall4}</td></tr>
        <tr><td><input type="number" bind:value={tall5}></td><td>x</td><td><input type="number" bind:value={tall6}></td><td>=</td><td>{tall5*tall6}</td></tr>
        <tr><td><input type="number" bind:value={tall7}></td><td>/</td><td><input type="number" bind:value={tall8}></td><td>=</td><td>{tall7/tall8}</td></tr>
    </tbody>
</table>

<style>
    table{
        border-collapse: collapse;
    }
    td, th{
        text-align: center;
        width: 5em;
        border: solid black 1px;
    }
</style>