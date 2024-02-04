
import { useContext,useState, useEffect } from 'react';
import { Home,About,Carts,Product,Checkout,Order } from './Pages';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SingleProduct from './Components/SingleProduct';
import Navbar from './Components/Navbar';
import { useGlobalContext } from './Context/ContextApi';


function App() {
  const ContextData=useGlobalContext();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      console.log(response);
      const result = await response.json();
      // const response = await fetch('https://fakestoreapi.com/products');
      // const textData = await response.text();
      // const result = JSON.parse(textData);

      console.log(result);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  return (
   
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
  
  );
}

export default App;
