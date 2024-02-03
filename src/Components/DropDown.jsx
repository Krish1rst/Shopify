// Dropdown.jsx
import React from 'react';

const Dropdown = ({ options }) => {
  return (
    <div className="inline-flex  gap-4 items-center  mt-4">
      <label htmlFor="itemDropdown" className=" text-2xl font-medium text-neutral-700">Amount</label>
            <select
        id="itemDropdown"
        className="mt-1 block w-40 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-transform transform hover:border-gray-500"
        >
        {options.map((option) => (
            <option
            key={option.item}
            value={option.item}
            className="block text-xl font-medium text-neutral-700"
            >
            Item {option.item}
            </option>
        ))}
        </select>
    </div>
  );
};

export default Dropdown;
