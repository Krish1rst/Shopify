import React from 'react'
import { Constants } from '../Constants/Images'
import { Link } from 'react-router-dom'
import FeaturedProducts from '../Components/FeaturedProducts'
import { useGlobalContext } from '../Context/ContextApi'
function Home() {
  const Context = useGlobalContext();
  const {isDarkMode} = Context;
  
  return (

  <div className='flex flex-col mx-4 sm:mx-8 md:mx-12 lg:mx-18 xl:mx-24  my-10  md:my-16 lg:my-24 transition-all duration-300 transform transition-delay-250 max-w-6xl 2xl:mx-auto'>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-4 sm:mt-0 ">
        <div className="w-full h-fit">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:pt-6 font-bold  ${isDarkMode ?'text-gray-200':'text-cyan-900'}`}>
              We are changing the way people shop
            </h1>
            <p className={`text-sm sm:text-lg   font-normal leading-[2rem] my-8 ${isDarkMode ?'text-gray-100':'text-gray-600'}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
            </p>
            <button className={`px-4 py-3 my-1 sm:my-0  tracking-wider font-medium text-xs sm:text-sm rounded-md transition-all transform hover:scale-105 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800 ${isDarkMode ?'bg-pink-500 text-gray-800':'bg-blue-500 text-blue-50 '}`}>
              <Link to='/Products'>OUR PRODUCTS</Link>
            </button>
         </div>
        <div className={`hidden lg:flex gap-4  rounded-2xl overflow-hidden p-4 ${isDarkMode ?'bg-slate-700':'bg-black'}`}>
                <img src={Constants.hero1} alt="Fully Visible" className="w-80  rounded-2xl shadow-lg object-cover" />
                <img src={Constants.hero2} alt="Half Visible" className="w-80  rounded-bl-2xl rounded-tl-2xl shadow-lg object-cover" />
        </div>   
     </div>
    <div className='my-2'> 
        <div className='relative mb-6 md:mb-12'>
            <p className={`text-2xl sm:text-3xl font-medium tracking-wider  py-4 ${isDarkMode ?'text-gray-200':'text-neutral-600'}`}>Featured Products</p>
            <p className={`after: after:block after:absolute after:h-0.5 after:w-full ${isDarkMode ?'after:bg-slate-700 ':'after:bg-neutral-200 '}`}></p>
          </div>
        <FeaturedProducts />
    </div>
</div>
  )
}

export default Home