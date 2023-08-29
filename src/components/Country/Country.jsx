import React from 'react'
import pumb1 from '../images/pump1.png'
import pumb2 from '../images/pump2.png'
import pumb3 from '../images/pump3.png'
import pumb4 from '../images/pump4.png'

const Country = () => {
  return (
    <section>
      <div className="country-part max-w-container mx-auto lg:flex pt-20 pb-24 items-center ">
        <h3 className="lg:w-[290px] text-center lg:text-star text-4xl lg:text-5xl font-bold lg:mr-44">The biggest
          supplier on
          the country</h3>
          <p className=" w-auto lg:w-[650px] text-[#6C6C6C] pt-10 text-center lg:text-star">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 md:gap-x-8 gap-2'>
        <img className='mx-auto' src={pumb1} alt="pumb"/>
        <img className='mx-auto' src={pumb2} alt="pumb"/>
        <img className='mx-auto' src={pumb3} alt="pumb"/>
        <img className='mx-auto' src={pumb4} alt="pumb"/>
      </div>
    </section>
  )
}

export default Country