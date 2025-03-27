<script>
  import "./brukerinput.css"
</script>


<h1>Bestill din mat!</h1>

<form action="/kapittel_6/6.5_eksempler/6.7.1_url_parametere/registrer">
  <input type="text" name="navn" placeholder="Hva heter du?" required>
  <label>Hva ønsker du å drikke til maten?</label>
  <div class="checkboxes">
   <input type="radio" id="brus" name="drikke" value="Brus" checked><label for="brus">Brus</label>
    <input type="radio" id="saft" name="drikke" value="Saft"><label for="saft">Saft</label>
    <input type="radio" id="vann" name="drikke" value="Vann"><label for="vann">Vann</label>
  </div>
  <select name="velgMat" required>
    <option value="">Hva ønsker du å spise?</option>
    <option value="pizza">Pizza</option>
    <option value="torsk">Torsk</option>
    <option value="taco">Taco</option>
  </select>
  <button>Send inn</button>
</form>