import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

export default function SliderSizes() {
  const [value, setValue] = React.useState(50);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <Typography   >
        Price: {value}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        size="medium"
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={{
          '& .MuiSlider-thumb': {
            width: 14, // Change the width of the thumb
            height: 14, // Change the height of the thumb
          },
          '& .MuiSlider-rail': {
            height: 7, // Change the height of the rail
          },
          '& .MuiSlider-track': {
            height: 7, // Change the height of the track
          },
        }}
      />
    </Box>
  );
}
