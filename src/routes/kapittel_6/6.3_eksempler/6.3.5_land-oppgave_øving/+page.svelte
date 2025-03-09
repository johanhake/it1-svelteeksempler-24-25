<script>
	// @ts-nocheck

	// Importerer listen med lender
	import lender_json from "./lender.json";

	// Kopierer data fra json
	let lender = $state(lender_json)

	const grupper = ["Norden", "Skandinavia", "EU"]
	let grupp = $state("Norden")
	let stigende = $state(false)

	// Effect slik at når stigende endrer seg så sorteres lendene. 
	$effect(()=>{
		if(stigende){
			lender = lender.sort((a,b)=>a.landsnavn.localeCompare(b.landsnavn))
		}else{
			lender = lender.sort((a,b)=>b.landsnavn.localeCompare(a.landsnavn))			
		}
	})

</script>

<h1>Lenders tilhørighet</h1>
<h2>Vi lender fra følgende gruppe</h2>
<select bind:value={grupp}>
	{#each grupper as g}
		<option value={g}>{g}</option>
	{/each}
</select>
<h2>Sorter <button on:click={()=>{stigende = !stigende}}>{stigende ? "Synkende":"Stigende"}</button>  etter navn</h2>


{#each lender as land}
	{#if land.gruppemedlemskap.includes(grupp)}
		<h3>{land.landsnavn}</h3>
		<img src="/bilder/flagg/{land.landsnavn.toLowerCase()}.png" alt="{land.landsnavn}-flagg">
		<h4>Hovedstad: {land.hovedstad}</h4>
		<h4>Medlem i:</h4>
		<ul>
			{#each land.gruppemedlemskap as gm}
				<li>{gm}</li>
			{/each}
		</ul>
	{/if}
{/each}

<style>
	img{
		width: 5em;
	}
</style>