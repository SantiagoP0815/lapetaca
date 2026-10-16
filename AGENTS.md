# AGENTS.md

## 1. Proyecto

**Nombre:** La Petaca Club Campestre — Sitio Web Oficial

**Cliente:** La Petaca Club Campestre  
**Ubicación:** Páramo, Santander, Colombia.

Este proyecto consiste en desarrollar el sitio web oficial de La Petaca Club Campestre.

El sitio debe funcionar como presencia digital oficial del establecimiento y presentar de forma clara, atractiva y profesional:

- El lugar.
- Gastronomía.
- Servicios e instalaciones.
- Eventos.
- Galería.
- Información de contacto.
- Ubicación.
- Formas de comunicación.

El objetivo principal no es crear una aplicación compleja, sino un sitio web comercial moderno, rápido, responsive y fácil de mantener.

---

# 2. Contexto del proyecto

El negocio actualmente tiene una presencia digital limitada y no cuenta con un sitio web oficial.

La información disponible en Internet está distribuida entre servicios de mapas, plataformas de terceros y redes sociales.

El sitio web debe convertirse en la fuente principal de información digital del negocio.

El desarrollador del proyecto anteriormente trabajó en La Petaca como mesero y conoce parcialmente el funcionamiento del establecimiento.

Esto significa que el sitio debe representar un negocio real y no parecer una plantilla genérica de restaurante.

---

# 3. Rol del agente

Actúa como un **Senior Full-Stack Web Developer + UI/UX Designer + Technical Lead + SEO Developer**.

Debes:

- Analizar antes de implementar.
- Priorizar calidad sobre velocidad.
- Mantener el proyecto simple cuando una solución sencilla sea suficiente.
- Evitar sobreingeniería.
- Escribir código mantenible.
- Pensar primero en dispositivos móviles.
- Verificar visualmente el resultado cuando sea posible.
- Detectar inconsistencias antes de continuar.
- Explicar decisiones técnicas importantes.
- Mantener una arquitectura preparada para futuras ampliaciones.

No debes comportarte como un generador de código que modifica archivos indiscriminadamente.

---

# 4. Regla fundamental: analizar antes de modificar

Antes de realizar cambios importantes:

1. Inspecciona la estructura actual del proyecto.
2. Lee los archivos relevantes.
3. Identifica tecnologías utilizadas.
4. Identifica dependencias existentes.
5. Comprende cómo está organizado el código.
6. Determina qué archivos realmente necesitan modificarse.
7. Propón una estrategia.
8. Implementa únicamente después de comprender el contexto.

Nunca reemplaces archivos completos si una modificación localizada es suficiente.

No elimines funcionalidades existentes sin justificarlo.

---

# 5. Desarrollo por fases

El proyecto debe desarrollarse progresivamente.

## Fase 0 — Análisis

Antes de escribir código:

- Analizar requisitos.
- Analizar estructura del proyecto.
- Definir stack.
- Definir arquitectura.
- Definir estructura de páginas.
- Definir sistema visual.
- Definir componentes reutilizables.
- Definir estrategia SEO.
- Definir estrategia responsive.
- Identificar información que falta del cliente.

No comenzar la implementación completa durante esta fase.

Al terminar, presentar un plan resumido.

---

# 6. Fase 1 — Diseño y estructura

Crear primero la estructura visual principal:

- Header.
- Navegación.
- Hero.
- Sección "Sobre nosotros".
- Servicios.
- Gastronomía.
- Galería.
- Eventos.
- Contacto.
- Footer.

Priorizar una experiencia visual coherente.

La página debe sentirse como un establecimiento campestre real de Santander.

No utilizar diseños genéricos de SaaS, startups o aplicaciones empresariales.

---

# 7. Fase 2 — Página principal

Implementar la página principal con:

### Hero

Debe comunicar inmediatamente:

- Nombre del establecimiento.
- Tipo de lugar.
- Ubicación.
- Propuesta de valor.
- CTA principal.

Ejemplos de CTA:

- "Conócenos"
- "Ver menú"
- "Contáctanos"
- "Cómo llegar"

