import React from 'react'

const LoadingError = ({ isLoading = false, error = false, css, children }) => {

  const classCss = `text-center text-gray-500 ${css}`

  if (isLoading) {
    return <div className={classCss}>Cargando...</div>;
  }

  if (error) {
    return <div className={classCss}>Error: {error}</div>;
  }

  return <>{children}</>
}

export default LoadingError