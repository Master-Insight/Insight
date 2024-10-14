import React from 'react'
import Icon from '../../icons/iconifyIcon'

const ContributionsCard = ({item}) => {
  const language = item.languages[0]
  const framework = item.frameworks[0]

  return (
    <div key={item._id} className="border-b border-gray-200 p-4 mb-4">
      <div className="mb-4 flex items-center">
        <Icon name={language} category="languages" className="mr-2" />
        <Icon name={framework} category="frameworks" className="mr-2" />
        <h3 className="text-xl">{item.title}</h3>
      </div>
      {/* <p className="text-gray-600">{item.description}</p> */}
      <div className="flex justify-between">
        <p className="text-gray-600">Creado: {new Date(item.createdAt).toLocaleString()}</p>
        <p className="text-gray-600">Actualizado: {new Date(item.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  )
}

export default ContributionsCard