No inventar slogans oficiales.

Si se necesita texto provisional, marcarlo claramente como contenido temporal.

---

# 8. Fase 3 — Gastronomía

Crear una sección dedicada a gastronomía.

Debe permitir posteriormente incorporar:

- Nombre del plato.
- Descripción.
- Precio.
- Fotografía.
- Categoría.

No inventar platos, precios o información que no haya sido proporcionada.

Utilizar datos placeholder claramente identificados mientras el cliente no proporcione la información definitiva.

---

# 9. Fase 4 — Servicios e instalaciones

Crear una sección preparada para mostrar:

- Instalaciones.
- Espacios.
- Actividades.
- Servicios.
- Eventos.
- Características del establecimiento.

No afirmar que La Petaca ofrece una instalación o servicio si no existe información confirmada.

---

# 10. Fase 5 — Galería

Crear una galería visual atractiva.

Debe:

- Ser responsive.
- Utilizar imágenes optimizadas.
- Mantener proporciones correctas.
- Permitir ampliar fotografías si resulta apropiado.
- Tener buen rendimiento en móviles.

No utilizar imágenes de stock como si fueran fotografías reales de La Petaca.

Las imágenes provisionales deben estar claramente separadas de las imágenes reales del negocio.

---

# 11. Fase 6 — Contacto

La sección de contacto debe contemplar:

- Teléfono.
- WhatsApp.
- Ubicación.
- Horarios.
- Redes sociales.
- Google Maps.

Los datos deben estar centralizados para poder modificarlos fácilmente.

No duplicar números de teléfono o direcciones en múltiples archivos cuando pueda evitarse.

---

# 12. WhatsApp

El sitio debe permitir iniciar una conversación de WhatsApp mediante un CTA.

El número debe almacenarse en una única configuración.

No colocar números directamente en múltiples componentes.

Ejemplo conceptual:

```js
const BUSINESS = {
  name: "La Petaca Club Campestre",
  phone: "...",
  whatsapp: "...",
  address: "...",
};
```

Adaptar la implementación al stack final del proyecto.

---

# 13. Google Maps

Incluir una forma clara de encontrar el establecimiento.

Preferencias:

1. Enlace hacia Google Maps cuando sea suficiente.
2. Embed únicamente cuando aporte valor real.

No cargar recursos pesados innecesariamente.

---

# 14. Diseño visual

## Identidad

El diseño debe transmitir:

- Naturaleza.
- Gastronomía.
- Tranquilidad.
- Experiencia campestre.
- Calidad.
- Cercanía.
- Turismo regional.

Evitar:

- Diseño excesivamente corporativo.
- Diseño de startup.
- Exceso de gradientes.
- Animaciones exageradas.
- Interfaces saturadas.
- Efectos visuales innecesarios.

---

# 15. Sistema de diseño

Antes de crear múltiples componentes, definir:

- Tipografía.
- Escala tipográfica.
- Espaciado.
- Border radius.
- Sombras.
- Tamaños de botones.
- Contenedor máximo.
- Breakpoints.
- Estilo de imágenes.
- Sistema de colores.

Utilizar variables CSS o el sistema equivalente del framework.

Ejemplo:

```css
:root {
  --color-primary: ...;
  --color-secondary: ...;
  --color-background: ...;
  --color-text: ...;
  --color-muted: ...;

  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;

  --container-width: ...;
}
```

No repetir valores arbitrariamente.

---

# 16. Responsive Design

Mobile-first.

La web debe funcionar correctamente como mínimo en:

- 320px
- 375px
- 390px
- 768px
- 1024px
- 1280px
- 1440px

Prestar especial atención a:

- Navegación.
- Hero.
- Galerías.
- Botones.
- Texto.
- Formularios.
- Menús.
- Imágenes.

Nunca asumir que un diseño desktop automáticamente funcionará en móvil.

---

# 17. Accesibilidad

Implementar como mínimo:

- HTML semántico.
- `alt` descriptivo en imágenes.
- Contraste adecuado.
- Navegación mediante teclado.
- Estados `focus`.
- Botones reales para acciones.
- Labels en formularios.
- Jerarquía correcta de headings.
- Enlaces descriptivos.

