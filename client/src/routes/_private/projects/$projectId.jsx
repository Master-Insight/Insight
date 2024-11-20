import { createFileRoute } from '@tanstack/react-router'
import { getProject } from '../../../services/api/projects.services'
import { useState } from 'react'
import Frame from '../../../ui/boxes/Frame'
import { useAppStore } from '../../../store/useAppStore'

export const Route = createFileRoute('/_private/projects/$projectId')({
  loader: async ({ params }) => {
    return getProject(params.projectId)
  },
  component: ThisProject
})

function ThisProject () {
  const [project, setProject] = useState(Route.useLoaderData())
  const { currentUser } = useAppStore();

  console.log(project);
  
  const config = {
    filters: [],
    activeFilter: { },
    fields: [],
    card: <p>Card</p>,
    currentUserId: currentUser._id,
    actions: {},
  }

  return (
    <Frame>
      <h2 className='text-3xl font-bold'>Proyecto: {project.title}</h2>








    </Frame>
  )
}