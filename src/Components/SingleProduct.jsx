import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import numbers from './ItemNumber';
import Dropdown from './DropDown';
import { TfiAngleRight } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import Spinner from './LoaderSpinner';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


function SingleProduct() {
  
  const { productId } = useParams();
  const [data,setData]=useState('');
  const [loading,setLoading]=useState(false);
  

  useEffect(() => {
      const fetchSingleProduct = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
          setLoading(true);
          const data = await response.json();
          setData(data);
          setLoading(false);
          console.log(data);
        } catch (err) {
          console.log("There is an error in fetching", err);
        }
      };   
      fetchSingleProduct();
    }, [productId]);
  
  const {id,image,price,title,category,description,rating}=data;
  
if (!data) {
    return <div className='flex items-center  justify-center'>
      <Spinner/>
    </div>;
  }

  return (   
    <div className='mx-4 mt-24'>
    <div className='flex px-1 gap-1 w-full  h-8 ml-12 my-4 '>
        <Link to='/' className='text-xl text-neutral-600 '>Home</Link>
       <div className=' text-md py-2'><TfiAngleRight /></div>
        <Link to='/Products' className='text-xl text-neutral-600 '>Products</Link>
        
    </div>
     <div className='grid grid-cols-2 gap-10 mx-12 my-4 '> 
        <div className="h-[20rem]  flex items-center justify-center border stransition-transform transform scale-95 duration-500 hover:scale-100 hover:border-gray-300 hover:shadow-lg rounded-md overflow-hidden">
         <img src={image} alt="image" className="w-1/2 object-contain p-4 max-h-[20rem]  blendblend-multiply rounded-md" />
        </div>

        <div className=' grid grid-cols-1 gap-1 h-full '>
            <p className='font-semibold text-neutral-700 leading-1 subpixel-antialiased text-2xl text-left my-1'>{title}</p>
            <p className='text-neutral-500 font-medium text-xl my-1'>{category}</p>
            <p className='text-lg italic text-neutral-700 my-1'>${price}</p>
            <p className='text-sm text-neutral-700 font-sans font-normal text-left my-2 '>{description}</p>
            <Rating
              name="text-feedback"
              className=' my-2' 
              value={rating.rate}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 1 }} />}
             />
             
            <div className="flex items-center justify-between  ">
               <Dropdown options={numbers} />
            </div>
            <div className='  text-left my-4'>
            <button className="px-4 py-3 bg-blue-500 tracking-wider font-medium text-white text-sm rounded-md transition-all transform hover:scale-105 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800">
            ADD TO BAG
            </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SingleProduct