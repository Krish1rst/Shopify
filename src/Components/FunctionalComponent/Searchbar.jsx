import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldSizes() {
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
        />
      </div>
    </Box>
  );
}
