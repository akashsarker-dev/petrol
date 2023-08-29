import React from 'react'

const Blog = () => {
  return (
    <section class="bg-[#F0F0F0] md:py-28">
      <div class="container mx-auto md:flex flex-wrap gap-[36px] justify-center">
        <div class="bg-blog  bg-no-repeat bg-center bg-cover">
          <div class="overlay bg-[#00000099] px-11 pt-[75px] pb-[55px]">
            <h2 class="text-2xl font-bold text-white md:w-[228px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
            <button class="text-white py-2.5 px-[22px] bg-[rgba(255,255,255,0.5)] mt-[52px]">Read more</button>
          </div>
        </div>
        <div class="bg-blog-two  bg-no-repeat bg-center bg-cover">
          <div class="overlay bg-[#00000099] px-11 pt-[75px] pb-[55px]">
            <h2 class="text-2xl font-bold text-white md:w-[228px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
            <button class="text-white py-2.5 px-[22px] bg-[rgba(255,255,255,0.5)] mt-[52px]">Read more</button>
          </div>
        </div>
        <div class="bg-blog-three  bg-no-repeat bg-center bg-cover">
          <div class="overlay bg-[#00000099] px-11 pt-[75px] pb-[55px]">
            <h2 class="text-2xl font-bold text-white md:w-[228px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
            <button class="text-white py-2.5 px-[22px] bg-[rgba(255,255,255,0.5)] mt-[52px]">Read more</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Blog