<script>
// @ts-nocheck

	let betale = 0
	let alder = "";
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