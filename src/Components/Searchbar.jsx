import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useGlobalContext } from '../Context/ContextApi';
export default function TextFieldSizes() {
  // ${isDarkMode ?'':''}
  const Context=useGlobalContext();
  const {isDarkMode}=Context;
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {  width: '100%', backgroundColor: isDarkMode ? '#333333' : 'white' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Search products"
          id="outlined-size-small"
          size="small"
          InputProps={{
            style: {
              color: isDarkMode ? '#ffffff' : '#000000', 
            },
          }}
        />
      </div>
    </Box>
  );
}
