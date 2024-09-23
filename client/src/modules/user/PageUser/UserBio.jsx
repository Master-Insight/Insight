import React, { useState } from 'react'
import { BiSolidUserDetail } from 'react-icons/bi'
import SectionWForm from '../../layout/frame/Section.Form';

const UserBio = ({user, itsMyProfile }) => {
  // Datos a pasar
  const [data, setData] = useState({
    bio: user.bio,          // Biografia del usuario
  });

  // Definición de los campos con validación
  const fields = [
    { name: "bio", label: "Descripción", icon:BiSolidUserDetail, type: "textarea" },
  ];

  return (
    <SectionWForm
      title="Descripción"
      data={data}
      setData={setData}
      isEditable={true}
      isPublic={true}
      fields={fields}
      >
    </SectionWForm>
  )
}

export default UserBio