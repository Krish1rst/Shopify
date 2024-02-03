import React from 'react'
import { Link } from 'react-router-dom';
import PaginationOutlined from '../../Components/Pagination';



function Product({datas}) {

  return ( 
    <section className='mx-36 my-16'>
    <div className='grid grid-cols-3 gap-4 flex-wrap box-border ' >
    {datas.map((item)=>(
    <div className='flex justify-center place-content-center min-w-min overflow-hidden shadow-lg transition-transform transform hover:scale-95 duration-300' key={item.id}>
      <Link to={`/Products/${item.id}`}>
        <div className='flex justify-center rounded-4 item-center m-x-2 pt-2 '>
        <img className='blend-multiply  max-h-60 min-w-55 object-contain object-center mt-8' src={item.image}/>
        </div>
        <div className='pt-5 '>
            <p className='text-2xl px-4  font-medium text-center'>{item.title}</p>
            <p className='text-2xl m-3 font-normal text-center'>{item.price} </p>
        </div> 
       </Link>  
    </div>
     ))}
 </div>
<div className='text-center'>
<PaginationOutlined/>
</div>

    </section>
  )
}

export default Product