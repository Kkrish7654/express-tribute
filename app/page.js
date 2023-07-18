import React from 'react'
import Home from '@/components/Home/Home'
import HowThisWorks from '@/components/Home/HowThisWorks'
import PageLayout from '@/components/Layouts/PageLayout'
import Social from '@/components/Home/Social'

const Main = () => {
  // Main page
  return (
    //Everything goes inside PageLayout
    <PageLayout>
      <div className=''>
        <Home/>
        <HowThisWorks/>
        <Social/>
      </div>
    </PageLayout>
    
  )
}

export default Main