import React, { useState } from 'react'
import Logo from '../images/logo.png'
import {BsList} from 'react-icons/bs'

const Navbar = () => {
  const [show , setShow] = useState(false)
  const handleClick = ()=>{
    console.log('aaaa');
  }
  return (
    <nav class=" bg-primary-color">
            <div class="max-w-container mx-auto max-w-7xl py-[27px]">
              <div class=" flex  items-center justify-between">

                  <div>
                    <img class="h-8 w-auto" src={Logo} alt="Your Company"/>
                  </div>

                  <div onClick={handleClick} className='md:hidden'>
                  {
                    show == true ? 'close' : 'bar'

                  }
                  {/* <BsList/> */}
                  </div>

                    <div class="md:flex items-center">
                      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                      <a href="#" class="text-white ml-[47px] text-sm font-medium" aria-current="page">Dashboard</a>
                      <a href="#" class="text-white ml-[47px] text-sm font-medium">Team</a>
                      <a href="#" class="text-white ml-[47px] text-sm font-medium">Projects</a>
                      <a href="#" class="text-white ml-[47px] text-sm font-medium">Calendar</a>
                    <button class=" py-3.5 px-8 border-2 text-white ml-[72px]">CONTACT</button>
                    </div>
              </div>
            </div>
          
            {/* <!-- Mobile menu, show/hide based on menu state. --> */}

          </nav>
  )
}

export default Navbar