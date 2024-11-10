import React from 'react'
import Section from '../../../ui/sections/Section'
import ActionModal from '../../../ui/modal/ActionModal'
import { BiCodeBlock } from 'react-icons/bi'
import { useAppStore } from '../../../store/useAppStore'
import { Link } from '@tanstack/react-router'
import cleanText from '../../../utils/cleanText'
import ActionModalAreaText from '../../../ui/modal/ActionModalAreaText'

const Experience = () => {
  const {currentUser} = useAppStore()
  //console.log(currentUser);
  
  let urlExperience
  if (currentUser?.linkedinId) {
    urlExperience = `https://www.linkedin.com/in/${currentUser.linkedinId}/details/experience/`
    //urlExperience = ''
  } 

  const field = [
    { name: "text", 
      label: `<strong>Agregar una experiencia copiada de LinkedIn.</strong> 
        <em>Por políticas internas a LinkedIn no podemos traer los datos desde tu perfil, por eso hallamos este método alternativo para que no debas cargarlo todo a mano</em> ${urlExperience ? `
        <a href="${urlExperience}" target="_blank">${urlExperience}</a>` : ''}`, 
      icon: BiCodeBlock,
      default: "Pegar aquí lo de LinkedIn"
    },
  ]

  const actionButtons = [
    { label: 'Limpiar Texto', function: (text) => cleanText(text)}
    // Aquí puedes añadir más funciones con su etiqueta
  ];

  const handleFunction = (data) => {
    console.log(data);
    const text = data.text

    // Regex para extraer cada parte del texto
    const regex = /^(.*)\n(.*)\n(.*)\n(.*)\n/g;

    // Extraemos las partes
    const match = regex.exec(text);
    let result = {}
    if (match) {
      const position = match[1].trim();
      const companyAndWorkMode = match[2].split('  ').map(s => s.trim());
      const auxPeriod = match[3].split(' · ').map(s => s.trim());
      const workPeriod = auxPeriod[0].split(' - ').map(s => s.trim());
      const location = match[4].trim();
  
      // Extraemos "Aptitudes"
      const aptitudesIndex = text.indexOf('Aptitudes:');
      const aptitudes = text.slice(aptitudesIndex + 10).split('·').map(s => s.trim());
  
      // Descripción (todo lo que sigue)
      const description = text.slice(match[0].length, aptitudesIndex).trim();
  
      // Objeto final
      result = {
        position: position,
        company: companyAndWorkMode[0],
        workMode: companyAndWorkMode[1],
        startDate: workPeriod[0],
        endDate: workPeriod[1],
        duration: auxPeriod[1],
        location: location,
        aptitudes: aptitudes,
        description: description
      };

    }
    console.log(result);
  }

  return (
    <Section title="Experience">
      <p>...</p>
      <ActionModalAreaText
        title="Agregar experiencia desde LinkedIn"
        fields={field}
        functionApi={handleFunction}
        actionButtons={actionButtons}
        />
    </Section>
  )
}

export default Experience