<script>
// @ts-nocheck

	let betale = $state(0)
	let alder = $state(0)

	$effect(()=>{
		if (alder < 18 || alder >=65) {
			betale = 18
		} else {
			betale = 36
		}
	})
 </script>
 <h1>
	 Hva skal du betale på ruter?
 </h1>
 <label>Alder: <input type="number" bind:value={alder}></label>
 {#if alder === undefined}
	 <p>
		 Skriv inn en alder
	 </p>
 {:else if alder < 3}
	 <p>
		 Du skal ikke betale noe
	 </p>
 {:else}
	  Du skal betale {betale} kr.
 {/if}