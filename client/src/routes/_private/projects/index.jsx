import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { getProjects } from '../../../services/api/projects.services'
import { useAppStore } from '../../../store/useAppStore'
import Frame from '../../../ui/boxes/Frame'
import SectionWFilters from '../../../ui/sections/Section.Filter'
import Card from '../../../modules/projects/Card.Projects';

export const Route = createFileRoute('/_private/projects/')({
  component: ProjectPage 
})

function ProjectPage () {

  const [projects, setProjects] = useState([])
  const { currentUser } = useAppStore();

  useEffect(()=>{
    async function getData () {
      const resp = await getProjects()
      setProjects(resp)
      
    }
    getData();
  },[])
  //console.log(projects)
  
  const config = {
    filters: [],
    activeFilter: { },
    fields: [],
    card: Card,
    currentUserId: currentUser._id,
    actions: {},
  }


  return (
    <>
      <Frame css={'w-full mx-5'}>
        <SectionWFilters
          title={"Proyectos"}
          data={projects}
          config= {config}
        />
      </Frame>
    </>
  )
}