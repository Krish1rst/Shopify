import React from 'react'
import { FiMenu } from "react-icons/fi";
import Navlinks from './Navlinks';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <nav className=' h-16 flex justify-between item-center bg-slate-200 w-full px-12'>
      <button className="text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2 rounded-full bg-gray-200 hover:bg-gray-300 h-fit md:hidden">
          <FiMenu className="text-xl" />
      </button>
      <Link to='/' className='px-4 my-2 py-2 h-fit italic tracking-wide bg-blue-500 text-lg text-white rounded-2xl hidden md:flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:transition-transform hover:duration-300 hover:transition-delay-150 '>
      Shopify
      </Link>
      <div className='uppercase hidden md:flex items-center justify-center'><Navlinks  /></div>
      {/* <div className='uppercase  md:hidden flex flex-col items-center text-sm justify-center'><Navlinks  /></div> */}
    </nav>
 
  )
}

export default Navbar