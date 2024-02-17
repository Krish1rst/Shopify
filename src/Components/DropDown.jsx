import React from 'react';
import { useGlobalContext } from '../Context/ContextApi';
const Dropdown = ({ options, handleOnChange, id }) => {
  // ${isDarkMode ?'':''}
  const {isDarkMode }=useGlobalContext();
  return (
    <div className="inline-flex gap-2 lg:gap-4 items-center  mt-4">
      <label htmlFor="itemDropdown" className={`lg:text-lg lg:font-medium  ${isDarkMode ?'text-neutral-300':'text-neutral-700'}`}>
        Amount</label>
      <select
        id="itemDropdown"
        className={`lg:mt-1 block w-30 px-2 py-1 md:py-2 border  
        rounded-md focus:outline-none focus:ring  transition-transform
         transform hover:border-gray-500 ${isDarkMode ?'border-gray-700 text-slate-500 focus:border-blue-700':'focus:border-blue-300 border-gray-400'}`}
        onChange={(e) => handleOnChange(e.target.value, id)}
        value={options.find(option => option.item === id)?.item}
      >
        {options.map((option) => (
          <option
            key={option.item}
            value={option.item}
            className={`block text-sm md:font-normal ${isDarkMode ?'text-neutral-700':'text-neutral-700'} `}
          >
            Item {option.item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
