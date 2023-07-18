"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

// header component
const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef(null)

  // nav links
  const NavLinks = [
    {title:'Home', path:'/'},
    {title:'Memorial', path:'/memorial'},
    {title:'Pricing', path:'/pricing'},
  ]
  // end

  // nav links for mobile

  const navLinkMobile = [
    {title:'Home', path:'/'},
    {title:'About Us', path:'/about'},
    {title:'Contact', path:'/contact'},
    {title:'Memorials', path:'/memorials'},
    {title:'Pricing', path:'/pricing'},
    {title:'Sign Up', path:'/signup'},
  ]

  // hamburger click function //


  // Click outside to close navbar
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  // end 

    const handleOnClick = () => {
      setIsOpen(!isOpen)
    }
  // end //

  return (
    <div className='bg-[#FAF7F0]'>
      <nav className='relative flex justify-between items-center py-6 sm:px-12 px-4 '>
        <ul className='hidden sm:block'>
          <li className='flex items-center gap-6'>
            {/* Mapping all navlinks here */}
            {
              NavLinks.map((link) => (
                <Link className='text-[#2B2B2B] text-[15px]' href={link.path}>{link.title}</Link>
              ))
            }
            {/* end */}
          </li>
        </ul>

        {/****** Navbar for mobile screen *******/}
      
            <div ref={navbarRef} style={{boxShadow:isOpen?'0 9999px 0 999999px #0009':""}}
             className={`absolute bg-white h-screen p-6 py-12 w-[75%] top-0 right-0 z-50 transition-all duration-300 ${isOpen ? "right-0" : "right-[-100%]"}`}>
              <div className='flex items-start justify-between'>
                <h4 className='mb-4 font-bold text-2xl'>Menu</h4>
                <button onClick={handleOnClick}>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                </button>
              </div>

              <ul>
                <li className='flex flex-col gap-1'>
                  {/* Mapping all navlinks here */}
                    {
                      navLinkMobile.map((link) => (
                        <Link onClick={handleOnClick} className='text-[#2B2B2B] text-[18px]' href={link.path}>{link.title}</Link>
                      ))
                    }
            {/* end */}
                </li>
              </ul>
              
              {/* Search Box */}
              <div className='mt-8' > 
                <form className="relative">
                <input
                  className='relative w-full px-1 pl-8 py-2 flex items-center text-[13px] rounded-full border border-[#676767]'
                  type="search" name="search" id="search" placeholder='Search for profiles by name' 
                />
                {/* search icon svg */}
                <div className='absolute top-2.5 left-2.5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M12.9134 14.3942L10.3934 11.7808C9.9267 12.1542 9.39003 12.4497 8.78336 12.6675C8.1767 12.8853 7.53114 12.9942 6.8467 12.9942C5.15114 12.9942 3.7163 12.4071 2.54216 11.233C1.36741 10.0582 0.780029 8.62306 0.780029 6.92751C0.780029 5.23195 1.36741 3.7968 2.54216 2.62204C3.7163 1.44791 5.15114 0.86084 6.8467 0.86084C8.54225 0.86084 9.97741 1.44791 11.1522 2.62204C12.3263 3.7968 12.9134 5.23195 12.9134 6.92751C12.9134 7.61195 12.8045 8.25751 12.5867 8.86417C12.3689 9.47084 12.0734 10.0075 11.7 10.4742L14.22 13.0875L12.9134 14.3942ZM6.8467 11.1275C8.01336 11.1275 9.00519 10.7193 9.82216 9.90297C10.6385 9.086 11.0467 8.09417 11.0467 6.92751C11.0467 5.76084 10.6385 4.76902 9.82216 3.95204C9.00519 3.13568 8.01336 2.72751 6.8467 2.72751C5.68003 2.72751 4.68821 3.13568 3.87123 3.95204C3.05487 4.76902 2.6467 5.76084 2.6467 6.92751C2.6467 8.09417 3.05487 9.086 3.87123 9.90297C4.68821 10.7193 5.68003 11.1275 6.8467 11.1275Z" fill="#2B2B2B"/>
                </svg>
                </div>
                {/* svg end */}
              </form>
              </div>

              {/* Social media links */}
              <div className='mt-4 flex gap-3'>
                <i><img src="/icons/instagram 1.png" alt="instagram" /></i>
                <i><img src="/icons/facebook 1.png" alt="facebook" /></i>
                <i><img src="/icons/twitter 1.png" alt="twitter" /></i>
                <i><img src="/icons/link 1.png" alt="link" /></i>
              </div>
            </div>
            
        {/**** end *****/}

        {/* Logo */}
        <div className=' scale-150 sm:125 sm:scale-100'>
          <Image width={100} height={75} src="/svg/logo.svg" alt='Express Tributes'/>
        </div>
        {/* Logo end */}

        <div className='flex items-center gap-4 -mx-6 sm:mx-0'>          
        {/* Search Start */}
            <form className="relative hidden sm:block">
              <input
                className='relative w-[98px] px-1 pl-8 py-2 flex items-center text-[13px] rounded-full border border-[#676767]'
                type="search" name="search" id="search" placeholder='Search' 
              />
              {/* search icon svg */}
              <div className='absolute top-2.5 left-2.5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M12.9134 14.3942L10.3934 11.7808C9.9267 12.1542 9.39003 12.4497 8.78336 12.6675C8.1767 12.8853 7.53114 12.9942 6.8467 12.9942C5.15114 12.9942 3.7163 12.4071 2.54216 11.233C1.36741 10.0582 0.780029 8.62306 0.780029 6.92751C0.780029 5.23195 1.36741 3.7968 2.54216 2.62204C3.7163 1.44791 5.15114 0.86084 6.8467 0.86084C8.54225 0.86084 9.97741 1.44791 11.1522 2.62204C12.3263 3.7968 12.9134 5.23195 12.9134 6.92751C12.9134 7.61195 12.8045 8.25751 12.5867 8.86417C12.3689 9.47084 12.0734 10.0075 11.7 10.4742L14.22 13.0875L12.9134 14.3942ZM6.8467 11.1275C8.01336 11.1275 9.00519 10.7193 9.82216 9.90297C10.6385 9.086 11.0467 8.09417 11.0467 6.92751C11.0467 5.76084 10.6385 4.76902 9.82216 3.95204C9.00519 3.13568 8.01336 2.72751 6.8467 2.72751C5.68003 2.72751 4.68821 3.13568 3.87123 3.95204C3.05487 4.76902 2.6467 5.76084 2.6467 6.92751C2.6467 8.09417 3.05487 9.086 3.87123 9.90297C4.68821 10.7193 5.68003 11.1275 6.8467 11.1275Z" fill="#2B2B2B"/>
              </svg>
              </div>
              {/* svg end */}
            </form>
            

          {/* Search End */}
            
          {/* Right Links */}
            <div className='flex items-center gap-4 scale-75 sm:scale-100'>
              {/* For pets */}
                <Link href="#" className='min-w-[100px] px-1 pr-2 py-1 flex justify-center items-center text-sm gap-1 rounded-full border border-[#676767]'>
                <div className='relative'>

                {/* inside button icon svg */}
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                    <circle cx="13.5" cy="13.5" r="13.5" transform="matrix(-1 0 0 1 27 0.127563)" fill="#7CDDF7"/>
                    <circle cx="13.5" cy="13.5" r="13.5" transform="matrix(-1 0 0 1 27 0.127563)" fill="url(#paint0_linear_538_2059)"/>
                    <defs>
                      <linearGradient id="paint0_linear_538_2059" x1="2.21018" y1="27" x2="30.3451" y2="27" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#83553C"/>
                        <stop offset="1" stop-color="#CD956F"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* svg end */}
                  <Image className='absolute top-[7.5px] left-[6.5px]' width={14} height={12} src="/icons/pawprint.png" alt='paw'/>
                </div>
                <p>
                  For Pets
                </p>
              </Link>
              {/* For pets end */}

              {/* sign up start*/}
              <Link href="#" className='w-[98px] px-3 py-2 flex justify-center items-center text-sm gap-1 rounded-full border border-[#676767]'>
                Sign Up
              </Link>
              {/* sign up end */}

             
            {/* Hamburger menu start */}  
             <button onClick={handleOnClick} className='sm:hidden block scale-125'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 24 16" fill="none">
                <path d="M7.53345 0.44043L22.9998 0.44043" stroke="#2B2B2B" stroke-width="0.813737" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.07471 7.71875H22.9983" stroke="#2B2B2B" stroke-width="0.846965" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.16504 14.9968H22.9999" stroke="#2B2B2B" stroke-width="0.909786" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </button>
            {/* hamburger end */}
              
            </div>
          {/* links End */}
            
        </div>
         
      </nav>
    </div>
  )
}

export default Header