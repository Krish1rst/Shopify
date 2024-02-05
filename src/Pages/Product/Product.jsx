import React,{useState} from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useGlobalContext} from '../../Context/ContextApi'
import List from '../../Components/List'
import Grid from '../../Components/Grid'
import Layout from '../../Components/Layout'

function Product() {
const context=useGlobalContext();
const {data,grid,list,currentPage,productPerPage,handlePageChange}=context;

return ( 
 <section className='mx-36 my-16'>  

   <Layout/>
    {grid && (<Grid/>)}
    {list && ( <List/>)}
    <div className='flex items-center justify-center my-12  relative'>
        <div className='absolute top-[-1rem]  left-0 right-0 h-px bg-gray-300'>
        </div>
        <Stack spacing={2}>
          <Pagination count={Math.ceil(data.length/productPerPage)} page={currentPage}defaultPage={1}
             onChange={handlePageChange}  size='large'color="primary" /></Stack>
      </div>
    </section>
  )
}

export default Product