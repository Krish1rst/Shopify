import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useGlobalContext } from '../Context/ContextApi';
export default function TextFieldSizes() {

  const Context=useGlobalContext();
  const {isDarkMode,handleSearchProductChange,searchProduct}=Context;
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {  width: '100%', backgroundColor: 'white' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Search products"
          id="outlined-size-small"
          size="small"
          value={searchProduct}
          onChange={(e) => {
            handleSearchProductChange(e.target.value);
          }}
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
