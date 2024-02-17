import React from 'react';
import { FiMenu } from "react-icons/fi";
import Navlinks from './Navlinks';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useGlobalContext } from '../Context/ContextApi';
import { IoCartOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { GoSun } from "react-icons/go";
function Navbar() {
  const Context = useGlobalContext();
  const { nav, setNav,navbarRef,isDarkMode, toggleTheme,amount } = Context;


  return (
    <nav ref={navbarRef} className={`h-14 lg:h-16 flex justify-between item-center ${isDarkMode ? 'bg-gray-900' : 'bg-blue-50'} w-full px-2 sm:px-6 py-2 lg:py-0 lg:px-12`}>
      <button onClick={() => setNav(!nav)} className={` transition-colors duration-300 p-2 rounded-full  h-fit lg:hidden  ${isDarkMode ?'bg-gray-700 text-gray-200 hover:text-pink-500 hover:bg-gray-600':'bg-gray-200 text-gray-800 hover:text-blue-500 hover:bg-gray-300'}`} >
        <FiMenu className="text-2xl " />
      </button>
      <Link to='/' className={`px-4 my-2 py-2 h-fit italic tracking-wide ${isDarkMode ?'bg-pink-400 text-slate-700 hover:bg-pink-600':'bg-blue-500 hover:bg-blue-600 text-white'} text-lg text-white rounded-2xl hidden lg:flex items-center justify-center  transition-all duration-300 transform hover:scale-105 active:scale-95 hover:transition-transform hover:duration-300 hover:transition-delay-150`}>
        Shopify
      </Link>
      {nav && (
      <div className={`capitalize grid lg:hidden text-xs w-40  rounded-lg p-2 mt-2 ml-2 absolute top-10 left-0 sm:left-4 z-10 ${isDarkMode ?'bg-slate-700':'bg-blue-100'}`}>
          <Menu />
        </div>
      )}
      <div className='uppercase hidden lg:flex items-center justify-center text-xs'><Navlinks /></div>
      <div className='flex items-center justify-between gap-2 '>
      {isDarkMode ? (
      <button className='p-3 active:scale-95 rounded-full text-slate-200 text-lg transition transform duration-300   active:rotate-180'onClick={toggleTheme}><GoSun /></button>
      ) : (
      <button className='p-3 active:scale-95 rounded-full text-slate-900 text-lg transition transform duration-300   active:rotate-180 'onClick={toggleTheme}><BsMoonStars /></button>
      )}
      <Link to='/Carts' className='p-3 active:rotate-45 active:scale-95 rounded-full  text-2xl transition transform duration-300 delay-100 relative'><IoCartOutline className={`${isDarkMode ?'text-gray-400':'text-gray-800'}`}/>
      <p className={`text-xs ${isDarkMode ?'bg-pink-500':'bg-blue-500'}  rounded-2xl px-2 absolute top-1 right-0 `} >{amount}</p></Link >
        
        
      </div>
    </nav>
  )
}

export default Navbar;
