import React from 'react'
import Header from '../Header/Header'

const PageLayout = ({children}) => {
  return (
    <>
      <Header/>
      <div className='bg-[#FAF7F0] overflow-hidden'>
        {children}
      </div>
    </>
  )
}

export default PageLayout