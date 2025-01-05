<script>
    let m = (Math.random()*10)
    let dm = (m * 10).toFixed(1)
    let cm = (m * 100).toFixed(0)
    let mm = (m * 1000).toFixed(0)

    let g = (Math.random()*10)
    let h = (Math.random()*10)

    let r = (Math.random()*10)
    let pi = Math.PI
</script>

<h2>Lengde</h2>
<p>En lengde på {m.toFixed(2)} m = {dm} dm </p>
<p>En lengde på {m.toFixed(2)} m = {cm} cm </p>
<p>En lengde på {m.toFixed(2)} m = {mm} mm </p>

<h2>Areal trekant</h2>
<p>I en trekant er grunnlinjen {g.toFixed(2)} cm og høyden {h.toFixed(2)} cm. Da er arealet {(g*h/2).toFixed(2)} cm^2</p>

<h2>Areal og omkrets sirkel</h2>
<p>
    I en sirkel er radius {r.toFixed(2)} cm. <br>
    Omkretsen er da: {(2*r*pi).toFixed(2)} cm<br>
    Arealet er da: {(r*r*pi).toFixed(2)} cm^2
</p>

