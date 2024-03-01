import React,{useState} from 'react'
import {useGlobalContext} from '../../Context/ContextApi'
import List from '../../Components/List'
import Grid from '../../Components/Grid'
import Layout from '../../Components/Layout'
import Spinner from '../../Components/LoaderSpinner'
import Filter from '../../Components/Filter'
import ErrorPage from '../../Components/ErrorPage'
import PaginationPage from '../../Components/PaginationPage'

function Product() {
const context=useGlobalContext();
const {error,loading,grid,list,filteredProduct}=context;

if (loading) {
  return <div className='flex items-center  justify-center'>
    <Spinner/>
  </div>;
}
if ( error) {
  return <ErrorPage/>;
}
return ( 
 <section className='mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-24 mt-8 md:mt-10 lg:mt-14 xl:mt-20 max-w-[70rem] 2xl:mx-auto mb-4 transition-all duration-300 transform transition-delay-250'>  
  
   <Filter/>
   <Layout/>
    {grid && (<Grid/>)}
    {list && ( <List/>)}
    {filteredProduct.length > 0 ? <PaginationPage /> : ''}

  </section>
  )
}

export default Product