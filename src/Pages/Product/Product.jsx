import React,{useState} from 'react'
import {useGlobalContext} from '../../Context/ContextApi'
import List from '../../Components/List'
import Grid from '../../Components/Grid'
import Layout from '../../Components/Layout'
import Spinner from '../../Components/LoaderSpinner'
import Filter from '../../Components/Filter'
import ErrorPage from '../../Components/ErrorPage'
function Product() {
const context=useGlobalContext();
const {error,loading,grid,list}=context;


if (loading) {
  return <div className='flex items-center  justify-center'>
    <Spinner/>
  </div>;
}
if ( error) {
  return <ErrorPage/>;
}
return ( 
 <section className='mx-6 sm:mx-10 md:mx-14 lg:mx-18 xl:mx-24 mt-8 md:mt-10 lg:mt-14 xl:mt-20 mb-4'>  
  
   <Filter/>
   <Layout/>
    {grid && (<Grid/>)}
    {list && ( <List/>)}
    
  </section>
  )
}

export default Product