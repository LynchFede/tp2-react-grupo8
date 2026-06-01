## Título del Proyecto: tp2-react-grupo8
Link al deploy:

## Descripción:
Aplicación web de tipo SPA (Single Page Application) desarrollada con React y Vite. El proyecto presenta un dashboard grupal con perfiles individuales de cada integrante, explorador de datos, galería interactiva y consumo de API externa de noticias tecnológicas.

## Integrantes:

Gilda Morgante Link a Git Hub: https://github.com/gildamorgante
Federico Lynch Link a Git Hub:  https://github.com/LynchFede
Nahuel Rodriguez Link a Git Hub: https://github.com/nahuew
David Egert Link a Git Hub:https://github.com/fedor2003 
Cristina Roma Link a Git Hub:https://github.com/Maricroma

## Tecnologias Utilizadas:

React 19 — Biblioteca principal de UI
Vite 8 — Bundler y entorno de desarrollo
React Router DOM 7 — Navegación entre páginas
React Icons 5 — Iconografía
Swiper 12 — Carrusel de proyectos
Yet Another React Lightbox — Lightbox para galería de imágenes
GNews API — API externa de noticias tecnológicas
Google Fonts — Tipografías (Bebas Neue, DM Sans)
CSS Modules — Estilos por componente
HTML5 / CSS3

## Estructura del proyecto:

tp2-react-grupo8/
├── public/
├── src/
│   ├── assets/          # Imágenes, logos y recursos estáticos
│   ├── components/      # Componentes reutilizables (Galeria, gameCard, perfil, Projetcarousel, Sidebar)
│   ├──Data/
        ├── boardGames.json
        ├── integrantes.js   
     pages/           # Vistas principales
│   │   ├── apiPublic.css
│   │   ├── apiPublic.jsx
│   │   ├── boardGames.css
│   │   ├── BoardGames.jsx
│   │   └── Home.css
        └── Home.jsx
        └── perfil.css
        └── perfil.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── README.md

## Guia de estilos:

Paletas de colores:

*Fondo principal — `#080c14`
*Superficie** — `#0d1421`
*Superficie 2** — `#131c2e`
*Superficie 3** — `#0d1f35`
*Borde oscuro** — `#1e2535`
*Borde claro** — `#e5e7eb`
*Acento cyan** — `#00e5ff`
*Badge púrpura fondo** — `#f3e8ff`
*Badge púrpura texto** — `#6b21a8`
*Texto principal** — `#e8eaf0`
*Texto secundario** — `#4a5568`
*Texto gris** — `#4b5563`
*Error fondo** — `#0f0a0a`
*Error acento** — `#ff4d6d`
*Blanco** — `#ffffff`

Tipografia:

*Bebas Neue** — Títulos y encabezados → [Google Fonts](https://fonts.google.com/specimen/Bebas+Neue)
*DM Sans** — Texto general → [Google Fonts](https://fonts.google.com/specimen/DM+Sans)

Iconografia:

*React Icons** `v5.6.0` → [react-icons.github.io](https://react-icons.github.io/react-icons)


## JavaScript / React — Funciones y Componentes Clave

Sidebar Navegación fija lateral con React Router, logo de grupo y menú jerarquizado
Home: Dashboard con grilla de tarjetas de acceso rápido por integrante, animaciones de entrada
Perfil: Vista individual con barras de progreso animadas, carrusel de proyectos y tech stack
ApiPublic: Módulo de noticias con consumo de API externa, paginación y manejo de estados
Galeria: Grid de imágenes con Lightbox integrado (zoom, navegación y cierre con ESC)
Datos: Explorador de JSON con filtrado en tiempo real y buscador dinámico

## Funcionalidades dinámicas implementadas

Routing con React Router — Navegación entre secciones sin recarga de página
Consumo asíncrono de API — fetch con async/await a GNews API con manejo de estados de carga y error
Paginación — Sistema Anterior/Siguiente con indicador de posición actual
Skeleton loading — Placeholders animados mientras cargan los datos
Reintento automático — Si la API falla, reintenta automáticamente a los 3 segundos (ver disponibilidad de token diaria ya que es gratuita)
Filtrado en tiempo real — Buscador dinámico sobre datos JSON locales
Lightbox — Visualizador de imágenes con zoom, navegación interna y cierre por tecla ESC
Carrusel de proyectos — Galería con controles manuales usando Swiper
Animaciones CSS — Transiciones de entrada (fadeUp), hover effects y skeleton shimmer


## Enlace al Proyecto Desplegado:


## Creación de API PUBLICA:
 Integración de API Externa
API utilizada: GNews API (gnews.io)
Consulta noticias en español sobre inteligencia artificial y tecnología en tiempo real
Manejo de estados: skeleton de carga, estado de error con botón de reintento
Paginación con botones Anterior / Siguiente e indicador de página actual
Las tarjetas muestran imagen, fuente, fecha, título y descripción de cada artículo

## USO DE IA 

*Herramienta utilizada:* ChatGPT (GPT-5.5) // Gemini flash 3.5 // Claude (Sonet 4.6 low)

La herramienta fue utilizada como apoyo para tareas de análisis, documentación, organización de componentes y resolución de dudas durante el desarrollo del proyecto.

#### Ejemplos de prompts utilizados

*1. Arquitectura de Componentes*

* "Analizá la estructura de mi proyecto React y generá un árbol de renderizado mostrando las relaciones entre App, Sidebar, Routes y los demás componentes."

*2. Documentación del Árbol de Renderizado*

* "Explicá cómo se relacionan los componentes React de una SPA y redactá una descripción académica para incluir en la documentación del proyecto."

*3. Migración a React*

* "Redactá una justificación técnica explicando las ventajas de migrar una aplicación desarrollada en HTML, CSS y JavaScript tradicional hacia una arquitectura basada en React."

*4. Bitácora de Proyecto*

* "Generá un texto para la bitácora del proyecto describiendo el uso de GitHub, Git Pull, trabajo colaborativo y distribución de tareas entre integrantes."

*5. React Router*

* "Explicá cómo representar en un árbol de componentes la relación entre Sidebar, NavLink, Routes y las páginas renderizadas mediante React Router."

*6. Revisión de Código React*

* "Analizá este componente React e indicá cuáles son componentes hijos reales y cuáles son solamente elementos HTML internos."

*7. Organización del Proyecto*

* "Generá una estructura jerárquica de carpetas y componentes para documentar un proyecto desarrollado con React y Vite."

*8. Corrección y Mejora de Textos*

* "Revisá y mejorá la redacción de la documentación técnica manteniendo un lenguaje académico y formal."

*9. Creacion de juego de datos aleatorio para JSON.

*10 API Manager:

* "Responde como experto en programación e indicame porque la API manager me arroja error 402, busca una solución adecuada para solucionarlo y explicame paso a paso el fundamento y como implementarlo"




