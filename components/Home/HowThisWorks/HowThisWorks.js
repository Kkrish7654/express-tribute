import React from 'react'
import HowItWorksCard from '../../Cards/HowItWorksCard'

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
    <div className=" bg-[#FAF7F0] sm:h-[80vh] flex items-center justify-center">
     <div className="  bg-white w-full sm:px-12 px-4 pt-12 sm:pb-12">
      <div>
        <h4 className='font-semibold text-[#2B2B2B] text-[20px] sm:text-[28px] mb-4'>How this works</h4>
      </div>

      {/* render icons for desktop */}
      <div className='hidden sm:grid grid-cols-4 gap-4 '>
        {
          CardDetails.map((card) => (
            <HowItWorksCard icon={card.icon} title={card.title} description={card.description}/>
          ))
        }
      </div>

      {/* icons for mobile screen */}
      <div className='sm:hidden'>
        <img className='w-full scale-95 ' src='/images/Tributes.png' alt='icons' />
      </div>
    </div>
    </div>
   
  )
}

export default HowThisWorks