import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import jacob from "../assets/jacob.jpeg"
import "./LeaderSlider.css"
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import LeaderCard from './LeaderCard';
import David from "../assets/david.png"
import bat from '../assets/bat.png'
import albert from "../assets/albert.png"
export default function LeaderSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <LeaderCard img={jacob} name="Jacob Cole" designation="CEO" message="Past: MIT Media Lab; researcher with Tim Berners-Lee. Venture Partner at Outliers Fund." />
        </SwiperSlide>
        <SwiperSlide>
            <LeaderCard img={David} name="David Greenspan" designation="Head of Product" message="Past: Co-Founder of AppJet, created Etherpad (acquired by Google); YC W07. 1st Engineer at Meteor." />
            </SwiperSlide>
        <SwiperSlide>
            <LeaderCard img={bat} name="Bat Manson" designation="Head of Engineering" message="Past: Serial Entrepreneur. Engineering Manager at Apple. Director of Engineering at Shone; YC W18." />
            </SwiperSlide>
        <SwiperSlide>
            <LeaderCard img={albert} name="Albert Sławiński" designation="Full Stack Engineer" message="Past: Software Engineer at Palantir. Oxford Alum." />
            </SwiperSlide>
      </Swiper>
    </>
  );
}
