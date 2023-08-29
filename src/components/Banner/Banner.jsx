import React from 'react'
import banner from '../images/banner.png'

const Banner = () => {
  return (
      <div style={{ backgroundImage: `url(${banner})`}} className='bg-no-repeat bg-center bg-cover' >
        <div className="bg-[#00000099] py-24 md:py-64 text-center lg:text-start">
          <div className="max-w-container mx-auto">
            <h2 className="text-white text-2xl md:text-6xl mx-auto lg:ml-0 w-[100%] lg:w-[842px]  font-bold">We exist since 1975 on the oil and gas industry.</h2>
          <button className="py-[13px] bg-primary-color px-10 text-white text-base font-semibold mt-8">LEARN MORE</button>
          </div>
        </div>
      </div>

  )
}

export default Banner