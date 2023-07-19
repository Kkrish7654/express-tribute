import React from 'react'
import Home from '@/components/Home/Main/Home'
import HowThisWorks from '@/components/Home/HowThisWorks/HowThisWorks'
import PageLayout from '@/components/Layouts/PageLayout'
import Social from '@/components/Home/Social/Social'
import GetStarted from '@/components/Home/GetStarted/GetStarted'
import Tributes from '@/components/Home/Tributes/Tributes'
import Pricing from '@/components/Home/Pricing/Pricing'

const Main = () => {
  // Main page
  return (
    //Everything goes inside PageLayout
    <PageLayout>
      <div className=''>
        <Home/>
        <HowThisWorks/>
        <Social/>
        <GetStarted/>
        <Tributes/>
        <Pricing/>
      </div>
    </PageLayout>
    
  )
}

export default Main