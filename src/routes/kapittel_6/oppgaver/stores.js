// Importerer persisted fra svelte-local-storage-store
import { persisted } from 'svelte-local-storage-store'

// Bruker persisted til å definere en verdi som skal lagres og være tilgjengelig fra
// andre svelte-filer.
// export brukes til å vise at denne verdie skal kunne hentes fra andre svelte-filer
export const navn = persisted("navn", "Johan")
export const alder = persisted("alder", 46)
export const bruker = persisted("bruker", {brukernavn: "Zvinto", fornavn: "Johan", etternavn: "Hake"})
export const highscores = persisted("highscores", [["Johan", 34]])

