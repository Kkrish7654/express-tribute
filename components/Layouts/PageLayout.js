import React from 'react'
import Header from '../Header/Header'

const PageLayout = ({children}) => {
  return (
    <>
      <Header/>
      <div className='sm:px-12 px-2'>
        {children}
      </div>
    </>
  )
}

export default PageLayout