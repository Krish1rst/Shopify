import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AmountSelect() {
  const [amount, setAmount] = React.useState('');

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100,my:2 }}>
      <FormControl fullWidth>
        <InputLabel 
    id="demo-simple-select-label" 
    sx={{ 
        top: amount ? '-10px' : '50%', 
        transform: amount ? 'translateY(0)' : 'translateY(-50%)', 
        marginLeft: '8px', 
        transition: 'top 0.2s, transform 0.2s' 
    }}
    >
    Amount
    </InputLabel>
            <Select
            sx={{ borderRadius: '8px', minWidth: '70px', minHeight: '40px', '& .MuiSelect-select.MuiSelect-select': { padding: '10px' } }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={amount}
            label="Amount"
            onChange={handleChange}
            >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            </Select>
        </FormControl>
        </Box>
    );
    }
