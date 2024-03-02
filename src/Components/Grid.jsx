import React from 'react'
import { Link } from 'react-router-dom';
import {useGlobalContext} from '../Context/ContextApi'


function Grid() {
    const context=useGlobalContext();
    const {isDarkMode,currentData}=context;
    

  return (
    <>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 flex-wrap box-border my-8 ' >
      {currentData.map((item) => (
            <Link to={`/Products/${item.id}`}
            key={item.id}
            className={`grid-layout-style flex justify-center rounded-xl place-content-center  overflow-hidden shadow-2xl transition-transform transform hover:scale-95 hover:shadow-lg  duration-300 px-4 py-1 ${isDarkMode ?'bg-slate-700':''}`}
          >
            <div  >
              <div className={`flex justify-center rounded-4 item-center p-4 rounded-xl `}>
                <img className={`blend-multiply h-32 w-32 object-contain object-center ${isDarkMode ?'bg-white':''} rounded-xl`} src={item.image} alt={item.title} />
              </div>
              <div className='pt-6 relative'>
                <p className={`text-sm px-4 font-medium text-center line-clamp-2 ${isDarkMode ?'text-purple-400':'text-gray-800'}`}>{item.title}  </p>
                <p className={`text-sm tracking-wider ${isDarkMode?'text-slate-200':''} m-3 font-normal text-center italic`}>${item.price}</p>
                <div className={`absolute top-4 left-0 right-0 h-px  ${isDarkMode ?'bg-slate-800':'bg-gray-300'}`}></div>
              </div>
                
        </div>
      </Link>
      ))} 
  </div>

   </>
  )
}

export default Grid