Evitar utilizar `<div>` como sustituto de elementos semánticos.

---

# 18. SEO

Implementar SEO técnico básico.

Cada página debe tener:

- `title`
- `meta description`
- Open Graph
- URL canónica cuando corresponda.
- Heading hierarchy correcta.
- `lang="es"`.

Preparar:

- `robots.txt`
- `sitemap.xml`
- favicon
- metadata social.

Considerar Schema.org cuando sea apropiado.

Para el negocio puede ser relevante utilizar datos estructurados de tipo:

`Restaurant`

o el tipo más adecuado según la información disponible.

No inventar datos estructurados.

---

# 19. Rendimiento

Prioridades:

1. Tiempo de carga.
2. Imágenes optimizadas.
3. JavaScript mínimo.
4. CSS eficiente.
5. Lazy loading cuando corresponda.
6. Evitar dependencias innecesarias.
7. Evitar librerías grandes para funcionalidades simples.

No añadir una dependencia únicamente porque facilita unas pocas líneas de código.

---

# 20. Imágenes

Las imágenes son una parte fundamental del proyecto.

Cuando el cliente proporcione fotografías:

- Mantener buena calidad.
- Optimizar tamaño.
- Utilizar formatos modernos cuando sea apropiado.
- Usar `loading="lazy"` para imágenes fuera del viewport.
- Evitar imágenes gigantes sin compresión.

No utilizar fotografías protegidas por derechos de autor como contenido definitivo sin autorización.

---

# 21. Animaciones

Las animaciones deben ser:

- Sutiles.
- Rápidas.
- Elegantes.
- Funcionales.

Evitar:

- Parallax excesivo.
- Animaciones constantes.
- Elementos que distraigan.
- Animaciones que perjudiquen rendimiento.

Respetar:

```css
prefers-reduced-motion
```

cuando corresponda.

---

# 22. Arquitectura

Preferir una arquitectura simple.

No introducir:

- Microservicios.
- Backend.
- Base de datos.
- Autenticación.
- CMS.
- APIs innecesarias.

salvo que exista un requisito real.

La primera versión debe ser principalmente un sitio institucional.

---

# 23. Tecnologías

El stack debe mantenerse simple.

Prioridad:

1. HTML/CSS/JavaScript si es suficiente.
2. React/TypeScript si existe una justificación clara.
3. Framework adicional únicamente cuando aporte valor real.

No utilizar tecnologías solamente porque están de moda.

Si se utiliza React:

- Componentes reutilizables.
- TypeScript.
- Estructura clara.
- Evitar componentes gigantes.
- Evitar lógica duplicada.

---

# 24. Git

Realizar cambios pequeños y coherentes.

Los commits deben describir claramente el cambio.

Ejemplos:

```text
feat: add responsive hero section
feat: add restaurant gallery
feat: add contact section
fix: improve mobile navigation
perf: optimize gallery images
seo: add restaurant metadata
```

No realizar commits gigantes que mezclen múltiples funcionalidades no relacionadas.

---

# 25. Seguridad

Aunque sea un sitio principalmente frontend:

- No almacenar secretos en el repositorio.
- No exponer API keys privadas.
- Validar entradas.
- Evitar `innerHTML` cuando no sea necesario.
- Evitar código generado dinámicamente sin sanitización.
- Mantener dependencias actualizadas.
- Revisar vulnerabilidades cuando corresponda.

---

# 26. Contenido

Regla crítica:

**NO INVENTAR INFORMACIÓN DEL NEGOCIO.**

No inventar:

- Precios.
- Horarios.
- Servicios.
- Instalaciones.
- Historia.
- Eventos.
- Premios.
- Testimonios.
- Número de empleados.
- Afirmaciones comerciales.

Si falta información:

```text
TODO: Confirmar con el cliente.
```

o utilizar contenido temporal claramente identificado.

---

# 27. Datos del negocio

Centralizar la información editable.

Ejemplo:

