import React from 'react'

const FeaturesCard = ({icon, title}) => {
  return (
    <div className='p-4 bg-white flex sm:flex-col gap-4 items-center sm:justify-center'>
      <div>
        <img className='border-2' src={icon} alt='icon'/>
      </div>

      <div className='text-center'>
       <p>{title}</p>
      </div>
    </div>
  )
}

export default FeaturesCard