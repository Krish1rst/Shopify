import React from 'react'
import { Link } from 'react-router-dom';
import SingleProduct from '../../Components/SingleProduct';
import { useParams } from 'react-router-dom';
function Product({datas}) {

  return ( 
    <section className='mx-36 my-16'>
    <div className='grid grid-cols-3 gap-4 flex-wrap box-border ' >
    {datas.map((item)=>(
    <div className=' justify-center place-content-center min-w-min shadow-md rounded-3xl     hover:shadow-lg' key={item.id}>
      <Link to={`/Products/${item.id}`}>
        <div className='flex justify-center rounded-4 item-center m-x-2 pt-2 '>
        <img className='blend-multiply  h-60 w-60 object-contain object-center ' src={item.image}/>
        </div>
        <div className='pt-5 '>
            <p className='text-2xl px-4  font-medium text-center'>{item.title}</p>
            <p className='text-2xl m-3 font-normal text-center'>{item.price} </p>
        </div> 
       </Link>  
    </div>
     ))}
 </div>


    </section>
  )
}

export default Product