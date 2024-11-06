import { createFileRoute, Outlet } from '@tanstack/react-router'

// NO IMPLEMENTADO

export const Route = createFileRoute('/_auth')({
  component: authLayout,
})

function authLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}

