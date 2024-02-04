import axios from "axios";
const URL='https://fakestoreapi.com/products';

const FetchData = async (url) => {
      try {
        const response = await axios(URL);
        const result =  response.data;
        return result;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  



