import { createFileRoute } from '@tanstack/react-router'
import { associateLoader } from '../../services/api/users.services';
import { useEffect, useState } from 'react';
import PageUser from '../../modules/user/PageUser';
import Frame from '../../ui/boxes/Frame'

export const Route = createFileRoute('/_public/$username')({
  loader: async ({ params }) => {
    const username = params.username;
    return associateLoader(username)
  },
  component: UserPage
})

function UserPage () {
  const user = Route.useLoaderData()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return <div className="text-center text-gray-500">Cargando...</div>;
  }

  return (
    <Frame redirect={'/'} css={"w-9/12"}>
      <PageUser user={user} />
    </Frame>
  );
}
