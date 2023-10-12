import React from 'react'
import jacob from "../assets/jacob.jpeg"
const LeaderCard = (props) => {
  return (
    <div className='text-white flex flex-col items-center gap-10 p-0 sm:mx-80 -ml-14 px-10'>
      <div>
        <img src={props.img} alt="jacob" className='rounded-md w-[200px] h-[200px] mt-10' />
      </div>
      <div>
        <h1 className='text-3xl text-center'>{props.name} <br /><span className='text-2xl'>{props.designation}</span></h1>
        <p className='text-lg mt-5'>{props.message}</p>
      </div>
    </div>
  )
}

export default LeaderCard
