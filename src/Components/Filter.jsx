import React from 'react'
import SearchBar from '../Components/FunctionalComponent/Searchbar'
import Sort from '../Components/FunctionalComponent/Sort'
import Category from '../Components/FunctionalComponent/Select'
import Slider from '../Components/FunctionalComponent/Slider'

function Filter() {
  return (
    <div className='grid grid-cols-3 gap-4 px-8 py-8 w-full bg-blue-50  rounded-md border border-purple-100 border-solid border-1'>
    <div className=''><SearchBar/></div>
    <div className=''><Category/></div>
    <div className=''><Sort/></div>
    <div className='flex items-center '><Slider/></div>
    <div className='flex items-center justify-center'> <button className=" w-full py-2 bg-blue-500 font-medium text-white text-sm rounded-xl transition-all transform hover:scale-95 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-blue-800">  
     Search </button></div>
    <div className='flex items-center justify-end '> <button className=" w-full py-2 bg-pink-600 font-medium text-white text-sm rounded-xl transition-all transform hover:scale-95 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-pink-800">  Reset
      </button>
    </div>
  </div>
  )
}

export default Filter