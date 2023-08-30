import React, { useState } from 'react'
import Logo from '../images/logo.png'
import {BsList} from 'react-icons/bs'

const Navbar = () => {
  const [show , setShow] = useState(false)
  const handleClick = ()=>{
    setShow(!show)
  }
  return (
    <nav class=" bg-primary-color py-[27px]">
      <div class="max-w-container mx-auto">
        <div class="flex justify-between items-center">
            <div className='w-1/4'>
              <img class="h-8 w-auto" src={Logo} alt="Your Company"/>
            </div>

              <div className='w-3/4 '>
                  <ul className={`absolute text-white md:static md:flex md:justify-end items-center duration-300 md:gap-x-[47px] ${show ? 'top-40 left-40 ' : '-top-56 left-40'}`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>Blog</li>
                    <button class=" py-3.5 px-8 border-2 text-white md:ml-[72px]">CONTACT</button>
                  </ul>   
              </div>
            <div onClick={handleClick} className='md:hidden text-2xl'>
              {
                show == true ? 'close' : <BsList/>
              }
            </div>

      </div>
    </div>
  </nav>
  )
}

export default Navbar