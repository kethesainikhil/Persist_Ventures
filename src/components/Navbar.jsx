import React, { useState } from 'react'
import { navLinks } from '../constants'
import logo  from "../assets/logo.png"
import close from "../assets/close.svg"
import hamburgermenu from "../assets/hamburgermenu.svg"
import {Link} from "react-router-dom"
import "../index.css"
const Navbar = (props) => {
    const[navbar,setNavbar] = useState(false);
  return (
    <div>
        <nav className='w-full bg-black fixed top-0 left-0 right-0 z-10'>
            <div className='justify-between px-4 md:mx-auto  lg:max-w-7xl md:items-center md:flex'>
                <div>
                    <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                        <a href="/">
                            <img src={logo} alt="ideaflowlogo"  height="20px" width="200px" className='ss:border-y-2 ss:block md:border-none md:mx-0 md:mt-2' />
                        </a>
                        <div className='md:hidden'>
                            <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border' onClick={()=>setNavbar(!navbar)}>
                                {navbar ? (
                                    <img src={close} width={30} height={30} alt='closebutton'/>
                                ):(
                                    <img src={hamburgermenu} width={30} height={30} alt='menu' className='focus:border-none active:border-none' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-10 md:block md:pb-0 md:mt-7 ${
                        navbar?`p-12 md:p-0 block menu-open` : 'hidden menu-close'
                    }`}>
                        <ul className='h-screen  md:h-auto items-center justify-center md:flex '>
                        <li  className="navbar-styling mt-0 pb-2 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 md:-mt-4   md:hover:bg-transparent">
                  <a href="#about" onClick={() => setNavbar(!navbar)}>
                    Home
                  </a>
                </li>
                <li className="navbar-styling mt-0 pb-2 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 md:-mt-4   md:hover:bg-transparent">
                  <a href="#blog" onClick={() => setNavbar(!navbar)}>
                    {props.name}
                  </a>
                </li>
                <li className="navbar-styling pb-2 mt-0 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  md:-mt-4   md:hover:bg-transparent">
                  <a href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </a>
                </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    </div>
  )
}

export default Navbar
