import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState,useEffect } from 'react';

export default function PaginationOutlined() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const limit = 6; // Set your desired limit
  
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
        const result = await response.json();
  
        setData(result);
        setTotalPages(Math.ceil(20/ limit));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handlePageChange = (event, newPage) => {
      setCurrentPage(newPage);
    };
  
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    const currentData = data.slice(startIndex, endIndex);
  
return (
    <Stack spacing={2}>
     
   <Pagination count={4} page={currentPage}
        onChange={handlePageChange} variant="outlined" color="primary" currentData={currentData}/>

    </Stack>
  );
}
