<script>
  let landene = [
     {navn: "Norge", hovedstad: "Oslo", befolkning: 5.45e6},
     {navn: "Tyskland", hovedstad: "Berlin", befolkning: 83.96e6},
     {navn: "Sverige", hovedstad: "Stockholm", befolkning: 18.14e6},
     {navn: "Island", hovedstad: "Reykjavik", befolkning: .342e6},
     {navn: "Finland", hovedstad: "Helsingfors", befolkning: 5.54e6},
     {navn: "Danmark", hovedstad: "København", befolkning: 5.86e6},
     {navn: "Ukraina", hovedstad: "Kyiv", befolkning: 43.79e6},
  ]

  // La til funksjonalitet for å sortere etter befolkning
  const sorterStigende = ()=>{
	landene = landene.sort((a,b)=>a.befolkning-b.befolkning)
  }

  const sorterSynkende = ()=>{
	landene = landene.sort((a,b)=>b.befolkning-a.befolkning)
  }

</script>

<h1>Info om utvalgte land</h1>
<p>
	<button on:click={sorterSynkende}>Befolkning ▼</button>
	<button on:click={sorterStigende}>Befolkning ▲</button>
   {#each landene as land}
      <article>
         Land: {land.navn}<br>
         Hovedstad: {land.hovedstad}<br>
         Befolkning: ca. {land.befolkning}<br>
         *************************
     </article>
   {/each}
</p>