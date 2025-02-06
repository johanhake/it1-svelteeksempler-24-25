<script>
// @ts-nocheck

	let punkter = []
	let punkt = ""

	const registrerPunkt = ()=>{
		punkter = [...punkter, punkt]
		punkt=""
	}
	</script>
	<label>Skriv in et punkt:
		<input
					 type="text"
					 placeholder="x,y"
					 bind:value={punkt}
					 on:change={registrerPunkt}>
	</label>
	<svg width="600" height="400">
		<polyline points="{punkter.join(" ")}" fill="none" stroke="black" />
	</svg>