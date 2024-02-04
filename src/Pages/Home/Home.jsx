import React from 'react'
import hero from '../../Assets/hero1.webp'
import hero2 from '../../Assets/hero2.webp'
import { Link } from 'react-router-dom'
import FeaturedProducts from '../../Components/FeaturedProducts'
function Home() {
  return (
   <div className='flex flex-col '>
     <div className="flex gap-6 h-screen mx-24 mt-14">
      <div className="w-1/2 py-[5rem] mt-16 ">
        <h1 className="text-8xl  font-bold text-neutral-700 mb-8">
          We are changing the way people shop
        </h1>
        <p className="text-3xl text-gray-600  font-normal leading-[2.8rem] my-14">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
        </p>
        <button className="px-7 py-5 bg-blue-500 font-medium text-white text-xl rounded-xl transition-all transform hover:scale-105 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800">
          <Link to='/Products'>OUR PRODUCTS</Link>
        </button>
      </div>
    <div className="w-1/2 bg-white flex items-center justify-center ml-8 overflow-hidden">
      <div className="flex gap-1 bg-black rounded-[2rem] py-[1.5rem] pl-[1.5rem]">
          <img src={hero} alt="Fully Visible" className="w-[32rem] max-h-[40rem] rounded-3xl shadow-lg" />
          <div className="bg-gray-200 w-[1rem] h-full"></div>
          <img src={hero2} alt="Half Visible" className="w-[10rem] max-h-[40rem] rounded-bl-3xl rounded-tl-3xl shadow-lg " />
      </div>
     </div>
  </div>
  <div className='mx-24  mb-32'> 
      <div className='relative mb-16'>
          <p className='text-4xl font-medium text-neutral-600 py-4'>Featured Products</p>
          <p className='after: after:block after:absolute after:h-0.5 after:bg-neutral-200 after:w-full'></p>
        </div>
       <FeaturedProducts />
    </div>
</div>
  )
}

export default Home