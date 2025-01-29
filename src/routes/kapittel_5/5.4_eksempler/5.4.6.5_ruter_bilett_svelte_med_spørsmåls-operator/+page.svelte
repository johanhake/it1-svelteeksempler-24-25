<script>
// @ts-nocheck

	let alder;
 </script>
 <h1>
	 Hva skal du betale på ruter?
 </h1>
 <label>Alder: <input
	type="number"
	bind:value={alder}
	min="0"
	max="120">
 </label>
 {#if alder === undefined}
	 <p>
		 Skriv inn en alder
	 </p>
 {:else if alder < 3}
	 <p>
		 Du skal ikke betale noe
	 </p>
 {:else}
 <p>
	Du skal betale {alder < 18 || alder >= 65 ? 18 : 36} kr.
 </p>
 {/if}