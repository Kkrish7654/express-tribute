import React from 'react'
import Link from 'next/link'

const GetStarted = () => {

  // left lists descriptions
  const Lists = [
    {title:"Enter  details about you and your loved one."},
    {title:"Select a plan, either Basic or Premium."},
    {title:"Complete details of memorial page and share with friends and family.Complete details of memorial page and share with friends and family. "},
  ]

  return (
    <div className=" bg-white h-[100vh] flex flex-col items-center justify-center">
      {/* title for this section */}
        <h4 className='text-center pt-12 text-[28px] font-semibold text-[#2B2B2B]'>Building a memorial page for your loved one is fast and simple.</h4>
      <div className="  w-full sm:px-12 px-4 pt-4 grid grid-cols-2 gap-6 items-start justify-between pb-16">

        {/* Left */}
        <div className='mt-4'>
          <ul className='flex flex-col gap-8'>
            {
              // mapping through lists
              Lists.map((list, index) => (
                <li className='relative flex gap-4 items-center w-full h-full p-6 bg-[#FAF7F0] rounded-md'>
                  <div className="absolute left-0 p-2 w-10 h-10 bg-[#A87354] rounded-full text-center text-white">
                    {index+1}
                  </div>
                  <span className='text-[15px] pl-8 text-[#525252]'>{list.title}</span>
                </li>
              ))
            }
          </ul>
        </div>
        {/* end */}

        {/* Right */}
        <div className='border h-[95%] rounded-md m-4 w-full border-[#A87354] p-6 px-12 flex flex-col gap-6 justify-center items-start'>
            <h4 className='font-semibold text-[16px] capitalize'>I want to share memories of</h4>

            {/* First Name Input */}
            <div className='relative w-full'>
              <input
                className="border border-gray-300 py-3 px-3 text-xs rounded-md w-full"
                type="text"
              />
              <label className="absolute top-0 left-3 -mt-2 bg-white text-gray-500 text-xs px-1">
                First Name
              </label>
              </div>

            {/* Last Name Input */}
            <div className='relative w-full'>
              <input
                className="border border-gray-300 py-3 px-3 text-xs rounded-md w-full"
                type="text"
              />
              <label className="absolute top-0 left-3 -mt-2 bg-white text-gray-500 text-xs px-1">
                Last Name
              </label>
              </div>

            {/* Submit Button */}
            <div className='w-full'>
              <Link href="#"
                style={{background:"linear-gradient(90deg, #83553C 0%, #CD956F 100%)"}}
                className='w-full  p-3 sm:p2 flex justify-center items-center rounded-md'  
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
        {/* end */}
      </div>
    </div>
  )
}

export default GetStarted