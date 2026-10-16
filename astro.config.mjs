import { defineConfig } from 'astro/config';

// TODO(cliente): cuando el dominio definitivo esté confirmado:
//   1. Agregar `site: 'https://<dominio>'` a esta configuración.
//   2. Instalar y registrar la integración `@astrojs/sitemap`
//      para generar sitemap.xml automáticamente en el build.
//   3. Completar la URL del sitemap en public/robots.txt.
//   4. Completar canonical / og:url en src/layouts/BaseLayout.astro.
export default defineConfig({
  output: 'static'
});
