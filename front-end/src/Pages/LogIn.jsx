import React from 'react';
import { Link,redirect, useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
import { useGlobalContext } from '../Context/ContextApi';

function LoginForm() {
  const {user,SetUser,SetToken}=useGlobalContext()
  const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData= new FormData(e.currentTarget)
    if(!formData){
      console.log('input error')
    }
    const data=Object.fromEntries(formData)
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/signIn', data);
      console.log(response)
      const {data:{user:{name,token}}}=response;
      SetUser(name);
      SetToken(token);
      console.log(token)
      toast.success('Login successfull');
      return navigate('/');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';
      toast.error(errorMessage);
      return null;
    }
    
};
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen">
      
      <div className="w-full  max-w-md">
      <p className='text-4xl font-bold text-slate-600 text-center py-8'>Login</p>
        <form method='POST' onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
         
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
              name="email"
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
              name="password"
            />
          </div>
          <div className="flex flex-col gap-4">
            <button
              className='px-4 w-full py-3 my-1 sm:my-0  tracking-wider font-medium text-xs sm:text-sm rounded-md transition-all transform  active:scale-100 hover:shadow-md focus:outline-none focus:ring focus:border-purple-800 bg-blue-500 text-blue-50 '
              type="submit"
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

export default LoginForm;
