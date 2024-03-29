import React from 'react'
import SearchBar from './FilterSearch'
import Sort from './FilterSort'
import Category from './FilterCategory'
import Slider from './FilterSlider'
import { useGlobalContext } from '../Context/ContextApi'

function Filter() {

  
  const Context=useGlobalContext();
  const {isDarkMode,handleFilter,data,handleReset}=Context;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 py-8 w-full  rounded-md border  border-solid border-1 ${isDarkMode ?'bg-slate-900': 'bg-blue-50 border-purple-100'}`}>
    <div className=''><SearchBar/></div>
    <div className=''><Category/></div>
    <div className=''><Sort/></div>
    <div className='flex items-center '><Slider/></div>
    <div className='flex items-center justify-center'>
        <button onClick={()=>handleFilter(data)} className={` w-full py-2 font-medium  text-sm rounded-xl transition-all transform hover:scale-95 active:scale-100 hover:shadow-md focus:outline-none focus:ring  ${isDarkMode ?'bg-green-400':'focus:border-blue-800 text-white bg-blue-500 '}`}>  
        Search </button>
     </div>
    <div onClick={()=>handleReset(data)} className='flex items-center justify-end '> 
        <button className={`w-full py-2  font-medium  text-sm rounded-xl transition-all transform hover:scale-95 active:scale-100 hover:shadow-md focus:outline-none focus:ring  ${isDarkMode ?'bg-purple-500':'bg-pink-500 text-white focus:border-pink-800'}`}> 
        Reset
          </button>
    </div>
  </div>
  )
}

export default Filter