<script>
	// Fikse sammenligningsfunksjonen!
  let priser = [240, 98, 300, 63, 55, 360]
  const stigende = () => {
    priser = priser.sort((a,b)=>{return a-b})
  }
  const synkende = () => {
    priser = priser.sort((a,b)=>b-a) // Fjerner kodeblokken når det bare er EN linje som returneres
  }
</script>
<button on:click={stigende}>Sorter stigende ⬆️</button>
<button on:click={synkende}>Sorter synkende ⬇️</button>

<p>{ priser.join(" 💰 ") }</p>
