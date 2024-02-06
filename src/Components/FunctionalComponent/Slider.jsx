import React, { useState } from 'react';

const StyledSlider = () => {
  const [value, setValue] = useState(50);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-full relative">
      <label htmlFor="price-slider" className='text-xl'>Select Price</label>
      <input
        type="range"
        id="price-slider"
        name="price-slider"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
        className="block w-full mt-2 appearance-none bg-blue-500 h-2 rounded-full outline-none "
        style={{ 'cursor': 'pointer' }}
      />
      <div className="absolute top-0 right-1  -translate-x-1/2 text-xl text-gray-700">{value}</div>
    </div>
  );
}

export default StyledSlider;
