import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../Context/ContextApi';

export default function SliderSizes() {

const Context=useGlobalContext();
const {price,handlePriceChange}=Context;

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <Typography   >
        Price: {price}
      </Typography>
      <Slider
        value={price} onChange={(e)=>handlePriceChange(e.target.value)}
        size="medium"
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={{
          '& .MuiSlider-thumb': {
            width: 14, 
            height: 14, 
          },
          '& .MuiSlider-rail': {
            height: 7, 
          },
          '& .MuiSlider-track': {
            height: 7, 
          },
        }}
      />
    </Box>
  );
}
