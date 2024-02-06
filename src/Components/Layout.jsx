import React from 'react'
import { CiGrid2H } from "react-icons/ci";
import { BsFillGridFill } from "react-icons/bs";
import {useGlobalContext} from '../Context/ContextApi'


function Layout() {
const context=useGlobalContext();
const {data,grid,list,handleGrid,handleList}=context;

  return (
    <>
    <div className='flex items-center justify-between border-b my-16 border-gray-300 py-8'>
      <div className='text-3xl font-semibold'>   {data.length} PRODUCTS</div>
        <div className='space-x-4'>
          <button className={`text-black-100 ${grid  ? 'text-white hover:bg-blue-500 bg-blue-600': 'bg-white hover:bg-blue-700'
            } hover:text-white active:scale-100 p-2 rounded-full transition-transform transform  duration-300 active:bg-blue-800 active:text-white`}
            onClick={handleGrid}>
            <BsFillGridFill className='w-8 h-8' />
          </button>
          <button className={`text-black-100 ${list ? 'text-white hover:bg-blue-500 bg-blue-600': 'bg-white hover:bg-blue-700'                
                } hover:text-white active:scale-100 p-2 rounded-full transition-transform transform  duration-300 active:bg-blue-800 active:text-white`} onClick={handleList}>
                  <CiGrid2H className='w-8 h-8' />
          </button>     
        </div>
      </div>
    </>
  )
}

export default Layout