import React from 'react'
import NavBar from '../navbar/Navbar'
import LayoutFooter from '../frame/LayoutFooter'

const Error404 = () => {
  const auth = !!localStorage.getItem('token')

  return (
    <>
      <NavBar type={auth ? "private": "public"} />
      <div>Global Not Found 🙄 a</div>
      <LayoutFooter />
    </>
  )
}

export default Error404