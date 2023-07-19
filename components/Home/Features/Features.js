import FeaturesCard from '@/components/Cards/FeaturesCard'
import React from 'react'
import Link from 'next/link'

const Features = () => {
  return (
    <div className=" bg-[#FAF7F0] min-h-[60vh] flex items-start justify-start">
      <div className="  w-full sm:px-12 px-4 pt-12  pb-12 flex flex-col gap-8 items-center justify-center">
          <div>
            <h4 className='text-[24px] font-semibold text-center text-[#2B2B2B]'>Features included with the memorial page</h4>
          </div>

          <div className='grid md:grid-cols-5 gap-4'>
            <FeaturesCard icon="/icons/Layer_1.png" title="Comprehensive Memorial Profile"/>
            <FeaturesCard icon="/icons/Layer_2.png" title="Biography (Multiple Language)"/>
            <FeaturesCard icon="/icons/Layer_3.png" title="Comprehensive Memorial Profile"/>
            <FeaturesCard icon="/icons/Layer_4.png" title="Include virtual service details"/>
            <FeaturesCard icon="/icons/Vector.png" title="Easy sharing across social media"/>
          </div>

          {/* Submit Button */}
          <div className='w-full flex items-center justify-center'>
              <Link href="#"
                style={{background:"linear-gradient(90deg, #83553C 0%, #CD956F 100%)"}}
                className='w-[300px] p-3 sm:p2 flex justify-center items-center rounded-md'  
              >
                <p className='text-white'>Get Started</p>

                {/* Svg right icon */}
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                  <path d="M18.1257 13.1418C16.5386 11.5028 14.9613 9.85443 13.3742 8.21538C13.8126 7.81695 14.2407 7.44681 14.6303 7.09476C16.8658 9.45451 19.1663 11.8825 21.4487 14.272C19.0692 16.5356 16.6507 18.8363 14.2322 21.137C13.8609 20.7564 13.4713 20.3469 13.0445 19.8983C14.7214 18.3216 16.398 16.7545 18.1726 15.0756C14.462 14.983 10.9131 14.8944 7.3261 14.8049C7.34154 14.1864 7.35555 13.6251 7.37075 13.0162C10.9387 13.1052 14.4971 13.194 18.0555 13.2829C18.0758 13.2358 18.096 13.1887 18.1257 13.1418Z" fill="white"/>
                </svg>
                </div>
                {/* icon end */}

              </Link>
            </div>
      </div>
    </div>
  )
}

export default Features