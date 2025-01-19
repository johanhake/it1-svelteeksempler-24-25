<script>

    // Tall
    let x1 = $state(1);
    let y1 = $state(1);
    let z1 = $state(1);
    let x2 = $state(1);
    let y2 = $state(1);
    let z2 = $state(1);

    let x3 = $derived(y1*z2 - y2*z1)
    let y3 = $derived(z1*x2 - z2*x1)
    let z3 = $derived(x1*y2 - x2*y1)

    let vektor1_str = $state("1, 1, 1");
    let vektor2_str = $state("1, 1, 1");

    let x4 = $derived(Number(vektor1_str.split(",")[0]));
    let y4 = $derived(Number(vektor1_str.split(",")[1]));
    let z4 = $derived(Number(vektor1_str.split(",")[2]));

    let x5 = $derived(Number(vektor2_str.split(",")[0]));
    let y5 = $derived(Number(vektor2_str.split(",")[1]));
    let z5 = $derived(Number(vektor2_str.split(",")[2]));

    let x6 = $derived(y4*z5 - y5*z4)
    let y6 = $derived(z4*x5 - z5*x4)
    let z6 = $derived(x4*y5 - x5*y4)

</script>
<h3>Vektorprodukt</h3>
<h4>Vektor 1</h4>
<label for="">x1:<input type="number" bind:value={x1}></label><br>
<label for="">y1:<input type="number" bind:value={y1}></label><br>
<label for="">z1:<input type="number" bind:value={z1}></label>
<h4>Vektor 2</h4>
<label for="">x2:<input type="number" bind:value={x2}></label><br>
<label for="">y2:<input type="number" bind:value={y2}></label><br>
<label for="">z2:<input type="number" bind:value={z2}></label>

<h3>Resultat av vektor produkt</h3>
[{x1}, {y1}, {z1}] x [{x2}, {y2}, {z2}] = [{x3}, {y3}, {z3}]

<h3>Skriv på vektorform II</h3>
<label for="">Vektor 1:<input type="text" bind:value={vektor1_str}></label><br>
<label for="">Vektor 2:<input type="text" bind:value={vektor2_str}></label>

<h3>Resultat av vektor produkt II</h3>
[{x4}, {y4}, {z4}] x [{x5}, {y5}, {z5}] = [{x6}, {y6}, {z6}]


