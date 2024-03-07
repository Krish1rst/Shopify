import React from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen">
      
      <div className="w-full  max-w-md">
      <p className='text-4xl font-bold text-slate-600 text-center'>Register</p>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6 ">
            <label
              className="block text-gray-700 text-sm  mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
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
          <div className="flex items-center justify-between">
            <button
              className='px-4 w-full py-3 my-1 sm:my-0  tracking-wider font-medium text-xs sm:text-sm rounded-md transition-all transform hover:scale-105 active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800 bg-blue-500 text-blue-50 '
              type="button"
            >
              REGISTER
            </button>
          </div>
        </form>
        <p className="text-center text-gray-700 text-md ">
          Already a member ?{' '}
          <Link to='/SignIn' className="text-blue-500">
              Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
