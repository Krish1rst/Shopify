import React from 'react'
import hero from '../../Assets/hero1.webp'
import hero2 from '../../Assets/hero2.webp'
import { Link } from 'react-router-dom'
import FeaturedProducts from '../../Components/FeaturedProducts'
function Home() {
  return (
   <div className='flex flex-col '>
     <div className="flex  gap-6 h-screen mx-24 mt-4">
      <div className="w-1/2 py-[5rem] mt-8 ">
        <h1 className="text-6xl  font-bold text-cyan-900  ">
          We are changing the way people shop
        </h1>
        <p className="text-xl text-gray-600  font-normal leading-[2rem] my-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
        </p>
        <button className="px-4 py-3 bg-blue-500 tracking-wider font-medium text-white text-sm rounded-md transition-all transform hover:scale-105 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800">
          <Link to='/Products'>OUR PRODUCTS</Link>
        </button>
      </div>
    <div className="w-1/2 bg-white flex items-center justify-end ml-8 mt-16 overflow-hidden">
      <div className="flex gap-1 bg-black rounded-2xl py-4 pl-4 overflow-hidden">
          <img src={hero} alt="Fully Visible" className="w-[20rem] max-h-[25rem] rounded-2xl shadow-lg" />
          <div className="bg-gray-200 w-2 h-full"></div>
          <img src={hero2} alt="Half Visible" className="w-[6rem] max-h-[25rem] rounded-bl-2xl rounded-tl-2xl shadow-lg " />
      </div>
     </div>
  </div>
  <div className='mx-24  mb-16'> 
      <div className='relative mb-16'>
          <p className='text-3xl font-medium tracking-wider text-neutral-600 py-4'>Featured Products</p>
          <p className='after: after:block after:absolute after:h-0.5 after:bg-neutral-200 after:w-full'></p>
        </div>
       <FeaturedProducts />
    </div>
</div>
  )
}

export default Home