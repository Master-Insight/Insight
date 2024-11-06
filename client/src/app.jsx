import React, { useState, useEffect, useMemo } from 'react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useAppStore } from './store/useAppStore'
import { Spinner } from './ui/loading/Spinner'
import './styles/index.css'

export const queryClient = new QueryClient()

const App = () => {
  const { isAuthenticated, checkAuth, getToken, getUser } = useAppStore();
  const [isAuthChecked, setIsAuthChecked] = useState(false); // Estado para indicar que la autenticación ha sido verificada

  useEffect(() => {
    checkAuth(); // Verifica el estado de autenticación
    setIsAuthChecked(true); // Marca que el chequeo de autenticación se ha completado
  }, [checkAuth]);

  useEffect(() => {
    if (isAuthenticated) {
      getUser(); // Obtiene los datos del usuario si está autenticado
    }
  }, [isAuthenticated, getUser]);

  const router = useMemo(
    () => {
      // Espera a que el estado de autenticación esté definido antes de crear el router
      if (!isAuthChecked) return null;
      
      return createRouter({
        routeTree,
        context: {
          isAuthenticated,
          token: getToken(),
          queryClient,
        },
        defaultPendingComponent: () => (<div className={`p-2 text-2xl`}>Cargando... <Spinner /></div>),
        defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
        defaultNotFoundComponent: () => <div>Global Not Found 🙄</div>, // 404
      });
    }, [isAuthenticated, isAuthChecked, getToken],
  )

  if (!router) {
    return <div className={`p-2 text-2xl`}>Cargando... <Spinner /></div>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <TanStackRouterDevtools router={router} />
    </QueryClientProvider>
  )
}

export default App
 // https://www.youtube.com/watch?v=O6dS0_IvvK0