# Frontend Insight - React.JS - Vite

Este documento describe la estructura y librerías empleadas en el proyecto frontend utilizando React.JS y Vite.

## Estructura

La organización del proyecto sigue el modelo estructural descrito en el archivo adjunto **"Modelo Front.md"**. Este modelo proporciona una separación modular y funcional de las distintas partes de la aplicación, incluyendo assets, componentes, layouts, módulos, y utilidades.

### Descripción de Módulos

Cada módulo agrupa la lógica de negocio y presenta una estructura autónoma que contiene componentes y servicios propios, facilitando así la modularidad y escalabilidad del proyecto. Estos módulos permiten un mantenimiento más sencillo y mejoran la reutilización del código en el proyecto.

## Librerías

Este proyecto está basado en **React.JS** y **Vite**, aprovechando el conjunto de librerías de **[TanStack](https://tanstack.com/)**, que se va integrando progresivamente. Aunque TanStack está escrito en TypeScript, en este proyecto se implementará en JavaScript.

### Librerías Principales

1. **Enrutador - [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview)**
   - **Enrutado dinámico por archivo:** Las rutas se crean automáticamente desde la carpeta `src/routes`, donde cada archivo genera una ruta en la aplicación.
   - **Rutas y Layouts específicos:**
     - **_root:** La ruta base que contiene toda la aplicación.
     - **_public** / **_private:** Layouts específicos.
       - Las rutas que empiezan con "_" funcionan como layouts y no generan rutas individuales.
       - Las carpetas con el mismo nombre se comportan como contenedores de ruta.
   - **Funciones del hook de enrutamiento:**
     - **Estados previos:** usados para precargar datos o validar parámetros antes de renderizar un componente.
       - **beforeLoad (función):** Se ejecuta antes del loader y permite precargar datos.
       - **loader (función):** Ejecuta la lógica antes de renderizar el componente.
     - **component (función):** El componente que se renderizará en la ruta.
   - **Herramientas adicionales:** Incluye capturadores de parámetros, navegación y gestión de errores.

2. **Formularios - [TanStack Form](https://tanstack.com/form/latest/docs/overview)**
   - Se utiliza para gestionar los formularios y sus estados en toda la aplicación, con implementaciones específicas para:
     - **Auth:** Formularios de login y registro.
     - **ActionModal:** Componente modal con acciones específicas.

3. **Validación - [Zod](https://zod.dev/)**
   - Librería de validación con adaptadores que funcionan bien junto a TanStack Router y TanStack Form.

4. **Cache - [TanStack Query](https://tanstack.com/query/latest)**
   - Manejador de cache que aún se encuentra en proceso de implementación completa.

5. **Estados Globales - [Zustand](https://zustand-demo.pmnd.rs/)**
   - Gestor de estados globales para simplificar el manejo del estado en toda la aplicación.

6. **Peticiones - [Axios](https://axios-http.com/es/docs/intro)**
   - Manejador de solicitudes HTTP con configuraciones personalizadas.

7. **Estilos - [TailwindCSS](https://tailwindcss.com/)**
   - Utilizado como framework principal de CSS, permite la creación de interfaces personalizables de forma rápida y eficiente mediante clases utilitarias. TailwindCSS se integra con React y proporciona estilos consistentes y configurables en todos los componentes.

### Librerías Secundarias

- **Manejador de Fechas - [Day.js](https://day.js.org/):** Para el manejo y formateo de fechas.
- **Popups - [Sweet Alert2](https://sweetalert2.github.io/):** Librería para generar ventanas emergentes personalizadas.
- **Iconos - [Iconify](https://iconify.design/docs/):** Librería de iconos.
- **Iconos - [React-Icons](https://react-icons.github.io/react-icons/):** Librería adicional de iconos.
- **Visualizador de Código - [Syntax-Highlighter](https://www.npmjs.com/package/react-syntax-highlighter):** Para mostrar código formateado en la aplicación.

> **NOTA:** Gran parte de la documentación de TanStack está en inglés, y la información en español es limitada.

## Explicación de cada parte

### Módulos

Los módulos están diseñados para encapsular lógica y componentes específicos, garantizando una estructura autónoma que facilite la escalabilidad y el mantenimiento. Por ejemplo:

- **Auth:** Módulo que contiene toda la lógica relacionada con autenticación.
- **User Profile:** Módulo con la lógica y los componentes necesarios para la gestión del perfil del usuario.
- **Contributions:** Módulo con la lógica y los componentes necesarios para la gestión de las contribuciones de los usuarios al grupo.
- **Projects:** Módulo con la lógica y los componentes necesarios para la gestión de los proyectos actuales del grupo.
- **Experiences:** Módulo con la lógica y los componentes necesarios para la gestión de las experiencias de los usuarios.

Esta estructura asegura que cada módulo sea reutilizable y, al mismo tiempo, específico en su función dentro de la aplicación.

### Componentes UI

**Boxes**: Cajas

- **Frame.jsx**
  - `<Frame redirect="" css="">`: es una caja con sombra donde deberia ir todas las paginas con contenido
    - *redirect*: hacia donde dirige el backbutton
    - *css*: permite indicar el tamaño

**Buttons**:
- **BackButtons.jsx**
  - `<BackButtons to="">`

**Icons**:

- **iconifyIcon.jsx**
  - `<Icon name="" category="" display=false>`: muestra un icono según nombre y categoría (se define según el mapa)
  - `<Icon customIcon="">`: se puede pasar dirección de [iconify](https://icon-sets.iconify.design/) directamente
    - Ejemplo: `<Icon name={language} category="languages"/>`
    - Ejemplo: `<Icon customIcon="logos:pip"/>`
    - *Display*: muestra o no el nombre

**Modal**: ventanas modales

- **Modal.jsx**: muestra una ventana modal predefinida
  - `const { isOpen, openModal, closeModal } = useModal();`
  - `<Modal isOpen={isOpen} onClose={closeModal} title="">...</Modal>`
- **ActionModal.jsx**: es un botón que al cliquear abre una ventana modal con un form ("fields") para enviar datos ejecutando la "functionApi"
  - `<ActionModal title="" fields={obj} functionApi={func} defaultValues={obj} />`

**Popups**: mensajes popups (sweetalert2)

- **alerts.jsx**: 
  - `function alertBasic(title, text, icon)`
  - `function alertMessage(title, icon="", time=3)`
  - `function alertAreYouSure(action)`

**Sections**: secciones especiales con funciones prefedinidas

- **Section.jsx**: es una caja donde va contenido
  - `<Section title='opc' css='opc'>...</Section>`
    - *css*: permite indicar el tamaño
- **Section.Form.jsx**: Renderiza una sección que muestra datos dinámicos y permite editarlos a través de un modal si es necesario. 
  - `<SectionWForm title='opc' css='opc' data={obj} setData={func} fields=[array] isEditable=false isPublic=true />`
  - Revisar uso completo en el archivo. Usa `<ActionModal>`
- **Section.Filter.jsx**: Renderiza una sección que mapea una "Card" y permite filtrar sus elementos
  - `<SectionWFilters title='opc' data={obj} config={obj} isFilterPending=bool isElementPending=bool />`
