import PricingCard from '@/components/Cards/PricingCard'
import React from 'react'

const Pricing = () => {

  // basic lists
  const ListBasic = [
    { title:"Memorial page active for 15 days" },
    { title:"Upload 5 photos" },
  ]

  // premium lists
  const ListPremium = [
    { title:'Memorial page active for life of subsctiption' },
    { title:'Invite multiple page admins to collaborate on the memorial page' },
    { title:'Invite multiple page admins to collaborate on the memorial page' },
  ]

  // premium lifetime list
  const LifetimeList = [
    { title:"Memorial page active for lifetime" },
    { title:"Upload unlimited photos" },
    { title:"Invite multiple page admin to collaborate on the memorial page" },
  ]

  // svg tick icon
  const premiumTick = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1.28491 7.37029L4.74254 11.4467L12.2341 1.54688" stroke="white" stroke-width="1.99075"/>
    </svg>
  )

  const basicTick = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1.70691 7.36215L5.14559 11.4383L12.5961 1.53906" stroke="#1A4D43" stroke-width="1.97985"/>
    </svg>
  )
  // end

 
  return (
    <div className=" bg-white min-h-[60vh] flex items-center justify-center">
    <div className="  w-full sm:px-12 px-4 pt-12  pb-12 items-start justify-between">
      {/* title and description for the section */}
      <div className='text-center text-[#2B2B2B]'>
        <h4 className='text-[24px] font-semibold '>Pricing Plans</h4>
        <p className='text-sm'>See what our premium plans include</p>
      </div>

      {/* All Pricing Cards */}
      <div className='grid sm:grid-cols-3 mt-6 justify-start items-start gap-6 h-full'>

         {/*Basic Card  */}
        <PricingCard 
          Lists={ListBasic} 
          backgroundColor={"bg-white"} 
          textColor={"text-black"} 
          pricing_title="Basic" 
          price="Free"
          tick_svg={basicTick}
        />

        {/* Premium Card */}
        <PricingCard 
          Lists={ListPremium} 
          backgroundColor={"bg-gradient-to-r from-[#80533B] via-[#A67354] to-[#D09770]"} 
          textColor={"text-white"} 
          pricing_title="Premium Monthly" 
          price="INR 999/-"
          tick_svg={premiumTick}
        />

        {/* Premium lifetime card */}
        <PricingCard 
          Lists={LifetimeList} 
          backgroundColor={"bg-white"}  
          textColor={"text-black"} 
          pricing_title="Premium Lifetime" 
          price="INR 6999/-"
          tick_svg={basicTick}
        />
      </div>
    </div>
    </div>
  )
}

export default Pricing