import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../style'
import SecondMidSection from '../components/SecondMidSection'
import cubeimage from "../assets/cubeimage.png"
import SecondHero from '../components/SecondHero'
import Mission from '../components/Mission'
import SliderCheck from '../components/SliderCheck'
import LeaderCard from '../components/LeaderCard'
import LeaderSlider from '../components/LeaderSlider'
import WhoWeR from '../components/WhoWeR'
import PresentHiring from '../components/PresentHiring'
import Footer from '../components/Footer'
const Werhiring = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <div className={`${styles.boxWidth}`}>
        <Navbar name="Careers" />
      </div>
      <div>
        <SecondHero />
      </div>
      <div>
        <Mission />
      </div>
      <div>
        <h1 className='text-white text-4xl sm:mt-20 text-center'>Advisors</h1>
      </div>
      <div className='-mt-60   sm:-mt-40'>
        <SliderCheck />
      </div>
      <div>
        <h1 className='text-4xl text-center text-white -mt-20 mb-20 sm:mb-0 sm:-mt-20 sm:ml-20'>Leadership</h1>
        <LeaderSlider  />
      </div>
      <div>
        <WhoWeR />
      </div>
<div className='bg-slate-50'>
<div className='mt-10  flex flex-col items-center pb-10 '>
        <h1 className='text-4xl font-bold text-black text-center p-10'>Open Positions</h1>
        <p className='p-4 bg-sky-500 text-white text-center text-lg'><a href="/">Ideaflow.io Engineering Hiring Update 2023</a></p>
      </div>
      <div>
        <PresentHiring title="Full Stack Engineer" detail="Who has significant frontend experience and is up to the challenge of writing something as complex and high performance as an IDE in JavaScript." />
      </div>
      <p className='text-gray-500 sm:p-10 p-0 text-center text-lg'>"We need to create extensions of our ability to make sense of the world together." ~Jerry Michalski</p>
      <div className='sm:mr-40'>
        <div className='sm:flex'>
        <PresentHiring title="Who wants to build the best-ever, low-friction personal notes app."/>
        <PresentHiring title="Product Designer" detail="Who has an excellent product sense, as well as exceptional user experience & user interface skills." />
        </div>
        <div className='sm:flex'>
        <PresentHiring title="Marketing Associate" detail="Who is an outstanding writer and strategic mind." />
        <PresentHiring title="ML (NLP) Engineer" detail="Who has the gumption to write something on par with a new search engine. Ideally you are familiar with dependency parse trees and have written an interpreter in the past." />
        </div>
      </div>
      <p className='text-gray-500 mt-10 sm:p-10 p-0 text-center text-lg'>"Art is that which holds your attention beyond practicality."</p>
      <p className='text-gray-500 mt-5 sm:-mt-10 sm:p-10 p-0 text-center text-lg'>We believe diverse teams are the most effective – female and minority candidates strongly encouraged to apply! <br /><p className='text-gray-500 mt-5 sm:mt-2 p-0 text-center text-lg '>Further Reading: <a href="/" className='text-blue-800 text-xl border-b-blue-800'>hiringblurb.jacobcole.net</a></p></p>
      
</div>
<div>
        <Footer />
      </div>
  </div>
  )
}

export default Werhiring
