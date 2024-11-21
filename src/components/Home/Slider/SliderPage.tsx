'use client';
import React, { useEffect, useState } from 'react';
import { PiCaretLeft, PiCaretRight } from 'react-icons/pi';
import Slider, { CustomArrowProps } from 'react-slick';

const SliderPage = () => {
  const [currentTime, setCurrentTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setCurrentTime({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const timer = setInterval(updateTime, 1000);
    updateTime(); // Initialize the time immediately

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  // Define custom arrows with proper typing
  const NextArrow = (props: CustomArrowProps) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-[155px] top-[-50px]"
        onClick={onClick}>
        <PiCaretLeft />
      </div>
    );
  };

  const PrevArrow = (props: CustomArrowProps) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute top-0 right-2"
        onClick={onClick}>
        <PiCaretRight />
      </div>
    );
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <div className="md:px-32 px-2">
          <div className="text-red-500 text-[16px] font-semibold border-l-[20px] pl-4 py-5 rounded-full border-red-500">
            Today’s
          </div>
        </div>
        <div className="px-32 flex md:flex-row flex-col gap-8 items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="text-[36px] font-semibold text-black">
              Flash Sales
            </div>
            <div className="flex flex-row gap-8">
              {/* Days */}
              <div className="flex flex-col items-center">
                <p className="text-black font-medium text-sm">Days</p>
                <p className="text-gray-600 font-semibold text-lg">
                  {currentTime.days}
                </p>
              </div>
              {/* Hours */}
              <div className="flex flex-col items-center">
                <p className="text-black font-medium text-sm">Hours</p>
                <p className="text-gray-600 font-semibold text-lg">
                  {currentTime.hours}
                </p>
              </div>
              {/* Minutes */}
              <div className="flex flex-col items-center">
                <p className="text-black font-medium text-sm">Minutes</p>
                <p className="text-gray-600 font-semibold text-lg">
                  {currentTime.minutes}
                </p>
              </div>
              {/* Seconds */}
              <div className="flex flex-col items-center">
                <p className="text-black font-medium text-sm">Seconds</p>
                <p className="text-gray-600 font-semibold text-lg">
                  {currentTime.seconds}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-32 relative overflow-hidden">
          <Slider {...settings}>
            <div className="w-[500px] h-[500px] bg-red-50">hello</div>
            <div className="w-[500px] h-[500px] bg-red-50">hello developer</div>
          </Slider>
        </div>
      </div>

      <div className="w-full pl-32 bg-lime-500">asdf</div>
    </div>
  );
};

export default SliderPage;
