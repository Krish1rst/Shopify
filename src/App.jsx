
import { useState, useEffect } from 'react';
import { Home,About,Carts,Product,Checkout,Order } from './Pages';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SingleProduct from './Components/SingleProduct';
import Navbar from './Components/Navbar';
function App() {
const [datas,setDatas]=useState([]);
  const fecthData=async ()=>{
    const response= await fetch('https://fakestoreapi.com/products');
    const data= await response.json();
    console.log(data)
    setDatas(data);
  }
   useEffect(()=>{
    fecthData();
  },[])

  return (
   <>
    <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path='/'element={<Home />}/>
    <Route path='/About'element={<About/>}/>
    <Route path='/Products'element={<Product datas={datas}/>}/>
    <Route path='/Products/:productId'element={<SingleProduct />}/>
    <Route path='/Carts'element={<Carts/>}/>
    <Route path='/Checkout'element={<Checkout/>}/>
    <Route path='/Order'element={<Order/>}/>
  </Routes>
    
  </BrowserRouter>
      
   </>
  );
}

export default App;
