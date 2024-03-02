import React from 'react'
import { useGlobalContext } from '../../Context/ContextApi'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import CartDetails from '../../Components/CartDetails';
import { toast } from 'react-toastify';
function Carts() {
  const Context=useGlobalContext();
  const {isDarkMode,total,subTotal,shipping,tax,cart,remove,increase,decrease}=Context;


  if(cart.length==0){
    
    return(
      <div className='flex flex-col gap-2 items-center m-24'>
        <p className='text-5xl font-bold capitalize'>Your bag </p>
        <h3 className='text-2xl italic hover:underline'>__is currently empty.</h3>
      <button  className={`px-4 py-3 mt-6 md:mt-8  tracking-wider font-medium  text-sm rounded-md transition-all transform hover:scale-105 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800 ${isDarkMode ?'bg-pink-500 text-700 ':'bg-blue-500 text-blue-50 '}`}>
              <Link to='/Products'>GO TO PRODUCTS</Link>
            </button>
      </div>
    )
  }

  return (
    <section className='mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-24 max-w-[70rem] 2xl:mx-auto my-6 sm:my-8 md:my-12 lg:my-24 transition-all duration-300 transform transition-delay-250'>
      <div className='flex justify-start relative py-4'>
          <p className={` text-xl md:text-3xl tracking-wider font-semibold ${isDarkMode ?'text-gray-200':'text-gray-700'}`}>Shopping Cart</p>
          <div className={`absolute inset-x-0 bottom-0 h-px bg-gray-400 opacity-40 ${isDarkMode ?'':''}`}></div>
      </div>
      <div className='flex flex-col lg:flex-row mb-24 mt-6 gap-12 '>
        <div className={`${isDarkMode ?'bg-slate-800':'bg-white'}  flex flex-col gap-2 overflow-x-auto w-full xl:w-4/6`}>
            {cart.map((item)=>(
                <div className={`flex flex-col ${isDarkMode ?'bg-slate-900':'bg-slate-50'}  p-2 md:flex-row w-full relative rounded-2xl`} key={item.id}>
                  <Link to={`/Products/${item.id}`}>
                    <div className= {`border   rounded-lg flex justify-center p-2 lg:p-4 transition duration-300 ease-in-out transform hover:shadow-9xl hover:scale-105 my-1 md:my-3 lg:ml-5 ${isDarkMode ?'bg-slate-50 border-gray-300':'border-gray-600 bg-white'} `}>
                      <img className=' h-[8rem] w-[8rem]  object-contain object-center' src={item.image} alt="Item Image" />
                      
                    </div>
                    </Link>
                    <div className={`w-full md:w-2/4 text-xs md:text-md md:text-sm uppercase text-center md:text-left ${isDarkMode ?'text-gray-200':'text-gray-700'}  font-medium lg:py-4 md:px-8 flex  justify-center my-3 lg:my-0`}>{item.title}
                    </div>
                    <div className={`flex flex-col items-center ${isDarkMode ?'text-pink-500 bg-slate-800 md:bg-slate-900':'text-blue-500 bg-slate-100'}  rounded-md px-2 min-w-fit mx-2`}>
                      <div className='flex md:flex-col gap-4 md:gap-0 md:items-center lg:py-2'>

                        <button onClick={()=>increase(item.id)} className={`${isDarkMode ?'text-pink-500 hover:bg-pink-500 focus:ring-pink-500 active:bg-pink-700 hover:text-slate-600 ':'text-blue-500 active:bg-blue-700 hover:text-blabk focus:ring-blue-500  active:text-blue-600 '}  text-lg md:text-2xl px-2 py-1 rounded-lg bg-transparent  focus:outline-none focus:ring-2  focus:ring-opacity-50  `}>
                          <MdKeyboardArrowUp />
                        </button>

                        <p className={`text-xs md:text-lg ${isDarkMode ?'text-gray-200':'text-gray-700'}  font-normal py-2`}>
                          {item.amount}
                        </p>

                        <button onClick={()=>decrease(item.id)} className={`${isDarkMode ?'text-pink-500 hover:bg-pink-500 focus:ring-pink-500 active:bg-pink-700 hover:text-slate-600 ':'text-blue-500 active:bg-blue-700 hover:text-blabk focus:ring-blue-500  active:text-blue-600 '}  text-lg md:text-2xl px-2 py-1 rounded-md bg-transparent  focus:outline-none focus:ring-2  focus:ring-opacity-50  `}>
                          <MdKeyboardArrowDown />
                        </button>

                      </div>
                        <button className={`${isDarkMode ?'text-pink-500':'text-blue-700'}  hover:underline text-xs md:text-sm font-normal text-left md:mt-6 pb-2 md:pb-0`}
                        onClick={() => {
                          remove(item.id);
                          toast.error('Product removed from cart');
                          
                          if (cart.length === 1) {
                              toast.info('Cart is empty');
                          }
                      }}
                      >remove
                        </button>
                    </div>

                    <div className={`w-full  ${isDarkMode ?'text-gray-300':'text-gray-700'} md:w-1/4 flex justify-center lg:justify-end text-xs md:text-lg pt-2 md:pt-0     font-semibold lg:pt-2 italic  lg:pr-4`}>
                      Cost : ${item.price}
                    </div>
                
              </div>     
            ))}
        </div>
        <div className='w-full xl:w-2/6 h-fit rounded-3xl '>
           <CartDetails/>
              
            <div className='my-8 text-center'>
            <Link to='/Checkout'>
                <button  className={`px-4 w-full py-3 ${isDarkMode ?'bg-pink-500 text-gray-800':'bg-blue-500 text-white'}  tracking-wider font-medium  text-sm rounded-md transition-all transform hover:scale-95 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800`}>
                  PROCEED TO CHECKOUT
                </button>
            </Link>
            </div>
              
        </div>
      </div>
    </section>
  )
}

export default Carts