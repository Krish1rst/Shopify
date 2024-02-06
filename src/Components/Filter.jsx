import React from 'react'
import SearchBar from '../Components/FunctionalComponent/Searchbar'
import Sort from '../Components/FunctionalComponent/Sort'
import Category from '../Components/FunctionalComponent/Select'
import Slider from '../Components/FunctionalComponent/Slider'

function Filter() {
  return (
    <div className='grid grid-cols-3 gap-12 px-8 py-12 w-full bg-purple-50 mt-[7rem] rounded-md border border-purple-100 border-solid border-1'>
    <div className='py-2'><SearchBar/></div>
    <div className='py-2'><Category/></div>
    <div className='py-2'><Sort/></div>
    <div className='flex items-center py-2'><Slider/></div>
    <div className='flex items-center justify-center py-2'> <button className="px-[12rem] w-full py-3 bg-blue-500 font-medium text-white text-xl rounded-xl transition-all transform hover:scale-95 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-blue-800">  
     Search </button></div>
    <div className='flex items-center justify-end py-2'> <button className="px-[12rem] w-full py-3 bg-pink-600 font-medium text-white text-xl rounded-xl transition-all transform hover:scale-95 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-pink-800">  Reset
      </button>
    </div>
  </div>
  )
}

export default Filter