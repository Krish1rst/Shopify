import axios from "axios";
const Base_Url='https://fakestoreapi.com/products'

export const FetchData = async (limit) => {
  const URL=`${Base_Url}/?limit=${limit}`;

      try {
        const response = await axios(URL);
        const result =  response.data;
        return result;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 export  const fetchSingleProduct = async (productId) => {
      try {
        const response = await axios(`https://fakestoreapi.com/products/${productId}`);
        const singleData = response.data;
        return singleData;
      } catch (err) {
        console.log("There is an error in fetching", err);
      }
    };


