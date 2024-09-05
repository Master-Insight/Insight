import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routeTree } from './routeTree.gen'
import './index.css'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Spinner } from './components/Spinner'

export const queryClient = new QueryClient()
const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <div className={`p-2 text-2xl`}>
      <Spinner />
    </div>
  ),
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  defaultNotFoundComponent: () => <div>Global Not Found 🙄</div>, // 404
  context: {
    auth: false, // Cambia a true cuando el usuario esté autenticado
    isAuthenticated: () => !!localStorage.getItem('token'), // Verifica si hay un token en localStorage
    queryClient,
  },
})

// Render the app
const rootElement = document.getElementById('root')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </QueryClientProvider>
  )
}

/* REACT ROUTER
  https://www.youtube.com/watch?v=4xO9Yhmgkrw
*/