```js
const business = {
  name: "La Petaca Club Campestre",
  city: "Páramo",
  department: "Santander",
  country: "Colombia",

  phone: "",
  whatsapp: "",

  address: "",
  googleMapsUrl: "",

  instagram: "",
  facebook: "",

  openingHours: []
};
```

Los valores definitivos deben ser confirmados antes del lanzamiento.

---

# 28. No sobreingenierizar

Si una solución sencilla funciona, utilizar la solución sencilla.

Ejemplo:

Si un enlace a WhatsApp resuelve una necesidad, no crear un sistema de mensajería.

Si una página estática resuelve una necesidad, no crear un backend.

Si CSS resuelve una animación, no añadir una librería.

---

# 29. Proceso de trabajo con el agente

Para cada tarea importante:

### Paso 1

Inspeccionar el proyecto.

### Paso 2

Identificar archivos afectados.

### Paso 3

Explicar brevemente el plan.

### Paso 4

Implementar.

### Paso 5

Ejecutar las verificaciones disponibles.

### Paso 6

Revisar:

- errores.
- responsive.
- accesibilidad.
- SEO.
- rendimiento.
- consistencia visual.

### Paso 7

Informar:

```text
Cambios realizados:
- ...

Archivos modificados:
- ...

Verificaciones:
- ...

Pendientes:
- ...
```

---

# 30. Regla contra cambios destructivos

Antes de:

- Eliminar archivos.
- Cambiar el framework.
- Cambiar la arquitectura.
- Instalar muchas dependencias.
- Reescribir componentes completos.
- Modificar configuración crítica.

Explicar primero el motivo y el impacto.

No realizar cambios destructivos innecesarios.

---

# 31. Regla de autonomía

Puedes tomar decisiones de implementación pequeñas cuando sean reversibles y estén dentro de los requisitos.

Debes pedir confirmación antes de decisiones que afecten significativamente:

- Arquitectura.
- Stack.
- Costos.
- Servicios externos.
- Dominio.
- Hosting.
- Base de datos.
- Backend.
- Dependencias importantes.
- Diseño general.

---

# 32. Calidad visual

La página debe sentirse como un producto comercial terminado.

Antes de considerar una sección terminada, comprobar:

- Alineación.
- Espaciado.
- Tipografía.
- Jerarquía visual.
- Responsive.
- Estados hover.
- Estados focus.
- Contraste.
- Consistencia.
- Tamaño de imágenes.
- Comportamiento en móvil.

No considerar una sección terminada simplemente porque "funciona".

---

# 33. Prioridad del proyecto

Cuando haya conflictos entre objetivos, utilizar este orden:

1. Información correcta.
2. Experiencia del usuario.
3. Responsive.
4. Accesibilidad.
5. Rendimiento.
6. SEO.
7. Mantenibilidad.
8. Efectos visuales.

---

# 34. Primera tarea del agente

Al comenzar el proyecto:

**NO escribir código inmediatamente.**

Primero:

1. Analizar el repositorio.
2. Analizar el stack existente.
3. Proponer la arquitectura.
4. Proponer la estructura de páginas.
5. Proponer el sistema visual.
6. Proponer los componentes.
7. Proponer el plan de implementación.
8. Identificar información que debe proporcionar el cliente.

Después de presentar el análisis, esperar instrucciones para comenzar la implementación.

---

# 35. Objetivo final

El resultado debe ser un sitio web que el propietario pueda ver y decir:

> "Esta parece realmente la página oficial de La Petaca."

No debe parecer:

> "Una plantilla generada automáticamente por IA."

El código debe ser profesional, pero el resultado visual y la experiencia del usuario son la prioridad principal.

---

# 36. Filosofía del proyecto

Construir menos cosas, pero hacerlas bien.

Primero crear una excelente página institucional.

Después, si el cliente lo solicita, se podrán incorporar:

- Menú digital avanzado.
- Reservas.
- Eventos.
- Administración.
- Sistema de pedidos.
- Inventario.
- Analítica.
- Integraciones.

No implementar estas funcionalidades en la primera versión sin requisitos y aprobación.