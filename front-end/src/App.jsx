import {Register,LogIn, Home,About,Carts,Product,Checkout,Order,SingleProduct } from './Pages';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TopNav from './Components/TopNav';


function App() {
  
  return (
   
      <BrowserRouter>
      <TopNav/>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Home />}/>
          <Route path='/About'element={<About/>}/>
          <Route path='/Products'element={<Product />}/>
          <Route path='/Products/:productId'element={<SingleProduct/>}/>
          <Route path='/Carts'element={<Carts/>}/>
          <Route path='/Checkout'element={<Checkout/>}/>
          <Route path='/Order'element={<Order/>}/>
          <Route path='/Register'element={<Register/>}/>
          <Route path='/LogIn'element={<LogIn/>}/>
        </Routes>
    </BrowserRouter>
  
  );
}

export default App;
