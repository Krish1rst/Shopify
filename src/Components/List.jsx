import React from 'react'
import { Link } from 'react-router-dom';
import {useGlobalContext} from '../Context/ContextApi'



function List() {

const context=useGlobalContext();
const {currentData}=context;


  return (
    <>
             <div className='flex flex-col gap-4 my-12' >
        {currentData.map((item) => (
          <div className='border rounded-lg overflow-hidden shadow-lg' key={item.id}>
            <Link to={`/Products/${item.id}`}>
          <div className='flex justify-between px-8 py-8 transition-transform transform hover:scale-95 active:scale-100 duration-300'>
            <div className='flex '>
              <div className='p-4'>
                <img className='w-full h-auto blend-multiply max-h-[14rem] min-w-[14rem] object-contain object-center transition-transform transform  duration-300' src={item.image} alt={item.title} />
              </div>
                <div className='ml-8 mb-2 py-8 flex flex-col justify-between'>
                  <p className='mb-16 text-3xl'>{item.title}</p>
                  <p className='line-clamp-2 text-2xl '>
                      {item.description}...
                    </p>
                </div>
            </div>
            <div className='text-2xl font-normal ml-[10rem] '>${item.price}</div>
          </div>
    </Link>
    </div>  ))}</div>
    
    </>
  )
}

export default List