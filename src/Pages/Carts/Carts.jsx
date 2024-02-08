import React from 'react'
import { useGlobalContext } from '../../Context/ContextApi'
import AmountSelect from '../../Components/FunctionalComponent/AmountSelect';
import { Link } from 'react-router-dom';

function Carts() {
  const Context=useGlobalContext();
  const {featuredData}=Context;
  
  return (
    <section className='mx-36 my-16'>
    <div className='flex justify-start relative py-8'>
        <p className="text-gray-600 text-[2.7rem] tracking-wider font-semibold  ">Shopping Cart</p>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-400 opacity-40"></div>
    </div>
  <div className='flex mb-24 mt-10 gap-8'>
  <div className='bg-white flex flex-col overflow-x-auto w-4/6 my-3 pr-12'>
      {featuredData.map((item)=>(
          <div className='flex w-full mb-8 pb-8 relative' key={item.id}>
          <div className='w-1/4 border border-gray-300 rounded-lg flex justify-center p-4 transition duration-300 ease-in-out transform hover:shadow-9xl hover:scale-105 my-3 ml-5'>
            <img className='blend-multiply h-[10rem] w-[10rem] max-w-full object-contain object-center' src={item.image} alt="Item Image" />
          </div>
          <div className='w-2/4 text-xl text-left text-gray-700 font-medium py-4 px-8 flex justify-center'>{item.title}</div>
          <div className='w-1/4 text-2xl text-gray-700 font-normal p-4'>
            <p className=''>Amount </p>
            <AmountSelect />
            <button className="text-blue-500 hover:underline">remove</button>
          </div>
          <div className='w-1/4 flex justify-end text-2xl text-gray-700 font-normal p-4'>${item.price}</div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gray-400 opacity-40 "></div>
        </div>     
      ))}
      </div>

      <div className=' w-2/6 h-fit rounded-3xl px-8'>
        <div className='bg-blue-50  h-fit rounded-3xl p-8'>
        <div className="  relative py-4 flex justify-between ">
            <h2 className="text-lg  ">Subtotal</h2>
            <span className="text-lg  font-medium">$724.96</span>
            <div className="absolute bottom-0 left-0 w-full border-t border-gray-300"></div>
          </div>

          <div className=" relative py-4 flex justify-between ">
            <h2 className="text-lg ">Shipping</h2>
            <span className="text-lg  font-medium">$5.00</span>
            <div className="absolute bottom-0 left-0 w-full border-t border-gray-300"></div>
          </div>

          <div className="relative py-4 flex justify-between ">
            <h2 className="text-lg  ">Tax</h2>
            <span className="text-lg  font-medium">$72.50</span>
            <div className="absolute bottom-0 left-0 w-full border-t border-gray-300"></div>
          </div>

          <div className="mt-8 relative py-4 flex justify-between ">
            <h2 className="text-2xl  mb-2">Order Total</h2>
            <span className="text-2xl mb-2 font-medium">$802.46</span>
          </div>
        </div>
          
         <div className='my-12 text-center'>
         <button className="px-7 py-5 w-full bg-blue-500 font-medium text-white text-xl rounded-xl transition-all transform hover:scale-95 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800">
          <Link to='/Checkout'>PROCEED TO CHECKOUT</Link>
        </button>
         </div>
           
      </div>
    
   
  </div>
    
    </section>
  )
}

export default Carts