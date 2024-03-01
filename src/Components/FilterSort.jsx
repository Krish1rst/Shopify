import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useGlobalContext } from '../Context/ContextApi';

export default function SelectSmall() {
  const context=useGlobalContext();
  const {isDarkMode,handleSortChange,sort}=context;
  const options=['A-Z','Z-A','Price Low to High','Price High to Low']


  return (
    <FormControl sx={{ minWidth: 120, width: '100%', backgroundColor: isDarkMode ? '#333333' : 'white' }} size="small">
      <InputLabel id="demo-select-small-label" >Sort Item</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sort}
        label="Sort Items"
        onChange={(e)=>{
          console.log(e.target.value)
          handleSortChange(e.target.value)
        }}
        sx={{ backgroundColor: 'white' }}
      >
        {options.map((item)=>{
         return <MenuItem value={item} key={item}>{item}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
}
