
const url='https://fakestoreapi.com/products';

const FetchData = async (url) => {
      try {
        const response = await fetch(`url`);
        const result = await response.json();
  
        return result;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  



export {FetchData};