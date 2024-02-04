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
    <div className=' flex justify-center place-content-center min-w-min overflow-hidden shadow-2xl transition-transform transform hover:scale-95 hoer:shadow-lg rounded-2xl duration-300' key={item.id}>
      <Link to={`/Products/${item.id}`}>
      <div className='flex justify-center items-center rounded-md mx-2 pt-6'>
            <img className='blend-multiply h-60 max-w-full object-contain object-center' src={item.image} alt="Item Image" />
     </div>
        <div className='pt-5 '>
            <p className='text-2xl px-4  font-medium text-center'>{item.title}</p>
            <p className='text-2xl m-3 font-normal text-center'>{item.price} </p>
        </div> 
       </Link>  
    </div>
     ))}
 </div>
  )
}

export default FeaturedProducts