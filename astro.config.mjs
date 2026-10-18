import { defineConfig } from 'astro/config';

// En desarrollo (npm run dev) el sitio se sirve en la raíz (http://localhost:4321/).
// En producción (npm run build) se añade el prefijo /lapetaca para GitHub Pages:
//   https://santiagop0815.github.io/lapetaca/
//
// TODO(cliente): cuando el dominio definitivo esté confirmado:
//   1. Reemplazar `site` por la URL del dominio definitivo.
//   2. Ajustar o quitar el prefijo según el hosting final.
//   3. Completar canonical / og:url en src/layouts/BaseLayout.astro.
export default defineConfig({
  site: 'https://santiagop0815.github.io',
  base: process.env.NODE_ENV === 'production' ? '/lapetaca' : '/',
  output: 'static'
});
