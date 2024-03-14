import {Register,LogIn, Home,About,Carts,Product,Checkout,Order,SingleProduct,Layout} from './Pages';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  
  return (
   
      <BrowserRouter>

        <Routes>
            <Route path='/'element={<Layout/>}>
              <Route index element={<Home />}/>
              <Route path='About'element={<About/>}/>
              <Route path='Products'element={<Product />}/>
              <Route path='Products/:productId'element={<SingleProduct/>}/>
              <Route path='Carts'element={<Carts/>}/>
              <Route path='Checkout'element={<Checkout/>}/>
              <Route path='Order'element={<Order/>}/>

            </Route>
            <Route path='/Register'element={<Register/>}/>
            <Route path='/SignIn'element={<LogIn/>}/>
        </Routes>
    </BrowserRouter>
  
  );
}

export default App;
