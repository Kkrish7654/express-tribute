import React from 'react'

const FeaturesCard = ({icon, title}) => {
  return (
    <div className='p-4 bg-white flex flex-col gap-4 items-center justify-center'>
      <div>
        <img src={icon} alt='icon'/>
      </div>

      <div className='text-center'>
       <p>{title}</p>
      </div>
    </div>
  )
}

export default FeaturesCard