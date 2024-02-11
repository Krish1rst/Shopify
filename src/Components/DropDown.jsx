// Dropdown.jsx
import React from 'react';

const Dropdown = ({ options }) => {
  return (
    <div className="inline-flex  gap-4 items-center  mt-4">
      <label htmlFor="itemDropdown" className=" text-lg font-medium text-neutral-700">Amount</label>
            <select
        id="itemDropdown"
        className="mt-1 block w-30 px-2 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-transform transform hover:border-gray-500"
        >
        {options.map((option) => (
            <option
            key={option.item}
            value={option.item}
            className="block text-sm font-normal text-neutral-700"
            >
            Item {option.item}
            </option>
        ))}
        </select>
    </div>
  );
};

export default Dropdown;
