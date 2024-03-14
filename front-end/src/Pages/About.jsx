import React from 'react'
import { useGlobalContext } from '../Context/ContextApi';
function About() {
  const Context = useGlobalContext();
  const {isDarkMode} = Context;

  return (
    <div className={`transition-all duration-300 transform transition-delay-250 flex items-center justify-center h-screen ${isDarkMode ?'bg-slate-800':'bg-white'} transition-colors  w-full`}>
    <div className=" text-center ">
    <h2 className={`text-3xl sm:text-6xl font-bold mb-6 ${isDarkMode ?'text-gray-300':'text-gray-800 '}`}>
      We Love <span className={`hover:transition-delay-150  font-light italic tracking-wide rounded-3xl text-3xl sm:text-6xl  pb-2 px-4 ${isDarkMode ?'bg-pink-500 hover:bg-pink-600 text-slate-800':'bg-blue-500 hover:bg-blue-600 text-blue-50'}`}>Shopify</span>
    </h2>
      <p className={`text-sm sm:text-base md:text-lg mt-8 ${isDarkMode ?'text-gray-300':'text-gray-600'} w-2/3 mx-auto `}>
      Our Shopify app is designed to empower merchants by simplifying their e-commerce journey. With a focus on user-friendly interfaces and powerful functionalities, we aim to revolutionize how businesses operate online. Our team is dedicated to providing top-notch support and continually improving our app to meet the evolving needs of our users. Join us in shaping the future of e-commerce with our innovative solutions.
      </p>
      
    </div>
  </div>
  
  

  )
}

export default About