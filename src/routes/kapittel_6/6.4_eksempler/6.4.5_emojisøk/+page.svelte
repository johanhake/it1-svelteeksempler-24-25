<script>
// @ts-nocheck

	let emojis = []
	let infotekst = "Laster inn emojier..."

	const getEmojis = async () => {
		const response = await fetch("https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json")
		emojis = await response.json()
	}
	getEmojis()

	let q = ""
	$:filtrerte = emojis.filter( emoji => true)

	let tekst = ""

	const insert = (nyEmoji) => {
		tekst += nyEmoji
	}
</script>

<textarea bind:value={tekst} placeholder="Klikk på en emoji for å sette den inn her"></textarea><br>
<input placeholder="filtrer emojiene" bind:value={q}>

<section>
	{#each filtrerte as emoji}
		<button on:click={()=>{insert(emoji.emoji)}}>
			<h1>{emoji.emoji}</h1>
			<p>{emoji.description}</p>
		</button>
	{:else}
		<p>{infotekst}</p>
	{/each}
</section>
