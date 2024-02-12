import React from 'react'
import hero from '../../Assets/hero1.webp'
import hero2 from '../../Assets/hero2.webp'
import { Link } from 'react-router-dom'
import FeaturedProducts from '../../Components/FeaturedProducts'
function Home() {
  return (
  <div className='flex flex-col mx-8 sm:mx-10 md:mx-14 lg:mx-18 xl:mx-24 my-10  md:my-12 lg:my-24'>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 ">
        <div className="w-full h-fit">
            <h1 className="text-6xl  font-bold text-cyan-900  ">
              We are changing the way people shop
            </h1>
            <p className="text-lg text-gray-600  font-normal leading-[2rem] my-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
            </p>
            <button className="px-4 py-3 bg-blue-500 tracking-wider font-medium text-blue-100 text-sm rounded-md transition-all transform hover:scale-105 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800">
              <Link to='/Products'>OUR PRODUCTS</Link>
            </button>
         </div>
        <div className="hidden lg:flex gap-4 bg-black rounded-2xl overflow-hidden p-4">
                <img src={hero} alt="Fully Visible" className="w-80  rounded-2xl shadow-lg object-cover" />
                <img src={hero2} alt="Half Visible" className="w-80  rounded-bl-2xl rounded-tl-2xl shadow-lg object-cover" />
        </div>   
     </div>
    <div className=''> 
        <div className='relative mb-12'>
            <p className='text-3xl font-medium tracking-wider text-neutral-600 py-4'>Featured Products</p>
            <p className='after: after:block after:absolute after:h-0.5 after:bg-neutral-200 after:w-full'></p>
          </div>
        <FeaturedProducts />
    </div>
</div>
  )
}

export default Home