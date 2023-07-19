import React from 'react'
import Link from 'next/link'

const PricingCard = ({pricing_title, Lists, backgroundColor,textColor, price, tick_svg}) => {
  return (
    <div 
    //style={{background:'linear-gradient(270deg, #D09770 0%, #C68E69 7.00%, #A67354 32.00%, #8E5F44 57.00%, #80533B 80.00%, #7C4F38 100%), linear-gradient(180deg, #CE956F 0%, #7C4F38 100%)'}}
    className={`${backgroundColor} ${textColor} w-full border p-6 rounded-lg h-full flex flex-col justify-between`}>
      <div className='flex flex-col gap-4'>
        <div className='flex sm:flex-col items-center sm:items-start justify-between'>
          <p className=''>{pricing_title}</p>
          <h2 className='text-[24px] sm:text-[26px] font-semibold'>{price}</h2>
        </div>
        

        <div>
          <ul className='flex flex-col gap-4'>
            {
              Lists.map((list) => (
                <li className='flex gap-3 items-center'>
                  <div>
                    {tick_svg}
                  </div>
                  <span className='text-sm'>
                    {list.title}
                  </span>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='my-4'>
            <p>Plus the standard features listed below</p>
        </div>

        
      </div>
      <div>
        <Link href="#"
                style={{background:"#FAF7F0"}}
                className={`w-full bottom-0  p-3 sm:p2 flex justify-center items-center rounded-md my-2`}  
              >
                <p className='text-black'>Get Started</p>
                {/* icon end */}
              </Link>
        </div>
    </div>
  )
}

export default PricingCard