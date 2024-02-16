import React from 'react'

function Checkout() {
  return (
   <section className='mx-4 sm:mx-8 md:mx-14 lg:mx-18 xl:mx-24 my-6 sm:my-8 md:my-12 lg:my-24'>
     <div className='flex justify-start relative py-4'>
          <p className="text-gray-700 text-3xl tracking-wider font-semibold  ">Place Your Order</p>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gray-400 opacity-40"></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:mt-8 gap-8'>
          <div className='w-full py-6 sm:py-0 '>
            <form method="post" action="/checkout" className="flex flex-col gap-y-4">
                <h4 className="font-medium text-xl capitalize">shipping information</h4>
                <div className="flex flex-col ">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="name" name="name" className="border rounded-md py-2 px-3 focus:outline-none focus:ring mt-1" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
                  <input type="text" id="address" name="address" className="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500" />
                </div>
                <div className="mt-4">
                  <button type="submit" className="bg-blue-500 w-full hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring ">
                    Place Your Order
                  </button>
                </div>
            </form>
          </div>

        <div className='w-full h-fit rounded-3xl '>
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
              
            
              
        </div>
      </div>

   </section>
  )
}

export default Checkout