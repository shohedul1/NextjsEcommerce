'use client';
import Image from 'next/image'
import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import Slider from 'react-slick';


const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide arrows
  };
  return (
    <Slider {...settings}>
      <div className='w-full h-[280px] relative pb-10 overflow-hidden bg-black'>
        <div className='grid grid-cols-2 p-5'>
          <div className='flex flex-col gap-5'>
            <div className="flex items-center gap-4">
              <Image
                src="/slideLogo.png"
                alt="slideLogo"
                width={500}
                height={500}
                className="object-cover w-10 h-10"
              />

              <p className="text-white font-normal text-sm md:text-base w-full">iPhone 14 Series</p>
            </div>
            <div className='w-[294px] h-[120px] overflow-hidden relative'>
              <p className=' text-xl lg:text-5xl font-semibold leading-tight text-white'>Up to 10% off Voucher</p>
            </div>
            <div className="flex items-center gap-2 translate-y-[-80px] md:translate-y-0">
              <button className="text-xs text-white border-b-2 border-red-50">Shop Now</button>
              <FaLocationArrow className='text-white' />
            </div>

          </div>
          <div>
            <Image
              src="/sliderImage.png"
              width={500}
              height={500}
              alt="sliderImage"
              className="object-cover w-[428px] h-auto"
            />
          </div>

        </div>
      </div>
      <div className='w-full h-[280px] relative pb-10 overflow-hidden bg-black'>
        <div className='grid grid-cols-2 p-5'>
          <div className='flex flex-col gap-5'>
            <div className="flex items-center gap-4">
              <Image
                src="/slideLogo.png"
                alt="slideLogo"
                width={500}
                height={500}
                className="object-cover w-10 h-10"
              />

              <p className="text-white font-normal text-sm md:text-base w-full">iPhone 14 Series</p>
            </div>
            <div className='w-[294px] h-[120px] overflow-hidden relative'>
              <p className=' text-xl lg:text-5xl font-semibold leading-tight text-white'>Up to 10% off Voucher</p>
            </div>
            <div className="flex items-center gap-2 translate-y-[-80px] md:translate-y-0">
              <button className="text-xs text-white border-b-2 border-red-50">Shop Now</button>
              <FaLocationArrow className='text-white' />
            </div>

          </div>
          <div>
            <Image
              src="/sliderImage.png"
              width={500}
              height={500}
              alt="sliderImage"
              className="object-cover w-[428px] h-auto"
            />
          </div>

        </div>
      </div>
      <div className='w-full h-[280px] relative pb-10 overflow-hidden bg-black'>
        <div className='grid grid-cols-2 p-5'>
          <div className='flex flex-col gap-5'>
            <div className="flex items-center gap-4">
              <Image
                src="/slideLogo.png"
                alt="slideLogo"
                width={500}
                height={500}
                className="object-cover w-10 h-10"
              />

              <p className="text-white font-normal text-sm md:text-base w-full">iPhone 14 Series</p>
            </div>
            <div className='w-[294px] h-[120px] overflow-hidden relative'>
              <p className=' text-xl lg:text-5xl font-semibold leading-tight text-white'>Up to 10% off Voucher</p>
            </div>
            <div className="flex items-center gap-2 translate-y-[-80px] md:translate-y-0">
              <button className="text-xs text-white border-b-2 border-red-50">Shop Now</button>
              <FaLocationArrow className='text-white' />
            </div>

          </div>
          <div>
            <Image
              src="/sliderImage.png"
              width={500}
              height={500}
              alt="sliderImage"
              className="object-cover w-[428px] h-auto"
            />
          </div>

        </div>
      </div>
     
    </Slider>
  )
}

export default Carousel