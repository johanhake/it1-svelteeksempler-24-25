<script>
    let navn = "world"
</script>
<label><input type="text" bind:value={navn}></label>
<h3>Hello {navn.toUpperCase()}!</h3>