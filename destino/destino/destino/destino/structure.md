# Estructura del Proyecto Nuxt

Este proyecto está basado en Nuxt 3 y sigue una estructura modular y organizada para facilitar el desarrollo, mantenimiento y escalabilidad. A continuación se describe la función de cada carpeta principal y su relación dentro de la aplicación.

---

## Estructura de Carpetas

---

### assets/

Contiene recursos estáticos como hojas de estilos (`css/` y `scss/`), fuentes (`fonts/`) e imágenes (`imgs/`) y videos (`videos/`).  
Estos archivos se utilizan para definir la apariencia visual de la aplicación y son importados en los componentes o layouts según sea necesario.

---

### components/

Incluye todos los componentes Vue reutilizables de la aplicación.  
- Componentes base (`Base*.vue`), swipers, tablas, menús, y módulos específicos para distintas secciones (como `brand/`, `c5/`, `e5/`, `error/`, `home/`, `layouts/`, `common/`).
- Los componentes se organizan en subcarpetas temáticas para mantener el código limpio y modular.

---

### composables/

Contiene funciones reutilizables (composables) basadas en la Composition API de Vue 3.  
- Ejemplos: manejo de estado (`state.ts`), detección de tipo de dispositivo, scroll, drag, y utilidades generales.
- Incluye una subcarpeta `api/` para funciones relacionadas con peticiones HTTP.

---

### layouts/

Define los layouts globales de la aplicación, como la estructura base y layouts personalizados.  
- Ejemplo: `base.vue`, `layout.vue`.

---

### pages/

Contiene las páginas de la aplicación, cada archivo `.vue` representa una ruta.  
- Soporta rutas anidadas y dinámicas.
- Subcarpetas para secciones como `brand/`, `contactUs/`, `error/`, `globalWebsite/`, `j8/`, `newsCenter/`, etc.
- Permite una navegación estructurada y escalable.

---

### plugins/

Incluye plugins de Vue/Nuxt que extienden la funcionalidad global de la aplicación.  
- Ejemplos: directivas personalizadas, integración con Element Plus, manejo de clases, animaciones, video, zoom, etc.

---

### providers/

Contiene archivos para la inyección de dependencias o servicios personalizados que pueden ser utilizados en toda la aplicación.  
- Ejemplo: `customProvider.ts`.

---

### server/

Incluye archivos de configuración y lógica del lado del servidor. El proyecto no presenta archivos además del archivo de configuración por lo cual no posee lógica del lado del servidor.

---

### stores/

Define los stores de Pinia para el manejo del estado global de la aplicación.  
- Ejemplos: `useFooter.ts`, `useHeader.ts`, `useNav.ts`, `useNews.ts`.

---

### utils/

Contiene utilidades y funciones auxiliares que pueden ser usadas en cualquier parte del proyecto.  
- Incluye subcarpetas para constantes, funciones comunes y directivas personalizadas.

---

## Resumen General

- **assets/**: Recursos estáticos (estilos, imágenes, fuentes, videos).
- **components/**: Componentes Vue reutilizables y organizados por temática.
- **composables/**: Funciones reutilizables con Composition API.
- **layouts/**: Estructuras globales de la aplicación.
- **pages/**: Vistas y rutas principales de la aplicación.
- **plugins/**: Plugins y directivas globales.
- **providers/**: Proveedores de servicios personalizados.
- **server/**: Configuración y lógica del lado del servidor.
- **stores/**: Manejo de estado global con Pinia.
- **utils/**: Funciones y utilidades auxiliares.

---

Esta estructura permite desarrollar aplicaciones Nuxt de forma organizada, facilitando la colaboración y el mantenimiento del código.