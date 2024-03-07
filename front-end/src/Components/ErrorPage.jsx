import React from 'react';

import { Link } from 'react-router-dom';
const ErrorPage = () => {
    
    
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full flex flex-col gap-4">
        <h1 className="text-3xl text-red-500 text-center font-semibold mb-4">Error</h1>
        <p className="text-gray-600 mb-4">There is an error, try again or check your connection.</p>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-400"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
        <Link to='/'>
        <button
          className="bg-blue-500 w-full hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-400"
          
        >
           Go Home
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
