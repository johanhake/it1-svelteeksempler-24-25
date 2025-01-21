<script>
	let spilletid = 2
  </script>

  <label>Hvor mange timer bruker du på gaming i løpet av et døgn? <input bind:value={spilletid} type="range" max="24"></label>

  <p>Du bruker {spilletid} timer på gaming</p>

  {#if spilletid > 15}
	<p class="advarsel">Du må ikke spille så mye!!!!!!</p>
  {/if}

  <style>
	.advarsel {
	  background-color: red;
	  padding: 30px;
	  color: white;
	}
  </style>