import React from 'react'
import styles  from '../style'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Test from '../components/test'
import MidSection from '../components/MidSection'
import MainMidSection from '../components/MainMidSection'
import SecondMidSection from '../components/SecondMidSection'
import OwnerSection from '../components/OwnerSection'
import CardCarousel from '../components/CardCarousel'
import Hiring from '../components/hiring'
import Footer from '../components/Footer'
import roundimage from '../assets/roundimage.jpeg'
const Home = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar name="We're Hiring JS,iOS+" />
        </div>
      </div>
      <div className='sm:ml-60 w-full'>
        <Hero />
      </div>
      <div className='sm:p-'>
        <MidSection />
      </div>
      <div className='mt-10'>
        <MainMidSection />
      </div>
      <div className="mt-10">
        <SecondMidSection title="The auto-suggest layer for human thinking" firstsubtitle="Connect fragments of information from siloed sources faster than ever before." secondsubtitle="Your organization's collective memory at your fingertips" img={roundimage} message="Learn more"/>
      </div>
      <div>
        <OwnerSection />
      </div>
      <div>
        <Hiring />
      </div>
      <div className='sm:ml-40'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
