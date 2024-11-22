import { createFileRoute } from '@tanstack/react-router'
import { getProject, getProjectTasks } from '../../../services/api/projects.services'
import { useEffect, useState } from 'react'
import Frame from '../../../ui/boxes/Frame'
import { useAppStore } from '../../../store/useAppStore'
import SectionWFilters from '../../../ui/sections/Section.Filter'
import LoadingError from '../../../ui/error/LoadingError'

export const Route = createFileRoute('/_private/projects/$projectId')({
  loader: async ({ params }) => {
    return getProject(params.projectId)
  },
  component: ThisProject
})

function ThisProject () {
  const [project, setProject] = useState(Route.useLoaderData() || [])
  const [task, setTask] = useState([])

  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(null);

  const { currentUser } = useAppStore();

  //getProjectTasks
  useEffect(()=>{
    setIsLoading(true)

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const updateData = await getProjectTasks(project._id);
        console.log(updateData);
        
        setTask(updateData);
      } catch (err) {
        setError("Hubo un error al cargar los datos");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  },[refresh])

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

      <LoadingError isLoading={isLoading} error={error}>
        <SectionWFilters
            css="mt-12"
            title={"Tareas"}
            data={task}
            config= {config}
          />
      </LoadingError>

    </Frame>
  )
}