import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { useAppStore } from '../store/useAppStore';
import { useEffect } from 'react';
import Error404 from '../layouts/Error404';
import ErrorComponent from '../ui/error/ErrorComponent';

export const Route = createRootRouteWithContext()({
  component: PageRoot,
  // beforeLoad: async ({ context }) => {
  //   console.log(context) // esto lo agregue nuevo para rastrear el error
  // },  
  notFoundComponent: Error404,
  errorComponent: ({ error, reset }) => {
    return <ErrorComponent error={error} />
  },
})

function PageRoot () {
  return ( <Outlet /> )
}