<script>
    let pinkode = $state("");
    let beløp = $state(0);
    let korrekt_pinkode = "1234";
    let beløpgrense = 2000;
</script>

<h1>Velkommen til <em>Svelte Minibank</em></h1>

<p>
    <label
        >Skriv inn pinkoden din: <br />
        <input
            type="text"
            placeholder="pinkode..."
            bind:value={pinkode}
        />
    </label>
</p>
<p>
    <label
        >Hvor mye vil du ta ut: <br />
        <input type="number" min="0" placeholder="beløp..." bind:value={beløp} /> kr
    </label>
</p>
{#if pinkode !== korrekt_pinkode}
    <p style="color:red">Pinkoden er feil! Prøv på nytt</p>
{:else if beløp > beløpgrense}
    <p style="color:blue">
        Du har ikke nok penger på kontoen! <br>
        Prøv et mindre beløp.
    </p>
{:else}
<p style="color:grønn">
    Transaksjonen er vellykket! <br>
    Din nye saldo er: {beløpgrense-beløp} kr. <br>
    Takk for besøket!
</p>

    {/if}
