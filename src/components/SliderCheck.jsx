import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import MartyWeiner from "../assets/MartyWeiner.jpeg"
import TimDraper from "../assets/TimDraper.jpeg"
import Card from './Card';
import Kelvin from "../assets/KelvinBeachum.jpeg"
import Joe from "../assets/JoeLonsdale.jpeg";
import Naval from "../assets/NavalRavikant.jpeg";
import Ryan from "../assets/ryan.jpeg"

import "./slider.css"
import { EffectCoverflow, Pagination } from 'swiper/modules';
const SliderCheck = () => {
    const slides = [
        {
          imageSrc: `${Naval}`,
          name: 'Naval Ravikant',
          designation: 'Founder of AngelList',
        },
        {
          imageSrc: `${Joe}`,
          name: 'Joe Lonsdale',
          designation: 'Joe Lonsdale',
        },
        {
          imageSrc: `${MartyWeiner}`,
          name: 'MartyWeiner',
          designation: 'Former CTO of Reddit',
        },
        {
          imageSrc: `${TimDraper}`,
          name: 'Tim Draper',
          designation: 'Founder of Draper Associates',
        },
        {
          imageSrc: `${Kelvin}`,
          name: 'Kelvin Jr.',
          designation: 'Investor',
        },
        {
          imageSrc: `${Ryan}`,
          name: 'Ryan Delk',
          designation: 'Founder of Primer',
        }
        // Add more slide objects with image, name, and designation properties
      ];
  return (
    <div className='h-screen text-white bg-black flex items-center justify-center'>
        <div>
        <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true, // Enable slide shadows
        shadow: {
          // Customize the shadow properties as needed
          enabled: true,
          opacity: 0.5, // Adjust the shadow opacity
          blur: 10, // Adjust the shadow blur
          scale: 0.5, // Adjust the shadow scale
        },
      }}
      
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img src={slide.imageSrc} alt={`Slide ${index}`} className='h-[500px]' />
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-75 text-white">
              <p className="text-xl font-semibold">{slide.name}</p>
              <p className="text-sm">{slide.designation}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
        </div>
  </div>
  )
}

export default SliderCheck
