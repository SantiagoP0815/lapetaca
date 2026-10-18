import { defineConfig } from 'astro/config';

// TODO(cliente): cuando el dominio definitivo esté confirmado:
//   1. Reemplazar `site` por la URL del dominio definitivo.
//   2. Quitar `base` (o ajustarlo) según el hosting final.
//   3. Completar canonical / og:url en src/layouts/BaseLayout.astro.
//
// Despliegue de demostración en GitHub Pages:
//   https://santiagop0815.github.io/lapetaca/
export default defineConfig({
  site: 'https://santiagop0815.github.io',
  base: '/lapetaca',
  output: 'static'
});
