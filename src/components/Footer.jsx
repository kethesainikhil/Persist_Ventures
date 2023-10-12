import React from 'react'
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className='text-white ml-4 sm:flex sm:items-start sm:gap-20 sm:p-10 '>
      <div className=''>
        <img src={logo} alt="logo" className='h-[100px] w-[300px]' />
      </div>
<div className='sm:ml-20 sm:flex sm:gap-20'>
<div className='mt-5 text-xl'>
        <p className='p-1 font-semibold'>#rabbithole</p>
        <p className='p-1'><a href="/">Memex</a></p>
        <p className='p-1'><a href="/">Niklas Luhmann's Zettelkasten</a></p>
        <p className='p-1'><a href="/">Collective IQ</a></p>
        <p className='p-1'><a href="/">Intelligence Amplification</a></p>
        <p className='p-1'><a href="/">Tim Berners-Lee's Giant Global Graph</a></p>
        <p className='p-1'><a href="/">Polymath Project</a></p>
        <p className='p-1'><a href="/">Category Theory for Scientists</a></p>
        <p className='p-1'><a href="/">ideaflowplan.jacobcole.net</a></p>
        <p className='p-1'><a href="/">Privacy Policy</a></p>
      </div>
      <div className='mt-4'>
      <p className='p-1 text-xl font-bold'><a href="/">Latest Updates</a></p>
      <p className='p-1'><a href="/">Blog</a></p>
      <p className='p-1'><a href="/">Funding</a></p>
      <p className='p-1'><a href="/">Bullet View Video</a></p>
      </div>
      <div className='mt-4 sm:ml-20'>
      <p className='p-1 text-xl font-bold'><a href="/">Contact</a></p>
      <p className='p-1'><a href="/">Email</a></p>
      <p className='p-1'><a href="/">Linkedin</a></p>
      <p className='p-1'><a href="/">Facebook</a></p>
      <p className='p-1'><a href="/">Twitter</a></p>
      </div>
</div>
    </div>
  )
}

export default Footer
