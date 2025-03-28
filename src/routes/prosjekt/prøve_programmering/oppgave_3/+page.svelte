<script>
// @ts-nocheck


	let poeng = [0,0];

	let grense = 30
	let slutt = false
	let res = 6
	let melding = ""

	const kasteTerning = (spiller) => {

		if (slutt){
			return
		}

		res = Math.trunc(Math.random()*6+1)
		poeng[spiller] += res

		if(poeng[spiller] > grense){
			melding = "Spiller " + (spiller + 1) + " vant!"
			slutt = true;
		}
	}

</script>

<h1>Oppgave 3 Vinnerflaks på terningkast (8p)</h1>

<img src="/terning/terning_{res}.png" alt=""><br>

<button on:click={()=>{kasteTerning(0)}}>Kast 1</button>
<button on:click={()=>{kasteTerning(1)}}>Kast 2</button>

<h2>Spiller 1: {poeng[0]} Spiller 2: {poeng[1]}</h2>
<h2>{melding}</h2>

<style>
	img{
		width: 100px;
	}
</style>