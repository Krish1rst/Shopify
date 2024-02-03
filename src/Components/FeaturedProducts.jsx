import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
function FeaturedProducts() {
const [data,setData]=useState('');
const [loading,setLoading]=useState(false);
useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/?limit=3`);
        const data = await response.json();
        setLoading(true)
        setData(data);
        setLoading(false)
        console.log(data);
      } catch (err) {
        console.log("There is an error in fetching", err);
      }
    };
  
    fetchSingleProduct();
  }, []);
    const {image,price,title,category,description,rating}=data;
    if (!data) {
        return <div>Loading...</div>;
      }
    
  return (
    <div className='grid grid-cols-3 gap-4 flex-wrap box-border ' >
    {data.map((item)=>(
    <div className=' flex justify-center place-content-center min-w-min overflow-hidden shadow-xl transition-transform transform hover:scale-95 duration-300' key={item.id}>
      <Link to={`/Products/${item.id}`}>
      <div className='flex justify-center items-center rounded-md mx-2 pt-2'>
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