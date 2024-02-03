
import { useState, useEffect } from 'react';
import { Home,About,Carts,Product,Checkout,Order } from './Pages';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SingleProduct from './Components/SingleProduct';
import Navbar from './Components/Navbar';

import PaginationOutlined from './Components/Pagination';
function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  return (
   <>
    <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path='/'element={<Home />}/>
    <Route path='/About'element={<About/>}/>
    <Route path='/Products'element={<Product datas={data}/>}/>
    <Route path='/Products/:productId'element={<SingleProduct />}/>
    <Route path='/Products/:?limit='element={<SingleProduct />}/>
    <Route path='/Carts'element={<Carts/>}/>
    <Route path='/Checkout'element={<Checkout/>}/>
    <Route path='/Order'element={<Order/>}/>
  </Routes>
    
  </BrowserRouter>
      
   </>
  );
}

export default App;
