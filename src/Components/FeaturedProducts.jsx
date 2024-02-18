import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/ContextApi';
import Spinner from '../Components/LoaderSpinner'
import ErrorPage from './ErrorPage';

function FeaturedProducts() {
const Context =useGlobalContext();
  // ${isDarkMode ?'':''}
   const {loading,error,isDarkMode}=Context;
   if (error) {
    return <ErrorPage />;
  }
    if (loading) {
        return <div><Spinner/></div>;
      }
    
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 flex-wrap box-border transition-all duration-300 transform transition-delay-250 ' >
    {Context.featuredData.map((item)=>(
  <div
  key={item.id}
  className={`grid-layout-style flex justify-center rounded-xl place-content-center  overflow-hidden shadow-2xl transition-transform transform hover:scale-95 hover:shadow-lg  duration-300 px-4  ${isDarkMode ?'bg-slate-700':''}`}
>
  <Link  to={`/Products/${item.id}`}>
    <div className='flex justify-center rounded-4 item-center p-4  '>
      <img className={`blend-burn h-32 w-32 object-contain object-center ${isDarkMode ?'bg-white':''} rounded`} src={item.image} alt={item.title} />
    </div>
    <div className='pt-6 relative'>
      <p className={`text-sm px-4 font-medium text-center line-clamp-2 ${isDarkMode ?'text-slate-200':'text-slate-700'}`}>{item.title}  </p>
      <p className={` ${isDarkMode ?'text-purple-200':''} text-sm tracking-wider m-3 font-normal text-center italic`}>${item.price}</p>
      <div className={`absolute top-4 left-0 right-0 h-px  ${isDarkMode ?'bg-slate-800':'bg-gray-300'}`}></div>
    </div> 
</Link>
</div>
     ))}
 </div>
  )
}

export default FeaturedProducts