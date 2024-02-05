import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TbLayoutGrid } from "react-icons/tb";
import { CiGrid2H } from "react-icons/ci";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useGlobalContext} from '../../Context/ContextApi'

function Product() {

const context=useGlobalContext();
const {data,grid,list,handleGrid,handleList,currentPage,setCurrentPage,productPerPage,currentData,handlePageChange}=context;




return ( 
 <section className='mx-36 my-16'>
    <div className='flex items-center justify-between border-b border-gray-300 py-2'>
      <div className='text-2xl font-bold'>TOTAL PRODUCTS : {data.length}</div>
        <div className='space-x-4'>
          <button className={`text-black-100 ${
            grid
              ? 'text-white hover:bg-blue-500 bg-blue-600'
                : 'bg-white hover:bg-blue-700'
            } hover:text-white active:scale-100 p-2 rounded-full transition-transform transform hover:scale-105 duration-300 active:bg-blue-800 active:text-white`}
            onClick={handleGrid}>
            <TbLayoutGrid className='w-8 h-8' />
          </button>
          <button className={`text-black-100 ${
                  list
                    ? 'text-white hover:bg-blue-500 bg-blue-600'
                    : 'bg-white hover:bg-blue-700'
                } hover:text-white active:scale-100 p-2 rounded-full transition-transform transform hover:scale-105 duration-300 active:bg-blue-800 active:text-white`} onClick={handleList}>
                  <CiGrid2H className='w-8 h-8' />
          </button>
  </div>
</div>
    {grid && (<div className='grid grid-cols-3 gap-6 flex-wrap box-border my-16 ' >
      {currentData.map((item) => (
            <div
            key={item.id}
            className={`grid-layout-style flex justify-center rounded-lg place-content-center min-w-min overflow-hidden shadow-2xl transition-transform transform hover:scale-95 hover:shadow-lg  duration-300 px-4 py-1`}
          >
            <Link to={`/Products/${item.id}`}>
              <div className='flex justify-center rounded-4 item-center m-x-1  '>
                <img className='blend-multiply max-h-60 min-w-55 object-contain object-center mt-8' src={item.image} alt={item.title} />
              </div>
              <div className='pt-6 relative'>
                <p className='text-2xl px-4 font-medium text-center'>{item.title}</p>
                <p className='text-2xl m-3 font-normal text-center'>{item.price}</p>
                <div className='absolute top-4 left-0 right-0 h-px bg-gray-300'></div>
              </div>
      </Link>
    </div>))}</div>)}


      
    {list && (  <div className='flex flex-col gap-4 my-12' >
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
    </div>  ))}</div>)}
    
    <div className='flex items-center justify-center my-12  relative'>
        <div className='absolute top-[-1rem]  left-0 right-0 h-px bg-gray-300'></div>
        <Stack spacing={2}>
          <Pagination 
            count={Math.ceil(data.length/productPerPage)} 
            page={currentPage}
            defaultPage={1}
            onChange={handlePageChange}  
            size='large'
            color="primary" />
        </Stack>
      </div>
    </section>
  )
}

export default Product