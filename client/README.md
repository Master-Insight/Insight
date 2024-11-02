# Frontend Insight - React.JS - Vite

## Estructura
Siguiendo el framework REACT.JS VITE, esta basado en el grupo de librerías de [Tanstack](https://tanstack.com/), donde la idea es implementarla en su totalidad pero se lo va haciendo en la medida posible.
NOTA: TanStack es una librería TypeScript pero se usará JS.

Librerías Principales:

* **Router -- [TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview)**: Gracias a la extensión Vite de esta librería, el enrutado se hace dinámicamente por archivo partiendo desde la carpeta **src/routes**. Esto quiere decir que cualquier archivo ubicado en esta carpeta crea automáticamente una ruta en la app.
  * Adicionalmente al enrutado la librería tiene un manejo de Layouts, carga y precarga de datos, capturadores de parametros propios, herramientas de navegación y de manejo de errores.
* **Formularios -- [Tanstack Form](https://tanstack.com/form/latest/docs/overview)**: es la librería que gestiona los formularios
* **Validación -- [Zod](https://zod.dev/)**: gestiona las validaciones y posee adaptadores que trabajan con TanStack Router y TanStack Form
* **Cache -- [TanStack Query](https://tanstack.com/query/latest)**: es un manejador de memoria cache, su uso no esta bien realizado pero se piensa implementarla correctamente.
* **Estados Globales -- [Zustan](https://zustand-demo.pmnd.rs/)**: manejador de estados globales
* **Peticiones -- [Axios](https://axios-http.com/es/docs/intro)**

Librerías Secundarias:

* **Manejador de Fechas -- [Day.js](https://day.js.org/)**
* **Popups --[Sweet Alert2](https://sweetalert2.github.io/)**
* **Iconos -- [Iconify](https://iconify.design/docs/)**
* **Iconos -- [React-Icons](https://react-icons.github.io/react-icons/)**
* **Visualizador de Código -- [Syntax-Highlighter](https://www.npmjs.com/package/react-syntax-highlighter)**

NOTA: Tanstack tiene gran parte de la documentación en ingles y hay muy poca información en español

## Explicación de cada parte:

## Estructura

* Módulos:
