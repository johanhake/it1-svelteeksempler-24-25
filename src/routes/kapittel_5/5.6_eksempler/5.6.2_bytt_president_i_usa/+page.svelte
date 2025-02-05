<script>
	// @ts-nocheck

	let president = "Joe Biden";

	const ny_president = () => {
		if (president === "Joe Biden") {
			president = "Donald Trump";
		} else {
			president = "Joe Biden";
		}
	};
</script>

<button on:click={ny_president}>Gi USA en ny president</button>
<h1>Presidenten i USA er {president}</h1>
