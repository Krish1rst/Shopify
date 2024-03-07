import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../Context/ContextApi';
const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'Carts', text: 'Carts' },
  { id: 5, url: 'checkout', text: 'checkout' },
  { id: 6, url: 'Order', text: 'Order' },
];

function Navlinks() {
  const Context = useGlobalContext();
  const { isDarkMode } = Context;
  return (
    <nav className="flex  justify-center  gap-1 ">
      {links.map((item) => {
        const { id, url, text } = item;
        return (
          <NavLink
            key={id}
            className={({isActive}) => (
              isActive
                ? `  ${isDarkMode ?' bg-gray-600 text-gray-50':'bg-gray-900 text-white'} px-4 py-2 rounded-lg transition-colors duration-300`
                : `hover:bg-gray-300 px-4 py-2 rounded-lg ${isDarkMode ?'text-gray-200':'text-gray-800'}  hover:text-gray-800 font-medium  transition-colors duration-300 `)}to={url}>{text}</NavLink>);})
            
            }
    </nav>
  );
}

export default Navlinks;
// ${isDarkMode ?'':''}