import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import NavBar from '../layouts/navbar/Navbar';
import LayoutTime from '../layouts/LayoutTime';
import LayoutFooter from '../layouts/LayoutFooter';

export const Route = createFileRoute('/_private')({
  beforeLoad: async ({context}) => {
    const {isAuthenticated} = context;
    // console.log("Auth status:", isAuthenticated);

    // Redirige a la página de login si no está autenticado
    if (!isAuthenticated) { throw redirect({ to: '/login', });}
  },
  component: privateLayout,
})

function privateLayout () {  
  return (
    <>
      <NavBar type="private" />
      <LayoutTime/>
      <Outlet />
      <LayoutFooter />
    </>
  )
}