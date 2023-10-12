import React from 'react'
import roundimage from "../assets/roundimage.jpeg"
const SecondMidSection = (props) => {
  return (
    <div className='text-white sm:flex sm:items-center sm:gap-0'>
        <div className='ml-3 sm:ml-[450px] sm:mr-[100px] sm:w-[500px]'>
      <h1 className='text-5xl font-normal sm:w-3/4 leading-11 border-b-2 p-3 text-left w-full'>{props.title}
</h1>
      <p className='text-2xl p-5 italic w-[600px] leading-10'>{props.firstsubtitle}
 <br /> </p>
 <p className='text-2xl p-5 italic w-[600px] leading-10'>
    {props.secondsubtitle}
 </p>
    <div className='p-10'>
    <h1 className='bg-teal-400 text-xl p-4 font-extrabold max-w-[200px] sm:font-bold hover:bg-transparent text-center hover:text-teal-400 hover:border-b-2  rounded-md'><a href="/">{props.message}</a></h1>
    </div>
    </div>
    <div className='sm:-ml-[70px] sm:w-[600px] '>
      <img src={props.img} alt="robotpuzzle" className='sm:h-[600px] sm:w-[1100px]' />
    </div>
    
  </div>
  )
}

export default SecondMidSection
