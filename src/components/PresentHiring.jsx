import React from 'react'

const PresentHiring = (props) => {
  return (
    <div className=' mt-10 border-2 px-4 sm:flex sm:flex-col sm:ml-60 sm:w-3/4 sm:border-2 sm:px-20 sm:py-6 drop-shadow-lg '>
      <h1 className='text-4xl font-bold  '>{props.title}</h1>
      <p className='text-xl font-semibold '>Remote</p>
      <p className='text-xl'>{props.detail}</p>
      <p className=' p-2 font-bold max-w-xs sm:font-bold h text-teal-400 text-lg text-center py-5 hover:border-b-2 '><a href="/">Apply now</a>
      </p>
    </div>
  )
}

export default PresentHiring
