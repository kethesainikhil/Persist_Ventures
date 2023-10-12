import React from 'react'
import cubeimage from "../assets/cubeimage.png"
const SecondHero = () => {
  return (
    <div className=' text-white sm:flex sm:flex-row-reverse sm:items-center sm:mx-20 sm:px-20 sm:justify-center sm:mt-20 sm:p-10'>
       <div className='w-96 p-10 mt-20'>
        <img src={cubeimage} alt="cubeimage" className='w-full h-auto sm:-mt-20 mb-10' />
       </div>
       <div className='flex flex-col items-center sm:w-1/2' >
        <h1 className='text-4xl text-center font-semibold p-3 mb-2 border-b-2' >
        Help Us Build the Future of the Web
        </h1>
        <p className='text-xl px-2'>
        “[Ideaflow] is a key step to realizing the potential of the Web as a medium for collective intelligence.”
        </p >
        <br />
        <p className='-mt-2 ml-auto px-2'>
        -Marty Weiner, Former CTO, Reddit
        </p>
        <p className='bg-teal-400 p-4 my-10 mb-2 font-extrabold max-w-xs sm:font-bold hover:bg-transparent hover:text-teal-400 hover:border-b-2  rounded-md mx-auto'>
        <a href="/">Hiring Key Roles</a>
        </p>
       </div>
    </div>
  )
}

export default SecondHero
