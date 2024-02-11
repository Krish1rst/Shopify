import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: 100 }} size="small">
      <InputLabel 
        id="demo-select-small-label" 
        sx={{ fontSize: '0.8rem' }} // Adjust the font size here
      >
        Value
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label="Value"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>
    </FormControl>
  );
}
