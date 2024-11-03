import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAppStore } from '../../store/useAppStore';

export const Route = createFileRoute('/_auth/auth/linkedin')({
  component: async () => {
    const { token } = Route.useSearch()
    token && console.log(token);

    const navigate = useNavigate({from: '/auth/linkedin'});
    const { login: signIn, getUser } = useAppStore();
    
    await signIn(token);
    await getUser()
    navigate({ to: '/profile' });

    console.log(`${option === 'login' ? 'Login' : 'Register'} successful`, data.message); // <------------ Reemplazar por Notificacion

  return <div>Hello /_auth/linkedin/$token!</div>
}
})