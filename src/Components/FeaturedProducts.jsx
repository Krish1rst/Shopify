import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/ContextApi';
import Spinner from '../Components/LoaderSpinner'


function FeaturedProducts() {
const Data =useGlobalContext();
   
    if (Data.loading) {
        return <div><Spinner/></div>;
      }
    
  return (
    <div className='grid grid-cols-3 gap-4 flex-wrap box-border ' >
    {Data.featuredData.map((item)=>(
  <div
  key={item.id}
  className={`grid-layout-style flex justify-center rounded-xl place-content-center  overflow-hidden shadow-2xl transition-transform transform hover:scale-95 hover:shadow-lg  duration-300 px-4  `}
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
  )
}

export default FeaturedProducts