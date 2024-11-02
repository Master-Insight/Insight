import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { useAppStore } from '../store/useAppStore';
import { useEffect } from 'react';
import Error404 from '../layouts/Error404';
import ErrorComponent from '../ui/error/ErrorComponent';

export const Route = createRootRouteWithContext()({
  component: PageRoot,
  notFoundComponent: Error404,
  errorComponent: ({ error, reset }) => {
    return <ErrorComponent error={error} />
  },
})

function PageRoot () {
  const { isAuthenticated, getUser } = useAppStore()
  useEffect(()=>{ isAuthenticated && getUser() }, [])
  return ( <Outlet /> )
}