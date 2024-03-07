import React from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen">
      
      <div className="w-full  max-w-md">
      <p className='text-4xl font-bold text-slate-600 text-center py-8'>Login</p>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
         
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm  mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm  mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-4">
            <button
              className='px-4 w-full py-3 my-1 sm:my-0  tracking-wider font-medium text-xs sm:text-sm rounded-md transition-all transform  active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800 bg-blue-500 text-blue-50 '
              type="button"
            >
              LOGIN
            </button>
            <Link to='/'>
            <button
              className='px-4 w-full py-3 my-1 sm:my-0  tracking-wider font-medium text-xs sm:text-sm rounded-md transition-all transform  active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800 bg-purple-800 text-blue-50 '
              type="button"
            >
              GUEST USER
            </button>
            </Link>
            
          </div>
        </form>
        <p className="text-center text-gray-800 text-md ">
          Not a member yet ?{' '}
          <Link to='/Register' className="text-blue-800">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
