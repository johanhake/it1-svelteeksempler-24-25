<script>

    let ord = "Svelte";
    let pigified = ord.slice(1)+ord[0]+"ay"

    let setning = "Svelte is a radical new approach to building user interfaces"

</script>
<h3>Pigify</h3>
{ord} er blitt til <i>{pigified}</i>

<h3>Fancy pigify</h3>
<p>{setning}</p>
<p>er blitt til</p>
<p><i>{setning.split(" ").map((str)=>str.slice(1)+str[0]+"ay").join(" ")}</i></p>
