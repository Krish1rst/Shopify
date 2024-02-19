import React from 'react'
import { useGlobalContext } from '../Context/ContextApi'


  
function CartDetails() {
    const Context=useGlobalContext();
  const {isDarkMode,total,subTotal,shipping,tax,cart}=Context;

  return (
    <div className={` ${isDarkMode ?'bg-slate-900':'bg-blue-50'} h-fit rounded-2xl py-4 px-6`}>
      <div className={`relative py-2 flex justify-between ${isDarkMode?"text-slate-200":"text-slate-900"}`}>
          <h2 className="text-sm  ">Subtotal</h2>
        <span className="text-sm  ">${subTotal}</span>
          <div className={`absolute bottom-0 left-0 w-full border-t ${isDarkMode ?'border-gray-500':'border-gray-200'} `}></div>
        </div>

      <div className={`relative py-2 flex justify-between ${isDarkMode?"text-slate-200":"text-slate-900"}`}>
        <h2 className="text-sm ">Shipping</h2>
        <span className="text-sm  ">{cart.length === 0 ? '$0' : `$${shipping}`}</span>
        <div className={`absolute bottom-0 left-0 w-full border-t ${isDarkMode ?'border-gray-500':'border-gray-200'} `}></div>
      </div>

      <div className={`relative py-2 flex justify-between ${isDarkMode?"text-slate-200":"text-slate-900"}`}>
        <h2 className="text-sm  ">Tax</h2>
        <span className="text-sm  ">${tax}</span>
        <div className={`absolute bottom-0 left-0 w-full border-t ${isDarkMode ?'border-gray-500':'border-gray-200'} `}></div>
      </div>

      <div className={`relative py-2 flex justify-between ${isDarkMode?"text-slate-200":"text-slate-900"}`}>
        <h2 className="text-lg  mb-2">Order Total</h2>
        <span className="text-lg mb-2 ">${total}</span>
      </div>
  </div>
  )
}

export default CartDetails