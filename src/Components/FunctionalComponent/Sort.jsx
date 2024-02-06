import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortSelect() {
  const [sortOption, setSortOption] = React.useState('');

  const handleChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel
          id="sort-select-label"
          sx={{ fontSize: '1.2rem' }} // Increase font size here
        >
          Sort By
        </InputLabel>
        <Select
          labelId="sort-select-label"
          id="sort-select"
          value={sortOption}
          onChange={handleChange}
          label="Sort By"
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
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="size">Size</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
