import React from 'react'
import { useGlobalContext } from '../../Context/ContextApi'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

function Carts() {
  const Context=useGlobalContext();
  const {total,subTotal,shipping,tax,cart,remove,increase,decrease}=Context;

  if(cart.length==0){
    return(
      <div className='flex flex-col gap-2 items-center m-24'>
        <p className='text-5xl font-bold capitalize'><span className='italic font-normal'>Lollll...</span>Your bag </p>
        <h3 className='text-2xl italic hover:underline'>is currently empty..</h3>
      </div>
    )
  }

  return (
    <section className='mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-24 my-6 sm:my-8 md:my-12 lg:my-24'>
      <div className='flex justify-start relative py-4'>
          <p className="text-gray-700 text-3xl tracking-wider font-semibold  ">Shopping Cart</p>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gray-400 opacity-40"></div>
      </div>
      <div className='flex flex-col lg:flex-row mb-24 mt-10 gap-12 '>
        <div className='bg-white flex flex-col gap-2 overflow-x-auto w-full xl:w-4/6 '>
            {cart.map((item)=>(
                <div className='flex flex-col  bg-slate-50 p-2 md:flex-row w-full relative rounded-2xl' key={item.id}>
                  
                    <div className=' border  border-gray-300 rounded-lg flex justify-center p-2 lg:p-4 transition duration-300 ease-in-out transform hover:shadow-9xl hover:scale-105 my-1 md:my-3 lg:ml-5 bg-white'><Link to={`/Products/${item.id}`}>
                      <img className=' h-[8rem] w-[8rem]  object-contain object-center' src={item.image} alt="Item Image" /></Link>
                    </div>
                    
                    <div className='w-full md:w-2/4 text-md md:text-sm uppercase text-center md:text-left text-gray-700 font-medium lg:py-4 md:px-8 flex  justify-center my-1 lg:my-0'>{item.title}
                    </div>
                    <div className='flex flex-col items-center text-blue-500 min-w-fit mx-2 '>
                      <div className='flex md:flex-col gap-4 md:gap-0 md:items-center lg:py-2'>
                        <button onClick={()=>increase(item.id)} className='text-blue-500 text-2xl px-2 py-1 rounded-md bg-transparent  hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:text-white'><MdKeyboardArrowUp /></button>
                        <p className='text-lg  text-gray-700 font-normal py-2'>{item.amount}</p>
                        <button onClick={()=>decrease(item.id)} className='text-blue-500 text-2xl px-2 py-1 rounded-md bg-transparent  hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:text-white'><MdKeyboardArrowDown /></button>
                      </div>
                        <button className="text-blue-700 hover:underline text-sm font-normal text-left md:mt-6"onClick={()=>remove(item.id)}>remove
                        </button>
                    </div>
                    <div className='w-full md:w-1/4 flex justify-center lg:justify-end text-lg md:text-sm text-gray-700 font-semibold lg:pt-2 italic  lg:pr-4'>Cost : ${item.price}
                    </div>
                
              </div>     
            ))}
        </div>
        <div className='w-full xl:w-2/6 h-fit rounded-3xl '>
            <div className='bg-blue-50  h-fit rounded-2xl py-4 px-6 '>
            <div className="  relative py-2 flex justify-between ">
                <h2 className="text-sm  ">Subtotal</h2>
              <span className="text-sm  ">${subTotal}</span>
                <div className="absolute bottom-0 left-0 w-full border-t border-gray-200"></div>
              </div>

              <div className=" relative py-2 flex justify-between ">
                <h2 className="text-sm ">Shipping</h2>
                <span className="text-sm  ">${shipping}</span>
                <div className="absolute bottom-0 left-0 w-full border-t border-gray-200"></div>
              </div>

              <div className="relative py-2 flex justify-between ">
                <h2 className="text-sm  ">Tax</h2>
                <span className="text-sm  ">${tax}</span>
                <div className="absolute bottom-0 left-0 w-full border-t border-gray-200"></div>
              </div>

              <div className="mt-6 relative  flex justify-between ">
                <h2 className="text-lg  mb-2">Order Total</h2>
                <span className="text-lg mb-2 ">${total}</span>
              </div>
            </div>
              
            <div className='my-8 text-center'>
            <Link to='/Checkout'>
            <button  className="px-4 w-full py-3 bg-blue-500 tracking-wider font-medium text-white text-sm rounded-md transition-all transform hover:scale-95 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800">
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