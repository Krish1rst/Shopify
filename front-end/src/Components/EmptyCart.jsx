import React from 'react'
import { useGlobalContext } from '../Context/ContextApi'
import { Link } from 'react-router-dom';

function EmptyCart() {
    const {isDarkMode}=useGlobalContext();

  return (
    <div className='max-w-6xl flex flex-col gap-2 items-center mt-24'>
        <p className={`text-sm sm:text-4xl font-bold capitalize  ${isDarkMode ?'text-slate-200':'text-slate-700'}`}>Your bag is currently empty </p>
        <button  className={`px-2 py-1 md:px-4 md:py-3 mt-6 md:mt-8  tracking-wider font-medium  text-sm rounded-md transition-all transform hover:scale-105 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800 ${isDarkMode ?'bg-pink-500 text-700 ':'bg-blue-500 text-blue-50 '}`}>
            <Link to='/Products' className='text-xs sm:text-sm'>GO TO PRODUCTS</Link>
        </button>
  </div>
  )
}

export default EmptyCart