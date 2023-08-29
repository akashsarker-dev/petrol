import React from 'react'

const Services = () => {
  return (
    <section class="services grid md:grid-cols-2 mt-7">
      <div class="services_item md:pt-36 pt-10 md:pb-24 pb-10 max-w-container mx-auto text-center lg:text-start">
        <h2 class="lg:text-[64px] text-4xl font-bold">Our Services</h2>
        <p class="md:w-[405px] mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <div class="services_item bg-service bg-no-repeat  text-center lg:text-start">
        <div class=" bg-overlay-color w-full h-full lg:pl-16 pb-24 pt-[147px]">
          <h3 class="md:text-4xl text-3xl font-bold text-white ">Modern natural oil and gas refineries.</h3>
        <button class="mt-[19px] text-white bg-primary-color py-[13px] px-[30px]">Learn More</button>
        </div>
      </div>
      <div class="services_item bg-service bg-no-repeat text-center lg:text-start">
        <div class=" bg-overlay-color w-full h-full  lg:pl-16 pb-24 pt-[147px]">
          <h3 class="md:text-4xl text-3xl font-bold text-white">Modern natural oil and gas refineries.</h3>
        <button class="mt-[19px] text-white bg-primary-color py-[13px] px-[30px]">Learn More</button>
        </div>
      </div>
      <div class="services_item bg-service bg-no-repeat text-center lg:text-start">
        <div class=" bg-overlay-color w-full h-full  lg:pl-16 pb-24 pt-[147px]">
          <h3 class="md:text-4xl text-3xl font-bold text-white">Modern natural oil and gas refineries.</h3>
        <button class="mt-[19px] text-white bg-primary-color py-[13px] px-[30px]">Learn More</button>
        </div>
      </div>
      
    </section>
  )
}

export default Services