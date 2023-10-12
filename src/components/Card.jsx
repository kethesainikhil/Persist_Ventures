import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-md">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={props.img} alt="MartyWeiner" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">{props.name}</h1>
        <h2 className='  mb-10 font-dmserif text-xl font-normal text-white'>
        {props.designation}
        </h2>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-400 group-hover:opacity-100">{props.message}</p>
    
      </div>
    </div>
    </div>
  )
}

export default Card
