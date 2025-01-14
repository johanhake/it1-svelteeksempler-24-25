<script>
    // Tilfeldige tall
    let tall1 = Math.round(10*Math.random())
    let tall2 = Math.round(10*Math.random())

</script>

<h1>Kalkulator med tilfeldige tall</h1>
<table>
    <thead>
        <tr><th>Tall 1</th><th>Regneart</th><th>Tall 2</th><th>=</th><th>Svar</th></tr>
    </thead>
    <tbody>
        <tr><td>{tall1}</td><td>+</td><td>{tall2}</td><td>=</td><td>{tall1+tall2}</td></tr>
        <tr><td>{tall1}</td><td>-</td><td>{tall2}</td><td>=</td><td>{tall1-tall2}</td></tr>
        <tr><td>{tall1}</td><td>x</td><td>{tall2}</td><td>=</td><td>{tall1*tall2}</td></tr>
        <tr><td>{tall1}</td><td>/</td><td>{tall2}</td><td>=</td><td>{tall1/tall2}</td></tr>
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