# Estructura del Proyecto Frontend

Esta estructura está diseñada para proyectos en React que requieran modularidad y organización clara. A continuación se detalla la función de cada carpeta en el proyecto.

## Estructura General

```
/frontend
│
├── /public               # Archivos estáticos
│   ├── index.html
│   └── favicon.ico
│
├── /src                  # Código fuente de la aplicación
│   │
│   ├── /assets           # Recursos como imágenes, fuentes, estilos globales
│   │   ├── /images
│   │   ├── /fonts
│   │   └── /styles       # Archivos de CSS o SASS
│   │
│   ├── /components       # Componentes reutilizables (cortos y versátiles)
│   │   ├── Navbar        # Barra de navegación reutilizable
│   │   ├── Spinner       # Indicador de carga
│   │   ├── Modal         # Modal genérico
│   │   └── Button        # Botón genérico
│   │
│   ├── /layouts          # Estructura general de la aplicación
│   │   ├── MainLayout    # Layout principal (con navbar, footer, etc.)
│   │   └── AuthLayout    # Layout para vistas de autenticación
│   │
│   ├── /modules          # Módulos específicos de la app (lógica de negocio)
│   │   ├── Dashboard     # Módulo de dashboard
│   │   │   ├── DashboardPage.jsx
│   │   │   └── DashboardService.js
│   │   └── UserProfile   # Módulo de perfil de usuario
│   │       ├── ProfilePage.jsx
│   │       └── ProfileService.js
│   │
│   ├── /pages            # Vistas de nivel superior
│   │   ├── Home.jsx      # Página de inicio
│   │   ├── Login.jsx     # Página de inicio de sesión
│   │   └── NotFound.jsx  # Página 404
│   │
│   ├── /ui               # Componentes de interfaz agrupados por funcionalidad
│   │   ├── boxes         # Contenedores, cards
│   │   │   ├── Card.jsx
│   │   │   └── Box.jsx
│   │   ├── forms         # Formularios y campos de entrada
│   │   │   ├── Input.jsx
│   │   │   └── FormGroup.jsx
│   │   ├── sections      # Secciones con estructura específica
│   │   │   ├── HeroSection.jsx
│   │   │   └── FeatureSection.jsx
│   │   └── tables        # Componentes de tablas, celdas
│   │       ├── Table.jsx
│   │       └── TableRow.jsx
│   │
│   ├── /utils            # Funciones y helpers de utilidad
│   │   ├── formatDate.js # Ejemplo: formateo de fechas
│   │   ├── api.js        # Ejemplo: configuración API
│   │   └── validations.js # Ejemplo: validaciones comunes
│   │
│   ├── App.jsx           # Componente raíz de la app
│   ├── index.js          # Punto de entrada
│   └── router.js         # Configuración de enrutamiento
│
└── /tests                # Pruebas
    ├── /components       # Pruebas de componentes
    ├── /modules          # Pruebas de lógica de negocio específica
    └── /utils            # Pruebas de funciones y helpers

```


### Descripción Detallada

- ### `/public`
  Contiene archivos estáticos, como `index.html` y el ícono `favicon.ico`.

- ### `/src`
  Contiene el código fuente de la aplicación, organizada en subcarpetas según la funcionalidad.

  - #### `/assets`
    Incluye recursos como imágenes, fuentes, y estilos globales para toda la aplicación.
    
    - **Ejemplo de subcarpetas:**
      - `/images`: Imágenes utilizadas en la app.
      - `/fonts`: Fuentes personalizadas.
      - `/styles`: Archivos CSS o SASS.

  - #### `/components`
    Componentes reutilizables que no dependen de una vista o módulo específico. Ejemplos:
      - `Navbar`: Barra de navegación reutilizable.
      - `Spinner`: Indicador de carga.
      - `Modal`: Modal genérico.
      - `Button`: Botón genérico.

  - #### `/layouts`
    Define las estructuras de diseño global de la aplicación. 
    - `MainLayout`: Layout principal con elementos comunes como el navbar o el footer.
    - `AuthLayout`: Layout específico para vistas de autenticación.

  - #### `/modules`
    Contiene la lógica de negocio específica de la aplicación. Cada módulo tiene su propia estructura y lógica, con sus componentes y servicios internos. Ejemplos:
      - `Dashboard`: Módulo de dashboard.
      - `UserProfile`: Módulo de perfil de usuario.

  - #### `/pages`
    Vistas de nivel superior, representando rutas principales en la aplicación. Ejemplos:
      - `Home`: Página de inicio.
      - `Login`: Página de inicio de sesión.
      - `NotFound`: Página de error 404.

  - #### `/ui`
    Agrupa elementos de la interfaz por funcionalidad para una organización clara y estructura modular.
    
    - **Subcarpetas y ejemplos de componentes:**
      - `/boxes`: Contenedores, como `Card` o `Box`.
      - `/forms`: Formularios y campos de entrada, como `Input` o `FormGroup`.
      - `/sections`: Secciones con estructuras específicas, como `HeroSection` o `FeatureSection`.
      - `/tables`: Componentes relacionados con tablas, como `Table` y `TableRow`.

  - #### `/utils`
    Contiene funciones y helpers que se utilizan en toda la aplicación.
    
    - **Ejemplos:**
      - `formatDate.js`: Formateo de fechas.
      - `api.js`: Configuración de llamadas a la API.
      - `validations.js`: Validaciones comunes.

  - #### Archivos raíz
    - `App.jsx`: Componente raíz de la aplicación.
    - `index.js`: Punto de entrada de la aplicación.
    - `router.js`: Configuración de enrutamiento.

- ### `/tests`
  Estructura para pruebas de la aplicación, organizadas por tipo de función o componente. Incluye:
  - `/components`: Pruebas de componentes.
  - `/modules`: Pruebas de lógica de negocio específica.
  - `/utils`: Pruebas de funciones y helpers.

## Ventajas de esta Estructura

- **Modularidad**: Facilita la separación lógica y visual de componentes, con una estructura clara y reutilizable.
- **Escalabilidad**: Permite añadir o modificar módulos sin afectar a otras partes de la aplicación.
- **Simplicidad y Organización**: La organización por funcionalidad hace que la estructura sea fácil de entender y seguir.

Este modelo es flexible y puede adaptarse a diferentes necesidades, manteniendo siempre una estructura simple y eficiente.
