import React from 'react'
import { FiMenu } from "react-icons/fi";
import Navlinks from './Navlinks';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useGlobalContext } from '../Context/ContextApi';

function Navbar() {
  const Context=useGlobalContext();
  const {nav,setNav}=Context;
  return (

    <nav className='h-14 lg:h-16  lg:flex lg:justify-between lg:item-center  bg-slate-200 w-full px-6 py-2 lg:py-0 lg:px-12'>
      <button onClick={()=>setNav(!nav)} className="text-gray-800 hover:text-blue-500 transition-colors duration-300 p-2 rounded-full bg-gray-200 hover:bg-gray-300 h-fit lg:hidden " >
          <FiMenu className="text-xl" />
      </button>
      <Link to='/' className='px-4 my-2 py-2 h-fit italic tracking-wide bg-blue-500 text-lg text-white rounded-2xl hidden lg:flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:transition-transform hover:duration-300 hover:transition-delay-150 '>
      Shopify
      </Link>
      {nav && (<div className='Capitalize grid lg:hidden text-sm w-40 bg-blue-50 rounded-lg p-2 mt-2 ml-2 relative z-10'>
        <Menu />
      </div>)}
      <div className='uppercase hidden lg:flex items-center justify-center text-sm'><Navlinks/></div>
      
    </nav>

  )
}

export default Navbar