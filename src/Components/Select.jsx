import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useGlobalContext } from '../Context/ContextApi';


export default function SelectSmall() {
  const Context=useGlobalContext();
  const {handleCategory,data}=Context;
  
  const categories= new Set(data.map((item)=>item.category))
  console.log(categories)
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <FormControl sx={{  minWidth: 120, width: '100%', backgroundColor: 'white' }} size="small">
      <InputLabel id="demo-select-small-label" >Categories</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Categories"
        onChange={handleChange}
        sx={{ backgroundColor: 'white' }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {categories.map((item)=>{
            <MenuItem value={0} key={item}>{item}</MenuItem>
        })}
        
      </Select>
    </FormControl>
  );
}
