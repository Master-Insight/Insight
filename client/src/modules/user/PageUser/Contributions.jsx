import React, { useEffect, useState } from 'react'
import { getUserContributions } from '../../../services/api/contributions.services';
import Section from '../../../ui/sections/Section';
import ContributionsCard from './ContributionsCard';

const Contributions = ({user}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const [error, setError] = useState(false);
  const [contributions, setContributions] = useState([])

  useEffect(() => {
    const fetchUserContributions = async () => {
      setIsLoading(true);
      try {
        const updatedContributions = await getUserContributions(user._id);
        setContributions(updatedContributions);
      } catch (err) {
        setError("Hubo un error al cargar las contribuciones");
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchUserContributions();
  }, [refresh]);

  console.log(contributions);
  
  if (isLoading) { return <div className="text-center text-gray-500">Cargando...</div>; }
  if (error) { return <div className="text-center text-gray-500">Error: {error}</div>; }

  return (
    <Section title={"Contribuciones"}>
      {contributions.map(
        (item) => ( <ContributionsCard key={item._id} item={item}/> )
      )}
    </Section>
  )
}

export default Contributions