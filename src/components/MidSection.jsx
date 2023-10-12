import React from 'react'
import firstround from '../assets/firstround.png'
import vc from '../assets/vc.png'
import starx from '../assets/starx.png'
const MidSection = () => {
  return (
    <div className='text-white flex flex-col items-center'>
      <div><h1 className='font-base text-5xl text-center mb-10' >Backed by world-class investors and partners
    </h1>
    </div>
        <div className='flex flex-col items-center font-base text-5xl text-center'>
            <div className='flex items-center gap-4 mb-10 sm:gap-20'>
            <img src={firstround} alt="firstround" className='w-1/4' />
            <img src={vc} alt="8vc" className='w-1/3' />
            <img src={starx} alt="starx" className='w-1/3' />
            
            </div>
            <div>
            <h1>+33more</h1>
            </div>
        </div>
    </div>

  )
}

export default MidSection
