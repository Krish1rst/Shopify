import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function StyledSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel
          id="category-select-label"
          sx={{ fontSize: '1.2rem' }} // Increase font size here
        >
          Category
        </InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={age}
          onChange={handleChange}
          label="Category"
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: 'white',
            },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
