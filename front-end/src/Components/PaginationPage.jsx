import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useGlobalContext } from '../Context/ContextApi'

function PaginationPage() {
    const Context =useGlobalContext();
    const {currentPage,productPerPage,handlePageChange,isDarkMode,filteredProduct}=Context;

  return (
    <div className='flex items-center justify-center   relative'>
        <div className={`absolute top-[-0.2rem]  left-0 right-0 h-px  ${isDarkMode ?'bg-slate-700':'bg-gray-300'}`}>
        </div>
        <Stack spacing={3} sx={{ marginY: '20px' }}>
                <Pagination
                    count={Math.ceil(filteredProduct.length / productPerPage)}
                    page={currentPage}
                    defaultPage={1}
                    onChange={handlePageChange}
                    shape="rounded"
                    size='medium'
                    color="primary"
                    sx={{ '& .MuiPaginationItem-root': {  } }} 
                />
        </Stack>  
      </div>
  )
}

export default PaginationPage