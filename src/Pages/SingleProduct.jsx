import React  from 'react'
import { useParams } from 'react-router-dom';
import numbers from '../Components/ItemNumber';
import Dropdown from '../Components/DropDown';
import { TfiAngleRight } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import Spinner from '../Components/LoaderSpinner';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useGlobalContext } from '../Context/ContextApi';
import { toast } from 'react-toastify';

function SingleProduct() {

  const { isDarkMode, addToCart, handleOnChange, currentData } = useGlobalContext();
  const { productId } = useParams();
  const product = currentData.find(item => item.id === +productId);

 

if (!product) {
    return <div className='flex items-center  justify-center'>
      <Spinner/>
    </div>;
  }
  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success('Item added to cart');
  };
  const { id, image, price, title, category, description, rating :{rate}} = product;
  return (   
    <div className='mx-4 sm:mx-8 md:mx-14 lg:mx-18  my-6 sm:my-12 md:my-16 lg:my-20 transition-all duration-300 transform transition-delay-250'>
    <div className='flex px-1 gap-1 w-full  h-8  my-4 mb-6'>
        <Link to='/' className={`text-xl  ${isDarkMode ?'text-slate-400':'text-neutral-600'}`}>Home</Link>
       <div className={`text-md py-2 ${isDarkMode ?'text-slate-400':'text-neutral-600'}`}><TfiAngleRight /></div>
        <Link to='/Products' className={`text-xl  ${isDarkMode ?'text-slate-400':'text-neutral-600'}`}>Products</Link>
             
    </div>
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12  my-4 '> 
        <div className={`flex items-center justify-center border rounded-2xl ${isDarkMode ?'bg-slate-900':''}`}> 
        <img src={image} alt="image" className={`object-contain ${isDarkMode ?'bg-slate-50':''} w-[10rem] sm:w-[20rem] max-h-[25rem] p-4   rounded-xl`} />
        </div>
        <div className=' grid grid-cols-1 gap-1 '>
            <p className={`${isDarkMode ?'text-slate-300':'text-neutral-700'}  font-semibold    sm:leading-1 subpixel-antialiased text-xl sm:text-2xl text-left my-1`}>{title}</p>
            <p className={`${isDarkMode ?'text-purple-300':'text-neutral-500'}   font-medium text-xl my-1`}>{category}</p>
            <p className={`text-md sm:text-lg italic ${isDarkMode ?'text-green-300':'text-neutral-700'}   sm:my-1`}>${price}</p>
            <p className={`text-sm ${isDarkMode ?'text-gray-400':'text-neutral-700'}   font-sans font-normal leading-2 sm:leading-7 text-left my-2`}>{description}</p>
            <Rating
              name="text-feedback"
              className=' my-2' 
              value={rate}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 1 }} />}
             />
             
            <div className="flex items-center justify-between  ">
               <Dropdown options={numbers} handleOnChange={(value) => handleOnChange(value, id)}/>
            </div>
            <div className='flex gap-4  text-left my-4'>
            <button className={`px-4 py-3 ${isDarkMode ?'bg-pink-500 text-gray-700 focus:border-purple-300':'focus:border-purple-800 text-white bg-blue-500'}   tracking-wider font-medium  text-xs sm:text-sm rounded-md transition-all transform hover:scale-105 active:scale-100 hover:shadow-md focus:outline-none focus:ring `} onClick={() => {
              handleAddToCart({ ...product });
            }}>
            ADD TO BAG
            </button>
            <Link to='/Carts'>
            <button className={`uppercase px-4 py-3 ${isDarkMode ?' bg-pink-500 text-slate-700 focus:border-green-400':'bg-blue-500 text-white focus:border-purple-800'}   tracking-wider font-medium  text-xs sm:text-sm rounded-md transition-all transform hover:scale-105 active:scale-100 hover:shadow-md focus:outline-none focus:ring  `}>
            See Cart
            </button>
            </Link>
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default SingleProduct