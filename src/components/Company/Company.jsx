import React from 'react'
import company from '../images/company.png'
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
const Company = () => {
  return (
    <>
    <div className="about-company bg-[#F0F0F0] md:py-[136px] py-7">
    <div className=" mx-auto max-w-container  bg-primary-color md:flex justify-between md:mt-[100px] ">
        <h2 className="lg:text-4xl md:text-2xl  text-center text-white font-bold mx-auto  w-[200px] mt-[100px]">Learn more about our company</h2>
        <div className="relative">
            <img className='w-full' src={company} alt=""/>
            <button className="text-primary-color bg-white py-[14px] px-[30px] absolute top-1/2 left-1/2 translate-x-[-50%] font-bold">Learn More</button>
        </div>
    </div>

</div>
<div className="mx-auto max-w-container md:flex flex-wrap md:py-28 py-7">
    <img className='mx-auto' src={logo1} alt=""/>
    <img className='mx-auto' src={logo2} alt=""/>
    <img className='mx-auto' src={logo3} alt=""/>
    <img className='mx-auto' src={logo4} alt=""/>
</div>
</>
  )
}

export default Company