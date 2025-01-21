<script>
	let a = $state(1)
	let b = $state(1)
	let c = $state(1)
	let x = $state(1)
	let y = $derived(a*x*x+b*x+c)
	let a_T = $derived(2*a*x+b)
	let b_T = $derived(-a_T*x + y)
	let x_E = $derived(-b/(2*a))
	let y_E = $derived(a*x_E*x_E+b*x_E+c)
</script>

<label>Skriv inn a: <input type="number" bind:value={a}></label>
<label>Skriv inn b: <input type="number" bind:value={b}></label>
<label>Skriv inn c: <input type="number" bind:value={c}></label>
<label>Skriv inn x: <input type="range" min="-10" max="10" bind:value={x}> {x} </label>
<p>
Funksjonen: f(x)={a}x<sup>2</sup>+{b}x+{c}
</p>
<p>
Deriverte: f'(x)={2*a}x+{b}
</p>
<p>
f({x})={y}
</p>
<p>
f'({x})={a_T}
</p>
<p>
	Likning til tangent: y={a_T}x+{b_T}
</p>
<p>
	Ekstremalpunkt: ({x_E}, {y_E})
</p>


<style>
	label{
		display: block;
	}
</style>