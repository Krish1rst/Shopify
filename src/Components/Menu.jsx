import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: '/', text: 'Home' },
  { id: 2, url: 'about', text: 'About' },
  { id: 3, url: 'products', text: 'Products' },
  { id: 4, url: 'Carts', text: 'Cart' },
  { id: 5, url: 'checkout', text: 'Checkout' },
  { id: 6, url: 'Order', text: 'Order' },
];

function Navlinks() {
  return (
    <nav className="flex flex-col ">
      {links.map((item) => {
        const { id, url, text } = item;
        return (
          <NavLink
            key={id}
            to={url}
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-800 text-gray-100 py-1 px-2 transition-colors duration-300 text-sm  rounded-md'
                : 'text-gray-900 hover:bg-gray-700 py-1 px-2 transition-colors duration-300 text-sm  rounded-md'
            }
          >
            {text}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navlinks;
