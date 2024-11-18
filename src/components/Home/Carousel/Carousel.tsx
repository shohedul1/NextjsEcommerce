'use client';
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the settings object with explicit types for TypeScript
const settings = {

  dots: true,
  infinite: true,
  speed: 500, // Speed of transition between slides
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enables auto-slide
  autoplaySpeed: 5000
}

export default function Carousel() {
  return (
    <div className="w-full h-[344px] pt-10">
      <Slider {...settings}>
        <Image
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt="image1"
          className="w-full h-full object-cover"
          height={500}
          width={500}
          priority={true}
        />
        <Image
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt="image1"
          className="w-full h-full object-cover"
          height={500}
          width={500}
          priority={true}
        />

      </Slider>
    </div>
  );
}
