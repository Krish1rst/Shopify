import React from 'react'
import { useGlobalContext } from '../../Context/ContextApi'
import AmountSelect from '../../Components/FunctionalComponent/AmountSelect';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Carts() {
  const Context=useGlobalContext();
  const {cart,remove}=Context;

  console.log(cart);

  if(cart.length==0){
    return(
      <div className='flex flex-col gap-2 items-center m-24'>
        <p className='text-5xl font-bold capitalize'>Your bag </p>
        <h3 className='text-2xl italic hover:underline'>is currently empty</h3>
      </div>
    )
  }
  console.log(cart);
  return (
    <section className='mx-4 sm:mx-10 md:mx-14 lg:mx-18 xl:mx-24 my-6 sm:my-8 md:my-12 lg:my-24'>
      <div className='flex justify-start relative py-4'>
          <p className="text-gray-600 text-3xl tracking-wider font-semibold  ">Shopping Cart</p>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gray-400 opacity-40"></div>
      </div>
      <div className='flex flex-col lg:flex-row mb-24 mt-10 gap-12 '>
        <div className='bg-white flex flex-col overflow-x-auto w-full xl:w-4/6 '>
            {cart.map((item)=>(
                <div className='flex flex-col md:flex-row w-full relative rounded-2xl' key={item.id}>
                <div className=' border border-gray-300 rounded-lg flex justify-center p-4 transition duration-300 ease-in-out transform hover:shadow-9xl hover:scale-105 my-3 ml-5'>
                  <img className='blend-multiply h-[8rem] w-[8rem]  object-contain object-center' src={item.image} alt="Item Image" />
                </div>
                <div className='w-2/4 text-sm text-left text-gray-700 font-medium py-4 px-8 flex justify-center'>{item.title}</div>
                <div className='  flex  flex-col gap-3 min-w-fit   p-4'>
                  <p className='text-sm text-gray-700 font-normal'>Amount </p>
                <div> <AmountSelect /></div>
                  <button className="text-blue-500 hover:underline text-sm font-normal text-left"onClick={()=>remove(item.id)}>remove</button>
                </div>
                
                <div className='w-1/4 flex justify-end text-lg text-gray-700 font-normal py-2'>${item.price}</div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gray-300 opacity-50 "></div>
              </div>     
            ))}
        </div>
        <div className='w-full xl:w-2/6 h-fit rounded-3xl '>
            <div className='bg-blue-50  h-fit rounded-2xl py-4 px-6 '>
            <div className="  relative py-2 flex justify-between ">
                <h2 className="text-sm  ">Subtotal</h2>
                <span className="text-sm  ">$724.96</span>
                <div className="absolute bottom-0 left-0 w-full border-t border-gray-200"></div>
              </div>

              <div className=" relative py-2 flex justify-between ">
                <h2 className="text-sm ">Shipping</h2>
                <span className="text-sm  ">$5.00</span>
                <div className="absolute bottom-0 left-0 w-full border-t border-gray-200"></div>
              </div>

              <div className="relative py-2 flex justify-between ">
                <h2 className="text-sm  ">Tax</h2>
                <span className="text-sm  ">$72.50</span>
                <div className="absolute bottom-0 left-0 w-full border-t border-gray-200"></div>
              </div>

              <div className="mt-6 relative  flex justify-between ">
                <h2 className="text-lg  mb-2">Order Total</h2>
                <span className="text-lg mb-2 ">$802.46</span>
              </div>
            </div>
              
            <div className='my-8 text-center'>
            <button className="px-4 w-full py-3 bg-blue-500 tracking-wider font-medium text-white text-sm rounded-md transition-all transform hover:scale-95 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800">
              <Link to='/Checkout'>PROCEED TO CHECKOUT</Link>
            </button>
            </div>
              
        </div>
      </div>
    </section>
  )
}

export default Carts