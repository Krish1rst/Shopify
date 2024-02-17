import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useGlobalContext } from '../Context/ContextApi';

export default function SelectSmall() {
  const context=useGlobalContext();
  const {isDarkMode}=context;
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120, width: '100%', backgroundColor: isDarkMode ? '#333333' : 'white' }} size="small">
      <InputLabel id="demo-select-small-label" >Sort Item</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Sort Items"
        onChange={handleChange}
        sx={{ backgroundColor: 'white' }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Low to high</MenuItem>
        <MenuItem value={20}>High to low</MenuItem>
        <MenuItem value={30}>A-Z</MenuItem>
        <MenuItem value={30}>Z-A</MenuItem>
      </Select>
    </FormControl>
  );
}