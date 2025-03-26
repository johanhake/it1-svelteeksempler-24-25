<script>
// @ts-nocheck

	let joke
	const getJoke = async () => {
		joke = ""
		const data = await fetch("https://api.chucknorris.io/jokes/random")
		const json = await data.json()
		joke = json
	}
	getJoke()
</script>

<h1>Dagens vits</h1>

<button on:click={getJoke}>Ny vits</button>

{#if joke}
	<p>{joke.value}</p>
{:else}
	<p>Laster inn vits...</p>
{/if}
