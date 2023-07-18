'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Social = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  return (
    <div className=" bg-[#FAF7F0]">
     <div className=" h-[60vh] w-full sm:px-12 px-4 pt-12 grid grid-cols-2">
        <div >
        <h4 className='font-semibold text-[28px] text-[#2B2B2B]'>Share across social network </h4>
          <p className='text-sm text-[#2B2B2B]'>Get memorial webpage link to share</p>
        </div>

        <div>
          <Slider {...settings}>
            <div>
              1
            </div>
            <div>
              2
            </div>
            <div>
              3
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Social