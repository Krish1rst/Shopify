import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search Product"
        sx={{ fontSize: '1.5rem', bgcolor: 'white' }} // Increase font size and set background color here
      />
    </Box>
  );
}
