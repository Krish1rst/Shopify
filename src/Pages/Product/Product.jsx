import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PaginationOutlined from '../../Components/Pagination';
import { TbLayoutGrid } from "react-icons/tb";
import { CiGrid2H } from "react-icons/ci";


function Product({datas}) {
  const [grid,setGrid]=useState(true);
  const [list,setList]=useState(true);
  const handleGrid = () => {
      setGrid(true)
      setList(false)
  };
  const handleList = () => {
    setGrid(false)
    setList(true)
};
  return ( 
    <section className='mx-36 my-16'>
    <div className='flex items-center justify-between border-b border-gray-300 py-2'>
  <div className='text-2xl font-bold'>TOTAL PRODUCTS : {datas.length}</div>
  <div className='space-x-4'>
    <button className={`text-blue-500 ${
  grid
    ? 'text-white hover:bg-rose-500 bg-rose-300'
    : 'bg-white hover:bg-rose-500'
} hover:text-white active:scale-100 p-2 rounded-full transition-transform transform hover:scale-105 duration-300 active:bg-rose-500 active:text-white`}
 onClick={handleGrid}>
      <TbLayoutGrid className='w-8 h-8' />
    </button>
    <button className={`text-blue-500 ${
  list
    ? 'text-white hover:bg-blue-500 bg-blue-300'
    : 'bg-white hover:bg-blue-500'
} hover:text-white active:scale-100 p-2 rounded-full transition-transform transform hover:scale-105 duration-300 active:bg-blue-500 active:text-white`}

onClick={handleList}>
      <CiGrid2H className='w-8 h-8' />
    </button>
  </div>
</div>
{grid && (<div className='grid grid-cols-3 gap-6 flex-wrap box-border my-16 ' >
  {datas.map((item) => (
  <div
  key={item.id}
  className={`grid-layout-style flex justify-center place-content-center min-w-min overflow-hidden shadow-lg transition-transform transform hover:scale-95  duration-300`}
>
  <Link to={`/Products/${item.id}`}>
    <div className='flex justify-center rounded-4 item-center m-x-2 pt-2 '>
      <img className='blend-multiply max-h-60 min-w-55 object-contain object-center mt-8' src={item.image} alt={item.title} />
    </div>
    <div className='pt-5'>
      <p className='text-2xl px-4 font-medium text-center'>{item.title}</p>
      <p className='text-2xl m-3 font-normal text-center'>{item.price}</p>
    </div>
  </Link>
</div>

))}
</div>)}
  
{list && (  <div className='flex flex-col gap-4 my-12' >
    {datas.map((item) => (
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
</div>
  ))}
</div>)}

    
<div className='text-center'>
<PaginationOutlined/>
</div>

    </section>
  )
}

export default Product