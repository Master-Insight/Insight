import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { getProjects } from '../../services/api/projects.services'

export const Route = createFileRoute('/_private/projects')({
  component: ProjectPage 
})

function ProjectPage () {

  const [projects, setProjects] = useState({})

  useEffect(()=>{
    async function getData () {
      const resp = await getProjects()
      setProjects(resp)
      
    }
    getData();
  },[])
  console.log(projects)
  
  return (
    <div>Hello /_private/projects!</div>
  )
}