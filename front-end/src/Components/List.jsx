import React from 'react'
import { Link } from 'react-router-dom';
import {useGlobalContext} from '../Context/ContextApi'


function List() {

const context=useGlobalContext();
const {isDarkMode,currentData}=context;

  return (
    <>
    <div className='flex flex-col gap-2 md:gap-4 md:my-12' >
        {currentData.map((item) => (
          <div className={`border rounded-lg overflow-hidden shadow-lg  p-[1px] ${isDarkMode ?'border-slate-600':'border-gray-200'}`} key={item.id}>
           <Link to={`/Products/${item.id}`}>   
         <div className={`flex justify-between p-8 sm:p-4 transition-transform transform  active:scale-95 rounded-md duration-300 ${isDarkMode ?'bg-slate-700':''}`}>
            <div className='flex flex-col sm:flex-row'>
              <div className='sm:p-6  max-w-40 max-h-40 overflow-hidden md:overflow-visible'>
                <img className='min-w-24 h-24 md:h-36 blend-multiply object-contain object-center transition-transform transform  duration-300 ' src={item.image} alt={item.title} />
              </div>
                <div className='pt-4 sm:pt-0 sm:ml-6 h-fit sm:py-8 flex flex-col justify-end'>
                  <p className={`mb-2 sm:mb-4 md:mb-16 text-sm sm:text-lg font-semibold ${isDarkMode ?'text-gray-200':''}`}>{item.title}</p>
                  <p className={`line-clamp-2 text-md ${isDarkMode ?'text-gray-300':''}`}>
                      {item.description}...
                    </p>
                </div>
            </div>
            <div className={`text-lg font-normal ${isDarkMode ?'text-purple-500':''}`}>${item.price}</div>
          </div> 
      </Link>
    </div>  ))}</div>
    
    </>
  )
}

export default List