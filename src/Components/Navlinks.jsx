import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'Carts', text: 'Carts' },
  { id: 5, url: 'checkout', text: 'checkout' },
  { id: 6, url: 'orders', text: 'orders' },
];

function Navlinks() {
  return (
    <nav className="flex  justify-center  gap-1 ">
      {links.map((item) => {
        const { id, url, text } = item;
        return (
          <NavLink
            key={id}
            className={({isActive}) => (
              isActive
                ? 'text-white bg-gray-900 px-4 py-2 rounded-lg transition-colors duration-300'
                : 'hover:bg-gray-300 px-4 py-2 rounded-lg text-gray-800 font-medium hover:text-gray-800 transition-colors duration-300 ')}to={url}>{text}</NavLink>);})
            
            }
    </nav>
  );
}

export default Navlinks;
