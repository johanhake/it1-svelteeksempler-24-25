<script>
    // @ts-nocheck

    let masse = 10;
    let planet = "Jorden";

    let tyngeakselerasjon = (planet) => {
        if (planet === "Jorden") {
            return 9.81;
        }
        if (planet === "Merkur") {
            return 3.7;
        }
        if (planet === "Venus") {
            return 8.87;
        }
        if (planet === "Mars") {
            return 3.71;
        }
        if (planet === "Jupiter") {
            return 24.79;
        }
        if (planet === "Saturn") {
            return 10.44;
        }
        return -1;
    };
</script>

<h1>Tyngde på ulike planeter</h1>
<label>Hva er din masse: <input type="number" bind:value={masse} /> kg</label>
<label
    >Hvilken planet er du på?
    <!-- <input type="text" bind:value={planet}> -->
    <select bind:value={planet}>
        <option value="">Velg planet</option>
        <option value="Merkur">Merkur</option>
        <option value="Venus">Venus</option>
        <option value="Jorden">Jorden</option>
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
    </select>
</label>

{#if tyngeakselerasjon(planet) < 0}
    <h3 class="advarsel">Skriv inn en gyldig planet.</h3>
{:else if masse < 0}
    <h3 class="advarsel">Skriv inn en positiv masse.</h3>
{:else}
    <h3>
        Din tyngde på {planet} er {(tyngeakselerasjon(planet) * masse).toFixed(
            2,
        )} N
    </h3>
{/if}

<style>
    .advarsel {
        color: red;
    }

    label {
        display: block;
    }
</style>
