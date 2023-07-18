import React from 'react'

// This card is used in homepage second section in home ( HowItWorks.js )
const HowItWorksCard = ({icon, title, description}) => {
  return (
    <div className='flex flex-col gap-4 p-4 border rounded-lg'>
      {/* icon */}
      <div>
        
        <div className='relative overflow-hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 92 92" fill="none">
          <circle cx="46" cy="46" r="46" fill="#02C5FD"/>
          <circle cx="46" cy="46" r="46" fill="url(#paint0_linear_240_150)"/>
          <defs>
            <linearGradient id="paint0_linear_240_150" x1="7.53097" y1="92" x2="103.398" y2="92" gradientUnits="userSpaceOnUse">
              <stop stop-color="#83553C"/>
              <stop offset="1" stop-color="#CD956F"/>
            </linearGradient>
          </defs>
        </svg>

        <i className='absolute top-5 z-20 left-5'>
          <img src={icon} alt="icon" />
        </i>
        </div>
        
      </div>

      {/* title and description */}
      <div className='flex flex-col gap-4'>
          <h4 className='font-semibold text-[#2B2B2B]'>{title}</h4>
        <p className='text-sm text-[#525252]'>{description}</p>
      </div>
    </div>
  )
}

export default HowItWorksCard