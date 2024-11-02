import { createLazyFileRoute } from '@tanstack/react-router'
import { useGetAssociates } from '../../apis/users.services'
import Frame from '../../modules/layout/frame/Frame'
import AssociateCard from '../../modules/user/AssociateCard'

export const Route = createLazyFileRoute('/_public/members')({
  component: membersPage
})

function membersPage () {
  
  //const associates = Route.useLoaderData()
  const { data: associates, isLoading, error } = useGetAssociates()

  if (isLoading) { return <span>Loading...</span> }
  if (error) { return <span>Error: {error.message}</span> }
  if (!associates || associates.length === 0) { return <span>No hay asociados disponibles</span>; }

  return (
    <Frame>
      <h1 className="text-3xl font-bold text-center mb-8">Asociados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {associates.map((associate) => (
          <AssociateCard
            key={associate._id}
            username = {associate.username}
            name={associate.full_name}
            title={"--- Agregar titulo ---"}
            bio={associate.bio}
            profileImage={associate.photo}
          />
        ))}
      </div>
    </Frame>
  );
}