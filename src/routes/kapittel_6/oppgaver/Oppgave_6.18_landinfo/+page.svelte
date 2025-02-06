<script>
// @ts-nocheck

	// Importerer json data
	import norge from './norge.json'
	import norden from './norden.json'
	import skandinavia from './skandinavia.json'
	import lender from './lender.json'

	// Variabler for visning av tilhørighet
	const gruppemedlemskap = ["Skandinavia", "Norden", "EU"]
	let grupp = "Skandinavia"

</script>

<h1>Lender</h1>
<h2>{norge[0].landsnavn}</h2>
Hovedstad: {norge[0].hovedstad}

<h2>Skandinavia</h2>
<ul>
	{#each skandinavia as land}
		<li>{land.landsnavn} : {land.hovedstad}</li>
	{/each}
</ul>

<h2>Norden</h2>
<ul>
	{#each norden as land}
		<li>{land.landsnavn} : {land.hovedstad}</li>
	{/each}
</ul>

<h2>Lender med tilhørighet</h2>
<select bind:value={grupp}>
	{#each gruppemedlemskap as gm}
	<option value={gm}>{gm}</option>
	{/each}
</select>
<ul>
	{#each lender as land}
		{#if land.gruppemedlemskap.includes(grupp)}
		<li>{land.landsnavn} : {land.hovedstad}</li>
		{/if}
	{/each}
</ul>
