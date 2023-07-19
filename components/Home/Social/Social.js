'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className='absolute top-1/2 right-8' onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
      <path d="M1 1L7.73934 7.877C7.82174 7.95752 7.88731 8.05423 7.93211 8.1613C7.97691 8.26837 8 8.38358 8 8.5C8 8.61642 7.97691 8.73163 7.93211 8.8387C7.88731 8.94577 7.82174 9.04248 7.73934 9.123L1 16" stroke="#525252" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className='absolute top-1/2 left-0 z-10' onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
        <path d="M8 16L1.26066 9.123C1.17826 9.04248 1.11269 8.94577 1.06789 8.8387C1.02309 8.73163 1 8.61642 1 8.5C1 8.38358 1.02309 8.26837 1.06789 8.1613C1.11269 8.05423 1.17826 7.95752 1.26066 7.877L8 1" stroke="#525252" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  </button>
  );
}

const Social = () => {

  var settings = {
    arrows:true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className:"slick-spacing"
  };

  return (
    <div className=" bg-[#FAF7F0] h-[60vh] flex items-center justify-center">
     <div className="  w-full sm:px-12 px-4 pt-12 pb-12 grid grid-cols-2 items-start justify-between">
        <div className=''>
        <h4 className='font-semibold text-[28px] text-[#2B2B2B]'>Share across social network </h4>
          <p className='text-sm text-[#2B2B2B]'>Get memorial webpage link to share</p>

        {/* Social media links */}
          <div className='mt-4 flex gap-3'>
              <i><img src="/icons/instagram 1.png" alt="instagram" /></i>
              <i><img src="/icons/facebook 1.png" alt="facebook" /></i>
              <i><img src="/icons/twitter 1.png" alt="twitter" /></i>
              <i><img src="/icons/link 1.png" alt="link" /></i>
          </div>
        </div>


      {/* Right side slider carousel */}
      <div className='float-right'>
        <div className='relative'>        
          <Slider {...settings} className='pl-10 pr-8'>
            <div className='flex'>
              <img src='/images/image 321.png' alt='img'/>
            </div>
            <div className='flex'>
             <img src='/images/image 320.png' alt='img'/>
            </div>
            <div className='flex'>
             <img src='/images/image 321.png' alt='img'/>
            </div>
            <div className='flex'>
              <img src='/images/image 320.png' alt='img'/>
            </div>
            <div className='flex'>
              <img src='/images/image 321.png' alt='img'/>
            </div>
          </Slider>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Social