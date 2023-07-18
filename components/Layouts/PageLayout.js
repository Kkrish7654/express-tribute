import React from 'react'
import Header from '../Header/Header'

const PageLayout = ({children}) => {
  return (
    <div className=' overflow-hidden'>
      <Header/>
      <div className='bg-[#FAF7F0]'>
        {children}
      </div>
    </div>
  )
}

export default PageLayout