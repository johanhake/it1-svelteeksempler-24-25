// Importerer persisted fra svelte-local-storage-store
import { persisted } from 'svelte-persisted-store'

// Bruker persisted til å definere en verdi som skal lagres og være tilgjengelig fra
// andre svelte-filer.
// export brukes til å vise at denne verdie skal kunne hentes fra andre svelte-filer
export const teller = persisted("teller", 0)
export const highscore = persisted("highscore", 30)


