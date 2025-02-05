<script>
	// Hvordan setter vi en grense slik at man IKKE kan klikke mer enn 42?
	let tall = 40;
	const øk = () => {
		if (tall < 42) {
			tall += 1;
		}
	};
</script>

<button on:click={øk}> + </button>
<p>
	Tallet er nå {tall}
</p>
