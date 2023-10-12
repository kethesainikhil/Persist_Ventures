import React from 'react'
import styles from "../style"
import heroImage from "../assets/heroImage.png"
const Hero = () => {
  return (
// {/* <div className='flex items-center justify-center ss:flex-wrap-reverse md:pl-10 md:p-10 ss:p-5 md:mx-30 '>
// <div className='ss:flex flex-col ss:text-center md:text-left'>
// <h1 className="font-poppins font-semibold  ss:text-[55px] text-[30px] text-white ss:leading-[64.8px] leading-[60px]">
//             The Intelligence <br className="sm:block hidden" />{" "}
//             <span className="text-white">Amplification</span>{" "}<br className="sm:block hidden" />{" "}
//             <span className="text-white">Company</span>{" "}
//           </h1>
//         <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
//         We’re creating an ecosystem for humans and machines to work together to solve the world’s most important problems – starting with a notebook that augments your intelligence.
//         </p>
//         <ul className='md:flex flex-row justify-between md:px-0 p-10 ss:px-20'> 
//                         <li className=" text-xl text-white md:py-4 md:px-8 text-center font-bold bg-teal-300 rounded-md ss:p-4  md:border-b-0  hover:bg-transparent">
//                   <a href="#about" >
//                     Try Ideaflow Notes
//                   </a>
//                 </li>
//                 <li className=" pb-2 text-xl font-bold md:py-4 text-teal-300 py-2 px-6 text-center   md:border-b-0  md:hover:bg-transparent">
//                   <a href="#blog" >
//                     iOS
//                   </a>
//                 </li>
//                 <li className=" pb-2 mt-0 text-xl md:py-4 font-bold text-teal-300 py-2 px-6 text-center  md:border-b-0  md:hover:bg-transparent">
//                   <a href="#contact">
//                     Guide
//                   </a>
//                 </li>
//                 <li className=" pb-2 mt-0 text-xl md:py-4 font-bold text-teal-300 py-2 px-6 text-center   md:border-b-0   md:hover:bg-transparent">
//                   <a href="#contact">
//                     Twitter
//                   </a>
//                 </li>
//                 <li className="pb-2 mt-0 text-xl md:py-4 font-bold text-teal-300 py-2 px-6 text-center   md:border-b-0   md:hover:bg-transparent">
//                   <a href="#contact">
//                     Newsletter
//                   </a>
//                 </li>
//             </ul>
// </div>
      

//         <div className="ss:py-10 mt-10 ">
//         <img src={heroImage} alt="billing" className="w-[70%] h-[100%] mt-2 ss:mx-auto" />
//         </div>
// </div> */}
<div className='sm:bg-black sm:flex sm:flex-row-reverse sm:items-center sm:justify-center'>
  <div className='w-full sm:h-full p-10 mt-10 mb-10' >
    <img src={heroImage}alt="heroimage"  className=' sm:p-10 sm:h-full sm:w-[600px]' />
  </div>
  <div className='text-white text-center sm:flex  mt-0 sm:flex-col sm:justify-start'>
    <h1 className='font-bold text-6xl leading-12 px-2 sm:text-left sm:mx-20 sm:p-11'>
    The Intelligence <br />Amplification <br /> Company
    </h1>
    <p className='text-xl p-3 sm:w-3/4 sm:text-2xl sm:mx-auto sm:text-left'>
    We’re creating an ecosystem for humans and machines to work together to solve the world’s most important problems – starting with a notebook that augments your intelligence.
    </p>
    <div>
    <ul className='leading-9 sm:flex sm:text-2xl sm:font-bold sm:items-center sm:justify-end sm:mt-10 sm:ml-20 sm:pl-5'>
      <li className='bg-teal-400 p-2 mb-2 font-extrabold max-w-xs sm:font-bold hover:bg-transparent hover:text-teal-400 hover:border-b-2  rounded-md mx-auto'>Try Ideaflow Notes</li>
      <li className='text-teal-400 p-2 font-extrabold hover:border-b-2 sm:font-bold  max-w-xs mx-auto '>iOS</li>
      <li className='text-teal-400 p-2 font-extrabold hover:border-b-2 sm:font-bold max-w-xs mx-auto'>Guide</li>
      <li className='text-teal-400 p-2 font-extrabold hover:border-b-2 sm:font-bold max-w-xs mx-auto'>Twitter</li>
      <li className='text-teal-400 p-2 font-extrabold hover:border-b-2 sm:font-bold max-w-xs mx-auto'>Newsletter</li>
    </ul>
    </div>
  </div>
</div>

  )
}

export default Hero
