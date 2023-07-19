import React from 'react'
import PageLayout from '../../Layouts/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {

  //Left list details home page
  const ListDetails = [
    {title:'1000+ pre-made templates to choose'},
    {title:'100s of shlokas, prayers & inspirational quotes'},
    {title:'Share a well-designed obituary on WhatsApp, Facebook, Telegram & more'},
    {title:'Make a tribute page with photos, videos, and personal writings, invite others to join'},
  ]
  // list end


  return (
   
      <div className='grid sm:grid-cols-2 pt-4 sm:pt-0 sm:justify-end sm:items-center w-full sm:-my-10 h-auto sm:min-h-[90vh] sm:px-12 px-4 bg-[#FAF7F0]'>
        {/* left title */}
        <div className='flex flex-col gap-6'>
          <div>
          <h1 className='text-[28px] sm:text-[45px] leading-tight text-[#2B2B2B] sm:capitalize font-bold'>Create an obituary, in less than a minute!</h1>
              <p className='text-[19px] font-medium mt-1 text-[#2B2B2B]'>
              Remembering departed loved one
            </p>
          </div>
            
            {/* List details start here */}
            <ul className='flex gap-2'>
              
              <div className='flex flex-col gap-4'>
              {
                ListDetails.map((list) => (
                  <li className='text-[#2B2B2B] text-xs sm:text-[17px] flex items-center gap-2'>
                    {/* list icon */}
                    <i className='sm:scale-100 scale-75'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                      <path d="M0 10.056C0 4.88156 4.21994 0.661621 9.39438 0.661621C14.5688 0.661621 18.7888 4.88156 18.7888 10.056C18.7888 15.2305 14.5688 19.4504 9.36926 19.4504C4.21994 19.4253 0 15.2305 0 10.056ZM15.2973 7.01664C15.2973 6.91617 15.2219 6.86593 15.1466 6.8157C14.7447 6.4138 14.3176 6.0119 13.9409 5.58488C13.765 5.38393 13.6646 5.38393 13.4636 5.58488C11.5797 7.46878 9.69581 9.35268 7.83703 11.2366C7.63608 11.4375 7.56072 11.4124 7.38489 11.2366C6.68157 10.5081 5.95313 9.80482 5.27492 9.10149C5.12421 8.95078 5.04885 8.9759 4.92326 9.10149C4.49624 9.55363 4.06922 9.98065 3.61709 10.4077C3.4915 10.5081 3.46638 10.5835 3.61709 10.7091C4.89814 11.9901 6.20431 13.2712 7.46025 14.5522C7.58584 14.703 7.6612 14.6778 7.78679 14.5522C8.03798 14.2759 8.28916 14.0499 8.54035 13.7736C10.7257 11.5882 12.9361 9.3778 15.1214 7.19248C15.1717 7.14224 15.247 7.092 15.2973 7.01664Z" fill="#2B2B2B"/>
                    </svg>
                    </i>
                    {/* icon end */}

                    {/* list title */}
                    <span>{list.title}</span>
                    {/* list end */}
                  </li>
                ))
              }
              </div>
              

            {/* for mobile screen right image  */}
                <div className='sm:hidden w-full'>    
                  <img className='w-full' src='/images/image 2.png' alt='image'/>
                </div>
            </ul>
            
            {/* Create button memorial page */}
            <div className='mt-2'>
              <Link href="#"
                style={{background:"linear-gradient(90deg, #83553C 0%, #CD956F 100%)"}}
                className='w-full sm:w-[280px] p-4 sm:p2 flex justify-between items-center rounded-md'  
              >
                <p className='text-white'>Create a memorial page</p>

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
        {/* end title */}

        {/* Right slider */}
        <div className='m-8 justify-self-end'>
          <Image width={600} height={300} src="/images/express-home.png" alt='home'/>
        </div>
        {/* end slider */}
      </div>

  )
}

export default Home