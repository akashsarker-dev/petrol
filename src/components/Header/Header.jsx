import React from 'react'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa6'

const Header = () => {
  return (
    <header className='bg-[#282828] py-4 border-b-2 border-[#FFB800]'>
        <div className="max-w-container mx-auto lg:flex justify-between items-center pl-2 lg:p-0">
            <div className="contact lg:flex items-center gap-[27px] ">
                <div className="email flex items-center text-white gap-1">
                <MdOutlineMarkEmailUnread/>
                <p>mail@yourcompany.com</p>
                </div>
                <div className="phone flex items-center text-white gap-1 py-2 lg:p-0">
                <FiPhoneCall/>
                <p>+896 120 5889 (Toll free)</p>
                </div>
            </div>
            <div className="contact text-white flex gap-[19px]">
            <FaFacebookF/><FaTwitter/><BsInstagram/><FaLinkedinIn/>
            </div>
        </div>
    </header>
  )
}

export default Header