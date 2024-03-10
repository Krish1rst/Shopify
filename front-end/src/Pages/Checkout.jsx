import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context/ContextApi';
import CartDetails from '../Components/CartDetails';
import axios from 'axios';
import { toast } from 'react-toastify';
import EmptyCart from '../Components/EmptyCart';


function Checkout() {
  const navigate=useNavigate();
  const Context=useGlobalContext();
  const {isDarkMode,token,total,amount,handleClearCart,cart,user}=Context;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const info = {
      ...Object.fromEntries(data),
      totalProduct: amount,
      cost: total,
    };
    try {
      const ordersData = await axios.post(
        'http://localhost:3000/api/v1/product/order',
        info,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleClearCart();
      toast.success('Your order successfull');
      navigate('/Order')
    } catch (err) {
      if(!user){
        toast.error('Log in Please')
        navigate('/SignIn')
      }else{
        toast.error('Input should be of atleast 4 letter')
      }
      return ;
    }
  };
  
  if(cart.length==0){
    return(
     <EmptyCart/>
    )
  }
  return (
   <section className='mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-24 max-w-6xl 2xl:mx-auto my-6 sm:my-8 md:my-12 lg:my-24 transition-all duration-300 transform transition-delay-250'>
     <div className='flex justify-start relative py-4'>
          <p  className={` text-xl sm:text-3xl tracking-wider font-semibold ${isDarkMode ?'text-gray-200':'text-gray-700'}`}>Place Your Order</p>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gray-400 opacity-40"></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:mt-8 gap-8'>
          <div className='w-full py-6 md:py-0 '>
            <form onSubmit={handleSubmit} method="POST" action="/checkout" className="flex flex-col gap-y-4">
                <h4 className={`font-medium text-lg sm:text-xl capitalize ${isDarkMode?'text-slate-200':'text-slate-800'}`}>shipping information</h4>
                <div className="flex flex-col ">
                  <label htmlFor="name" className={`text-sm font-medium ${isDarkMode ?'text-gray-200':'text-gray-700'}  `}>First Name</label>
                  <input type="text" required id="name" name="name" className={`border rounded-md py-1 sm:py-2 px-3 focus:outline-none focus:ring mt-1 ${isDarkMode ?'text-slate-200 bg-slate-800':'text-slate-700'}`} />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="address" className={`text-sm font-medium ${isDarkMode ?'text-gray-200':'text-gray-700'}  `}>Address</label>
                  <input type="text" id="address" required name="address" className={`border rounded-md py-1 sm:py-2 px-3 focus:outline-none focus:ring mt-1 ${isDarkMode ?'text-slate-200 bg-slate-800':'text-slate-700'}`} />
                </div>
                <div className="mt-4 ">
                  <button type="submit" className={`font-medium py-1 sm:py-2 sm:px-4 rounded-md  focus:outline-none focus:ring ${isDarkMode ?'w-full bg-pink-500 text-slate-900 hover:bg-pink-600':'bg-blue-500 w-full hover:bg-blue-600 text-white '}`}>
                    Place Your Order
                  </button>
                </div>
            </form>
          </div>

        <div className='w-full h-fit rounded-3xl '>
            <CartDetails/>
        </div>
      </div>


   </section>
  )
}

export default Checkout