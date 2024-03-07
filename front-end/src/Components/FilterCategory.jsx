import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useGlobalContext } from '../Context/ContextApi';

export default function SelectSmall() {
  const Context = useGlobalContext();
  const { handleCategoryChange, selectCategory, data } = Context;
 
  const categories = ['All', ...new Set(data.map((item) => item.category))];

  return (
    <FormControl sx={{ minWidth: 120, width: '100%', backgroundColor: 'white' }} size="small">
      <InputLabel id="demo-select-small-label">Categories</InputLabel>
      <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectCategory}
          label="Categories"
          onChange={ handleCategoryChange}
          sx={{ backgroundColor: 'white' }}
        >
        {categories.map((item) => (
          <MenuItem value={item} key={item}>
            {item.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

