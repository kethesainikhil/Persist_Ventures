import React from 'react'
import first from "../assets/first.png"
import second from "../assets/second.png"
import third from "../assets/third.png"
const WhoWeR = () => {
  return (
    <div className='text-white sm:flex sm:items-center sm:gap-20 '>
      <div className='text-white p-5 sm:w-1/2 '>
      <h1 className='text-3xl font-bold text-center sm:pl-40  leading-10 mb-10 relative sm:text-left sm:text-5xl'>
        <span className="border-b-4 border-white">Who we are</span>
      </h1>
     <div className=' sm:flex  sm:flex-col sm:pl-40'>
     <p className='text-xl sm:text-2xl mb-5'>We are: engineers with an artistic impulse, veteran entrepreneurs, community builders, curators of quotes, hosts of intellectual salons, side project fanatics, lovers of nature and human nature – all united by a desire to scale our ability to help people, and to help the Internet continue to truly serve on the side of the user.
</p>
      <p className='text-xl sm:text-2xl  mb-5'>We believe in the power of small, highly-skilled teams with a deep sense of mutual respect. In each role, we are looking for a special sort of person with strong bias towards action to become deeply passionate about the product and take tremendous ownership.
</p>
      <p className='text-xl sm:text-2xl  mb-5'>At Ideaflow, it’s important for you to be yourself, nurture your creativity, and grow in well being. Join us in building a future where humans and machines work together to solve the world’s most important problems.
</p>
     </div>

    </div>
    <div className='sm:ml-30  sm:mr-20  flex flex-col p-10 py-20 sm:  opacity-100 bg-zinc-950 sm:w-1/4'>
        <h1>People-centric policies</h1>
        <div className='flex flex-row items-center sm:p-2'>
            <img src={first} alt="hi" className='w-[80px] sm:w-[50px] mr-4 mt-5'/>
            <p className=''>$500 per month to promote well being</p>
        </div>
        <div className='flex flex-row items-center sm:p-2'>
            <img src={second} alt="hello" className='w-[80px] sm:w-[50px] mr-4 mt-5' />
            <p className=''>Comprehensive healthcare coverage (including acupuncture!)</p>
        </div>
        <div className='flex flex-row items-center sm:p-2'>
            <img src={third} alt="hi" className='w-[80px] sm:w-[50px] mr-4 mt-5' />
            <p className=''>Donation matching to your favorite charities

</p>
        </div>
    </div>
    </div>
  )
}

export default WhoWeR
