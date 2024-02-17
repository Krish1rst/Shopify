import React from 'react'
import { useGlobalContext } from '../../Context/ContextApi';

function Checkout() {
  const Context=useGlobalContext();
  const {isDarkMode,total,subTotal,shipping,tax,cart}=Context;

  // ${isDarkMode ?'':''}
  return (
   <section className='mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-24 my-6 sm:my-8 md:my-12 lg:my-24 transition-all duration-300 transform transition-delay-250'>
     <div className='flex justify-start relative py-4'>
          <p  className={` text-3xl tracking-wider font-semibold ${isDarkMode ?'text-gray-200':'text-gray-700'}`}>Place Your Order</p>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gray-400 opacity-40"></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:mt-8 gap-8'>
          <div className='w-full py-6 md:py-0 '>
            <form method="post" action="/checkout" className="flex flex-col gap-y-4">
                <h4 className="font-medium text-xl capitalize">shipping information</h4>
                <div className="flex flex-col ">
                  <label htmlFor="name" className={`text-sm font-medium ${isDarkMode ?'text-gray-200':'text-gray-700'}  `}>First Name</label>
                  <input type="text" id="name" name="name" className={`border rounded-md py-2 px-3 focus:outline-none focus:ring mt-1 ${isDarkMode ?'text-slate-700':'text-white'}`} />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="address" className={`text-sm font-medium ${isDarkMode ?'text-gray-200':'text-gray-700'}  `}>Address</label>
                  <input type="text" id="address" name="address" className={`border rounded-md py-2 px-3 focus:outline-none focus:ring mt-1 ${isDarkMode ?'text-slate-700':'text-white'}`} />
                </div>
                <div className="mt-4">
                  <button type="submit" className={`font-medium py-2 px-4 rounded-md focus:outline-none focus:ring ${isDarkMode ?'w-full bg-pink-500 text-slate-900 hover:bg-pink-600':'bg-blue-500 w-full hover:bg-blue-600 text-white '}`}>
                    Place Your Order
                  </button>
                </div>
            </form>
          </div>

        <div className='w-full h-fit rounded-3xl '>
            <div className={` ${isDarkMode ?'bg-slate-900':'bg-blue-50'} h-fit rounded-2xl py-4 px-6`}>
            <div className="  relative py-2 flex justify-between ">
                <h2 className="text-sm  ">Subtotal</h2>
              <span className="text-sm  ">${subTotal}</span>
                <div className={`absolute bottom-0 left-0 w-full border-t ${isDarkMode ?'border-gray-500':'border-gray-200'} `}></div>
              </div>

              <div className=" relative py-2 flex justify-between ">
                <h2 className="text-sm ">Shipping</h2>
                <span className="text-sm  ">{cart.length === 0 ? '$0' : `$${shipping}`}</span>
                <div className={`absolute bottom-0 left-0 w-full border-t ${isDarkMode ?'border-gray-500':'border-gray-200'} `}></div>
              </div>

              <div className="relative py-2 flex justify-between ">
                <h2 className="text-sm  ">Tax</h2>
                <span className="text-sm  ">${tax}</span>
                <div className={`absolute bottom-0 left-0 w-full border-t ${isDarkMode ?'border-gray-500':'border-gray-200'} `}></div>
              </div>

              <div className="mt-6 relative  flex justify-between ">
                <h2 className="text-lg  mb-2">Order Total</h2>
                <span className="text-lg mb-2 ">${total}</span>
              </div>
            </div>
              
            
              
        </div>
      </div>

   </section>
  )
}

export default Checkout