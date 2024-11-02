import React, { useEffect, useMemo } from 'react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useAppStore } from './store/useAppStore'
import { Spinner } from './ui/loading/Spinner'
import './styles/index.css'

export const queryClient = new QueryClient()

const App = () => {
  const { isAuthenticated, checkAuth, getToken } = useAppStore();

  // Verifica si el usuario está autenticado cuando se monta el componente
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const router = useMemo(
    () =>
      createRouter({
        routeTree,
        context: {
          isAuthenticated,
          token: getToken(),
          queryClient,
        },
        defaultPendingComponent: () => (<div className={`p-2 text-2xl`}><Spinner /></div>),
        defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
        defaultNotFoundComponent: () => <div>Global Not Found 🙄</div>, // 404
      }),
    [isAuthenticated, getToken],
  )

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <TanStackRouterDevtools router={router} />
    </QueryClientProvider>
  )
}

export default App
 // https://www.youtube.com/watch?v=O6dS0_IvvK0