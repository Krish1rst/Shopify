import React from 'react'
import { CiGrid2H } from "react-icons/ci";
import { BsFillGridFill } from "react-icons/bs";
import {useGlobalContext} from '../Context/ContextApi'


function Layout() {
const context=useGlobalContext();
const {filteredProduct,grid,list,handleGrid,handleList,isDarkMode}=context;


  return (
    <>
    <div className={`flex items-center justify-between border-b my-6  py-4 ${isDarkMode ?'border-gray-600':'border-gray-300'}`}>
      <div className={`text-xl font-semibold ${isDarkMode ?'text-gray-200':'text-gray-800'}`}>   {filteredProduct.length} PRODUCTS</div>
        <div className='space-x-4'>
          <button className={`text-black-100 ${grid ?'text-white hover:bg-blue-500 bg-blue-600': ' hover:bg-blue-700'
            } hover:text-white active:scale-100 p-2 rounded-full transition-transform transform  duration-300 active:bg-blue-800 active:text-white`}
            onClick={handleGrid}>
            <BsFillGridFill className='w-5 h-5' />
          </button>
          <button className={`text-black-100 ${list ? 'text-white hover:bg-blue-500 bg-blue-600': ' hover:bg-blue-700'                
                } hover:text-white active:scale-100 p-2 rounded-full transition-transform transform  duration-300 active:bg-blue-800 active:text-white`} onClick={handleList}>
                  <CiGrid2H className='w-5 h-5' />
          </button>     
        </div>
      </div>
    </>
  )
}

export default Layout