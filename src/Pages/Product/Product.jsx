import React,{useState} from 'react'
import {useGlobalContext} from '../../Context/ContextApi'
import List from '../../Components/List'
import Grid from '../../Components/Grid'
import Layout from '../../Components/Layout'
import Spinner from '../../Components/LoaderSpinner';
import Filter from '../../Components/Filter'
function Product() {
const context=useGlobalContext();
const {loading,grid,list}=context;

if (loading) {
  return <div className='flex items-center  justify-center'>
    <Spinner/>
  </div>;
}
return ( 
 <section className='mx-36 my-16'>  
   <Filter/>
   <Layout/>
    {grid && (<Grid/>)}
    {list && ( <List/>)}
    
    </section>
  )
}

export default Product