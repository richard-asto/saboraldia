# React + Vite

## 🍳 SaboralDía - Aplicación de Recetas Culinarias

> **Proyecto de Fin de Curso** - Aplicación web moderna para descubrir, planificar y cocinar recetas del mundo entero.

![Sabor al Día Banner](/public/Saboraldia.jpg)

## 📋 Tabla de Contenidos

    - [Descripción](#-descripción)
    - [Características](#-características)
    - [Tecnologías](#-tecnologías)
    - [Estructura del Proyecto](#-estructura-del-proyecto)
    - [Instalación](#-instalación)
    - [Uso](#-uso)
    - [API](#-api)
    - [Futuras Mejoras](#-futuras-mejoras)
    - [Autor](#-autor)

## 📖 Descripción

    **SaboralDía** es una aplicación web de recetas culinarias desarrollada como proyecto de fin de curso. Permite a los usuarios buscar recetas en inglés y español, guardar sus favoritas, planificar menús semanales y aprender a cocinar con videos tutoriales paso a paso.

    La aplicación consume la API de [TheMealDB](https://www.themealdb.com/), una base de datos abierta de recetas con miles de platillos de todo el mundo.

### 🎯 Objetivos del Proyecto

    - Aplicar conocimientos de **Html**, **css**, **Js**, **React** **Vite** y **Context API**
    - Implementar **arquitectura de componentes** reutilizables
    - Consumir **API REST** externa
    - Crear una **interfaz moderna** y responsive
    - Aplicar **buenas prácticas** de desarrollo web
    - Gestionar **estado global** de la aplicación

## ✨ Características

    ### 🔐 Autenticación
    - ✅ Login de usuarios
    - ✅ Registro de nuevas cuentas
    - ✅ Recuperación de contraseña
    - ✅ **Modo invitado** (acceso sin registro)
    - ✅ Persistencia de sesión en `localStorage`

    ### 🔍 Búsqueda de Recetas
    - ✅ Búsqueda por **nombre de receta**
    - ✅ Búsqueda por **ingrediente**
    - ✅ Traducción automática español ↔ inglés
    - ✅ Resultados en tiempo real
    - ✅ Grid responsive de recetas

    ### 📱 Gestión de Favoritos
    - ✅ Agregar/quitar recetas favoritas
    - ✅ Persistencia en `localStorage`
    - ✅ Contador de favoritos en header
    - ✅ Vista dedicada de favoritos

    ### 📅 Planificador Semanal
    - ✅ Planificar recetas para 7 días
    - ✅ Vista de calendario semanal
    - ✅ Agregar/eliminar recetas del plan
    - ✅ Persistencia del plan semanal

    ### 📄 Detalle de Recetas
    - ✅ Imagen de alta calidad
    - ✅ Lista completa de ingredientes con cantidades
    - ✅ Instrucciones paso a paso
    - ✅ Video tutorial de YouTube embebido
    - ✅ Categoría y área de origen
    - ✅ Botones de favoritos y planificación

    ### 🎨 Interfaz de Usuario
    - ✅ Diseño moderno con **Tailwind CSS**
    - ✅ Animaciones suaves y transiciones
    - ✅ Imágenes hero temáticas
    - ✅ Footer con redes sociales
    - ✅ 100% responsive (móvil, tablet, desktop)
    - ✅ Modo oscuro en footer

## 🛠 Tecnologías

    ### Frontend Framework
    ```
    React 18.3.1      - Biblioteca de interfaz de usuario
    Vite 5.4.2        - Build tool y dev server ultrarrápido
    ```
    ### Estilos
    ```
    Tailwind CSS 3.4.1  - Framework de utilidades CSS
    PostCSS             - Procesador de CSS
    Autoprefixer        - Prefijos CSS automáticos
    ```
    ### Iconos
    ```
    Lucide React       - Biblioteca de iconos moderna (300+ iconos)
    ```
    ### Gestión de Estado
    ```
    React Context API  - Estado global de la aplicación
    Custom Hooks       - Lógica reutilizable
    ```
    ### API Externa
    ```
    TheMealDB API      - Base de datos de recetas (+650 recetas)
    ```
    ### Persistencia
    ```
    localStorage       - Almacenamiento local del navegador

## 📁 Estructura del Proyecto

    SaboralDia/
    │
    ├── public/                      # Archivos públicos estáticos
    │   └── vite.svg
    │
    ├── src/                         # Código fuente
    │   │
    │   ├── components/              # Componentes reutilizables (UI)
    │   │   ├── Footer.jsx           # Footer con redes sociales (130 líneas)
    │   │   ├── Header.jsx           # Barra de navegación responsive (150 líneas)
    │   │   ├── RecipeCard.jsx       # Tarjeta de receta (40 líneas)
    │   │   └── SearchSection.jsx    # Sección de búsqueda (60 líneas)
    │   │
    │   ├── context/                 # Context API (Estado global)
    │   │   └── AppContext.jsx       # Contexto global de la app (140 líneas)
    │   │
    │   ├── hooks/                   # Custom Hooks (Lógica de negocio)
    │   │   ├── useAuth.js           # Lógica de autenticación (60 líneas)
    │   │   ├── useFavorites.js      # Gestión de favoritos (35 líneas)
    │   │   ├── useLocalStorage.js   # Persistencia en localStorage (25 líneas)
    │   │   ├── useRecipes.js        # Búsqueda de recetas (60 líneas)
    │   │   └── useWeeklyPlan.js     # Planificador semanal (50 líneas)
    │   │
    │   ├── pages/                   # Páginas/Vistas principales
    │   │   ├── FavoritesPage.jsx    # Página de favoritos (70 líneas)
    │   │   ├── HomePage.jsx         # Página principal de búsqueda (165 líneas)
    │   │   ├── PlannerPage.jsx      # Planificador semanal (80 líneas)
    │   │   ├── RecipeDetail.jsx     # Detalle de receta (155 líneas)
    │   │   └── WelcomePage.jsx      # Login/Registro (365 líneas)
    │   │
    │   ├── utils/                   # Utilidades y helpers
    │   │   ├── api.js               # Funciones de API (50 líneas)
    │   │   └── helpers.js           # Funciones auxiliares (60 líneas)
    │   │
    │   ├── App.jsx                  # Componente raíz (20 líneas)
    │   ├── main.jsx                 # Punto de entrada (10 líneas)
    │   ├── index.css                # Estilos globales + Tailwind (110 líneas)
    │   └── SaboriaApp-Final.jsx     # Componente principal (118 líneas)
    │
    ├── .eslintrc.cjs                # Configuración ESLint
    ├── .gitignore                   # Archivos ignorados por Git
    ├── index.html                   # HTML principal
    ├── package.json                 # Dependencias y scripts
    ├── postcss.config.js            # Configuración PostCSS
    ├── tailwind.config.js           # Configuración Tailwind
    ├── vite.config.js               # Configuración Vite
    └── README.md                    # Este archivo

    Total: ~1,700 líneas de código (sin contar node_modules)
    Componentes: 26 archivos organizados
    Arquitectura: Enterprise-level con Context API

## 🚀 Instalación

    ### Prerrequisitos
    - **Node.js** >= 18.0.0
    - **npm** >= 9.0.0

    ### Pasos
    1. **Clonar el repositorio**
    ```bash
    git clone https://github.com/tu-usuario/saboralDia.git
    cd saboralDia
    ```
    2. **Instalar dependencias**
    ```bash
    npm install
    ```
    3. **Iniciar servidor de desarrollo**
    ```bash
    npm run dev
    ```
    4. **Abrir en el navegador**
    ```
    http://localhost:3000

## 💻 Uso

    ### 1. **Acceder a la Aplicación**

        Al abrir la aplicación, se presenta la pantalla de bienvenida con tres opciones:
        - **Iniciar Sesión** - Para usuarios registrados
        - **Registrarse** - Crear cuenta nueva
        - **Entrar como Invitado** ⭐ - Acceso sin registro (modo invitado)

    ### 2. **Buscar Recetas**

        En la página principal:
        - **Buscar por nombre**: Escribe el nombre de una receta (ej: "pizza", "sopa")
        - **Buscar por ingrediente**: Escribe un ingrediente (ej: "pollo", "tomate")
        - La búsqueda acepta tanto **español** como **inglés**
        - Presiona Enter o click en "Buscar"

    ### 3. **Ver Detalle de Receta**

        Click en cualquier receta para ver:
        - Imagen en alta calidad
        - Lista de ingredientes con cantidades
        - Instrucciones paso a paso
        - Video tutorial de YouTube
        - Categoría y origen

    ### 4. **Guardar Favoritos**

        - Click en el ícono de ❤️ en cualquier receta
        - Accede a tus favoritos desde el header
        - Los favoritos se guardan automáticamente en localStorage

    ### 5. **Planificar Menú Semanal**

        - En el detalle de una receta, selecciona un día de la semana
        - Accede al planificador desde el header
        - Organiza tu menú de Lunes a Domingo

## 🔌 API

    ### TheMealDB API
    **Base URL:** `https://www.themealdb.com/api/json/v1/1`

## 🔮 Futuras Mejoras

    ### Funcionalidades Planeadas

        - [ ] **Sistema de calificaciones y reseñas**
        - Permitir a usuarios calificar recetas
        - Comentarios y tips
        - Sistema de puntuación

        - [ ] **Compartir recetas en redes sociales**
        - Botones de compartir
        - Preview cards optimizadas
        - Deep linking

        - [ ] **Modo offline con Service Workers**
        - PWA completa
        - Caché de recetas vistas
        - Sincronización en background

        - [ ] **Lista de compras generada automáticamente**
        - Generar lista desde receta
        - Agregar múltiples recetas
        - Marcar items comprados
        - Exportar a PDF

        - [ ] **Filtros avanzados**
        - Tiempo de preparación
        - Nivel de dificultad
        - Calorías / información nutricional
        - Dietas especiales (vegana, sin gluten, etc)
        - Cocina por región

        - [ ] **Modo oscuro completo**
        - Toggle en settings
        - Persistencia de preferencia
        - Transición suave

        - [ ] **Múltiples idiomas (i18n)**
        - Español, Inglés, Francés, etc.
        - Traducción de UI
        - Selector de idioma

    ### Mejoras Técnicas
        - [ ] **TypeScript**
        - Migración gradual
        - Type safety
        - Mejor DX

        - [ ] **Server-Side Rendering**
        - Migración a Next.js
        - SEO mejorado
        - Performance

        - [ ] **Backend propio**
        - Node.js + Express
        - Base de datos MongoDB/PostgreSQL
        - API REST propia

        - [ ] **Autenticación robusta**
        - OAuth (Google, Facebook)
        - JWT tokens
        - Refresh tokens
        - 2FA

## 👨‍💻 Autor

    **Richard Asto**
        ### Información de Contacto
        - 📧 Email: rasto200516@gmail.com
        - 💼 LinkedIn: [linkedin.com/in/tu-perfil](https://www.linkedin.com/in/richard-asto-flores-421458337/)
        - 🐙 GitHub: [@Richard-Asto](https://github.com/richard-asto)

### Proyecto de Fin de Curso

    Institución:  [IDAT]
    Carrera:      [Desarrollo Front-end]
    Año:          2024-2025
    Profesor:     [Elliot Garamendi]

## 📄 Licencia

    Este proyecto está bajo la Licencia MIT.
    MIT License
    Copyright (c) 2025 Richard Asto

## 🙏 Agradecimientos

    ### Recursos y APIs
        - **[TheMealDB](https://www.themealdb.com/)** - Por proporcionar la API gratuita de recetas
        - **[Unsplash](https://unsplash.com/)** - Por las imágenes de alta calidad
        - **[Lucide Icons](https://lucide.dev/)** - Por la biblioteca de iconos moderna

    ### Herramientas y Frameworks
        - **[React Team](https://react.dev/)** - Por la increíble biblioteca de UI
        - **[Vite Team](https://vitejs.dev/)** - Por la herramienta de build ultrarrápida
        - **[Tailwind Labs](https://tailwindcss.com/)** - Por Tailwind CSS

## 🤝 Contribuciones

    Las contribuciones son bienvenidas. Para contribuir:

## ⭐ Dale una Estrella

    Si este proyecto te fue útil para aprender React, considera darle una ⭐ en GitHub!
