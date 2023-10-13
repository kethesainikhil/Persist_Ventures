import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import MartyWeiner from "../assets/MartyWeiner.jpeg"
import TimDraper from "../assets/TimDraper.jpeg"
import JohnDevadoss from "../assets/JohnDevadoss.jpeg"
// Import your Card component
import Card from './Card';

const CardCarousel = () => {
  // Initialize Swiper
  const mySwiper = new Swiper('.swiper-container', {
    // Swiper options go here
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <Card
          img={MartyWeiner}
          name="Marty Weiner"
          designation="Former CTO, Reddit Ideaflow Advisor"
          message="A key step to realizing the potential of the Web as a medium for collective intelligence."
        />
        <Card
          img={JohnDevadoss}
          name="John Devadossr"
          designation="Founding Director, Microsoft Digital Consulting"
          message="Ideaflow is the force multiplier for business productivity in this new normal."
        />
        <Card
          img={TimDraper}
          name="Tim Draper"
          designation="Founder, DFJ Ideaflow Investor"
          message="The amount of value that can be unlocked by connecting the right people and ideas together is incredible. I’m very excited for what Ideaflow is building."
        />
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default CardCarousel;
