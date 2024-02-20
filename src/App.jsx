import { Home,About,Carts,Product,Checkout,Order } from './Pages';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SingleProduct from './Components/SingleProduct';
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
          <Route path='/Products/:productId'element={<SingleProduct />}/>
          <Route path='/Products/:?limit='element={<SingleProduct />}/>
          <Route path='/Carts'element={<Carts/>}/>
          <Route path='/Checkout'element={<Checkout/>}/>
          <Route path='/Order'element={<Order/>}/>
        </Routes>
    </BrowserRouter>
  
  );
}

export default App;
