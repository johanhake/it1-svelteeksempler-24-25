<script>
	let melding = ""
	let a = Math.random()
	if(a > 0.5) {
	   melding = "Det var et stort tall"
	} else {
		melding = "Det var et litet tall"
	}
 </script>
  <h1>Tallet er {a.toFixed(2)}</h1>
  <p>
	 {melding}
  </p>