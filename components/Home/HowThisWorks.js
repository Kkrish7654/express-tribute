import React from 'react'
import HowItWorksCard from '../Cards/HowItWorksCard'
import PageLayout from '../Layouts/PageLayout'

const HowThisWorks = () => {


  // HowThisWorks card icon, title and description
 
  const CardDetails = [
    {
      icon:"/icons/Frame 1.png",
      title:"Create obituary",
      description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
    },
    {
      icon:"/icons/Frame 1.png",
      title:"Create obituary",
      description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
    },{
      icon:"/icons/Frame 1.png",
      title:"Create obituary",
      description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
    },{
      icon:"/icons/Frame 1.png",
      title:"Create obituary",
      description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
    },
  ]
  return (
    <div className=" bg-[#FAF7F0]">
     <div className=" h-[60vh] bg-white w-full sm:px-12 px-4 pt-8">
      <div>
        <h4 className='font-semibold text-[#2B2B2B] text-[28px]'>How this works</h4>
      </div>

      <div className='grid grid-cols-4 gap-4'>
        {
          CardDetails.map((card) => (
            <HowItWorksCard icon={card.icon} title={card.title} description={card.description}/>
          ))
        }
      </div>
    </div>
    </div>
   
  )
}

export default HowThisWorks