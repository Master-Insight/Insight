import React from 'react'
import NavBar from './Navbar'
import LayoutFooter from './LayoutFooter'

const Error404 = () => {
  const auth = useState(!!localStorage.getItem('token'))

  return (
    <>
      <NavBar type={auth ? "private": "public"} />
      <div>Global Not Found 🙄 a</div>
      <LayoutFooter />
    </>
  )
}

export default Error404