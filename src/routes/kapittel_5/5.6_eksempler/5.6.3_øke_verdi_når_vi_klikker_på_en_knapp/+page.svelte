<script>
	// Hvordan setter vi en grense slik at man IKKE kan klikke mer enn 42?
	let tall = 20
	const øk = () => {
		tall++
	}

</script>

<button on:click={øk}> + </button>
<p>
	Tallet er nå {tall}
</p>