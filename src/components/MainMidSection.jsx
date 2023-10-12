import React from 'react'
import robotpuzzle from "../assets/robotpuzzle.jpeg"
const MainMidSection = () => {
  return (
    <div className='text-white sm:flex sm:items-center sm:gap-4'>
      <div className='sm:ml-[300px] sm:w-[700px] '>
        <img src={robotpuzzle} alt="robotpuzzle" className='sm:h-[600px] sm:w-[1100px]' />
      </div>
      <div className='ml-3 sm:w-[400px]'>
        <h1 className='text-4xl font-semibold  sm:w-3/4 leading-11 border-b-2 p-3 text-left'>Connecting people with matching puzzle pieces</h1>
        <p className='text-2xl mt-5 p-5 italic text-dimWhite'>There are millions of scientists trying to cure the likes of AIDS and Alzheimer’s. Maybe the cure is currently separated in different people’s heads. How can we design the web so that these half-formed solutions can come together? <br /> <span className='text-xl p-2 sm:py-7 sm:text-2xl text-white'>- Sir Tim Berners-Lee, Creator of the Web</span></p>
      </div>
    </div>
  )
}

export default MainMidSection
