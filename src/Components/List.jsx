import React from 'react'
import { Link } from 'react-router-dom';
import {useGlobalContext} from '../Context/ContextApi'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


// 
function List() {

const context=useGlobalContext();
const {isDarkMode,data,currentData,currentPage,productPerPage,handlePageChange}=context;

  return (
    <>
    <div className='flex flex-col gap-2 md:gap-4 md:my-12' >
        {currentData.map((item) => (
          <div className={`border rounded-lg overflow-hidden shadow-lg  p-[1px] ${isDarkMode ?'border-slate-600':'border-gray-200'}`} key={item.id}>
           <Link to={`/Products/${item.id}`}>   
         <div className={`flex justify-between p-8 sm:p-4 transition-transform transform hover:scale-105 active:scale-100 duration-300 ${isDarkMode ?'bg-slate-900':''}`}>
            <div className='flex flex-col sm:flex-row'>
              <div className='sm:p-6  max-w-40 max-h-40 overflow-hidden md:overflow-visible'>
                <img className='min-w-24 min-h-24 rounded-lg blend-multiply object-contain object-center transition-transform transform  duration-300 ' src={item.image} alt={item.title} />
              </div>
                <div className='pt-4 sm:pt-0 sm:ml-6 h-fit sm:py-8 flex flex-col justify-end'>
                  <p className={`mb-2 sm:mb-4 md:mb-16 text-lg font-semibold ${isDarkMode ?'text-gray-300':''}`}>{item.title}</p>
                  <p className={`line-clamp-2 text-md ${isDarkMode ?'text-gray-400':''}`}>
                      {item.description}...
                    </p>
                </div>
            </div>
            <div className={`text-lg font-normal ${isDarkMode ?'text-purple-500':''}`}>${item.price}</div>
          </div> 
      </Link>
    </div>  ))}</div>
    <div className='flex items-center justify-center my-12  relative'>
        <div className={`absolute top-[-1rem]  left-0 right-0 h-px  ${isDarkMode ?'bg-slate-700':'bg-gray-300'}`}>
        </div>
        <Stack spacing={2}>
          <Pagination count={Math.ceil(data.length/productPerPage)} page={currentPage}defaultPage={1}
             onChange={handlePageChange}  size='medium'color={`${isDarkMode ?'secondary':'primary'}`} /></Stack>
      </div>
    </>
  )
}

export default List