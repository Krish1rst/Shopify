
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../Context/ContextApi';

const links = [
  { id: 1, url: '/', text: 'Home' },
  { id: 2, url: 'about', text: 'About' },
  { id: 3, url: 'products', text: 'Products' },
  { id: 4, url: 'Carts', text: 'Cart' },
  { id: 5, url: 'checkout', text: 'Checkout' },
  { id: 6, url: 'Order', text: 'Order' },
];

function Navlinks() {
  
   const {isDarkMode,user }=useGlobalContext();
  return (
    <nav className="flex flex-col ">
      {links.map((item) => {
        const { id, url, text } = item;
        if((url==='checkout'||url==='Order')&& !user)return null;
        return (
          <NavLink
            key={id}
            to={url}
            className={({ isActive }) =>
              isActive
                ? ` ${isDarkMode ?'bg-slate-800 text-gray-100':'bg-gray-800 text-gray-100'}  py-1 px-2 transition-colors duration-300 text-xs  rounded-md`
                : ` ${isDarkMode ?'hover:bg-gray-400 text-gray-300':'text-gray-900 hover:bg-gray-700'}  py-1 px-2 transition-colors duration-300 text-xs  rounded-md`
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
