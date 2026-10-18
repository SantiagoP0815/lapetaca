// Prefijo de despliegue (base de Astro) normalizado:
//   - '' en la raíz de un dominio (o en dev sin base configurada)
//   - '/lapetaca' en GitHub Pages
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '') || '';

// Construye una URL interna del sitio con el prefijo correcto.
export const withBase = (path: string) => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
