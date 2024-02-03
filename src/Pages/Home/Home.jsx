import React from 'react'
import hero from '../../assets/hero1.webp'
import hero2 from '../../assets/hero2.webp'
import { Link } from 'react-router-dom'
import FeaturedProducts from '../../Components/FeaturedProducts'
function Home() {
  return (
   <div className='flex flex-col '>
     <div className="flex gap-8 h-screen mx-24 pt-16">
      <div className="w-1/2 p-12 ">
        <h1 className="text-8xl  font-bold text-neutral-700 mb-8">
          We are changing the way people shop
        </h1>
        <p className="text-2xl text-gray-600 mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
        </p>
        <button className="px-8 py-4 bg-blue-500 font-medium text-white text-xl rounded-md transition-all transform hover:scale-105 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800">
          <Link to='/Products'>OUR PRODUCTS</Link>
        </button>
      </div>
    <div className="w-1/2 bg-white flex items-center justify-center ml-8">
      <div className="flex gap-4 bg-black rounded-3xl p-8">
          <img src={hero} alt="Fully Visible" className="w-2/3 max-h-144 rounded-3xl shadow-lg" />
          <div className="bg-gray-200 w-1/14 h-full"></div>
          <img src={hero2} alt="Half Visible" className="w-1/3 max-h-144 rounded-3xl shadow-lg " />
      </div>
     </div>
  </div>
  <div className='mx-24 mt-8 mb-24'> 
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