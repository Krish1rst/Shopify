import React from 'react'
import { Link } from 'react-router-dom';
import {useGlobalContext} from '../Context/ContextApi'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function Grid() {
    const context=useGlobalContext();
    const {data,grid,currentData,list,currentPage,productPerPage,handlePageChange}=context;

 
  return (
    <>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap box-border my-8 ' >
      {currentData.map((item) => (
            <div
            key={item.id}
            className={`grid-layout-style flex justify-center rounded-xl place-content-center  overflow-hidden shadow-2xl transition-transform transform hover:scale-95 hover:shadow-lg  duration-300 px-4 py-1 `}
          >
            <Link  to={`/Products/${item.id}`}>
              <div className='flex justify-center rounded-4 item-center p-4  '>
                <img className='blend-multiply h-32 w-32 object-contain object-center ' src={item.image} alt={item.title} />
              </div>
              <div className='pt-6 relative'>
                <p className='text-sm px-4 font-medium text-center line-clamp-2'>{item.title}  </p>
                <p className='text-sm tracking-wider m-3 font-normal text-center italic'>${item.price}</p>
                <div className='absolute top-4 left-0 right-0 h-px bg-gray-300'></div>
              </div>
      </Link>
    </div>
    ))} 
</div>
<div className='flex items-center justify-center   relative'>
        <div className='absolute top-[-0.2rem]  left-0 right-0 h-px bg-gray-300'>
        </div>
        <Stack spacing={3} sx={{ marginY: '20px' }}>
  <Pagination
    count={Math.ceil(data.length / productPerPage)}
    page={currentPage}
    defaultPage={1}
    onChange={handlePageChange}
    shape="rounded"
    size='medium'
    color="primary"
    sx={{ '& .MuiPaginationItem-root': {  } }} // Adjust the font size here
  />
</Stack>
      </div>
    </>
  )
}
export default Grid