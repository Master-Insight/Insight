import { createFileRoute } from '@tanstack/react-router'
import { getProject } from '../../../services/api/projects.services'
import { useState } from 'react'
import Frame from '../../../ui/boxes/Frame'

export const Route = createFileRoute('/_private/projects/$projectId')({
  loader: async ({ params }) => {
    return getProject(params.projectId)
  },
  component: ThisProject
})

function ThisProject () {
  const [project, setProject] = useState(Route.useLoaderData())
  console.log(project);
  
  return (
    <Frame>
      <h2 className='text-3xl font-bold'>Proyecto: {project.title}</h2>
    </Frame>
  )
}