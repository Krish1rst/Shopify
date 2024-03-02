import React from 'react'
import { useGlobalContext } from '../Context/ContextApi';
function About() {
  const Context = useGlobalContext();
  const {isDarkMode} = Context;

  return (
    <div className={`max-w-[70rem] 2xl:mx-auto transition-all duration-300 transform transition-delay-250 flex items-center justify-center pt-40 ${isDarkMode ?'bg-slate-800':'bg-white'} transition-colors`}>
    <div className=" mx-auto text-center">
    <h2 className={`text-3xl sm:text-6xl font-bold mb-6 ${isDarkMode ?'text-gray-300':'text-gray-800 '}`}>
      We Love <span className={` transition-all duration-300 transform hover:scale-105 active:scale-95 hover:transition-transform hover:duration-300 hover:transition-delay-150  font-light italic tracking-wide rounded-3xl text-3xl sm:text-6xl  pb-2 px-4 ${isDarkMode ?'bg-pink-500 hover:bg-pink-600 text-slate-800':'bg-blue-500 hover:bg-blue-600 text-blue-50'}`}>Shopify</span>
    </h2>
      <p className={`text-sm sm:text-lg ${isDarkMode ?'text-gray-300':'text-gray-600'} w-2/3 mx-auto `}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
      
    </div>
  </div>
  
  

  )
}

export default About