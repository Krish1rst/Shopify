import React,{useEffect, useState} from 'react'
import { useGlobalContext } from '../Context/ContextApi'
import axios from 'axios';
import moment from 'moment';


function Order() {
  const {isDarkMode,token,SetOrdersData,ordersData }=useGlobalContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/product/order',
         {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        );
        SetOrdersData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const { order, count } = ordersData;

  return (
    <section className='flex flex-col mx-4 sm:mx-8 md:mx-12 lg:mx-18 xl:mx-24  my-10  md:my-16  transition-all duration-300 transform transition-delay-250 max-w-6xl 2xl:mx-auto '>
      <div className='flex justify-start relative py-4'>
          <p  className={` text-3xl tracking-wider font-semibold ${isDarkMode ?'text-gray-200':'text-gray-700'}`}>Your Orders</p>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gray-400 opacity-40"></div>
      </div>
      {count > 0 && (
        <div className={`${isDarkMode ? 'bg-slate-600 text-white' : 'bg-blue-50 text-slate-700'} font-semibold py-2 px-4 rounded mt-4`}>
          Total Orders: {count}
        </div>
      )}

{count > 0 && (
  <div className="overflow-x-auto my-8">
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr className={`rounded-xl ${isDarkMode ? 'bg-slate-700 text-gray-200' : 'bg-gray-100 text-gray-500'}`}>
          <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Address</th>
          <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Products Ordered</th>
          <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Cost</th>
          <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Date</th>
        </tr>
      </thead>
      {order?.map((item, index) => (
        <tbody key={index} className="divide-y divide-gray-200">
          <tr className={`${isDarkMode ? 'text-slate-200' : 'text-slate-800'} text-center px-6 py-4 whitespace-nowrap`}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.totalProduct}</td>
            <td>$ {item.cost}</td>
            <td className="px-6 py-4 whitespace-nowrap">{moment(item.createdAt).format('MMM DD, YYYY, hh:mm:ss A')}</td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>
)}


    </section>
  )
}

export default Order