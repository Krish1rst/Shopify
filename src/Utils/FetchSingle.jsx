const fetchProduct = async (productId) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const product = await response.json();
      return product;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  };
  
  export default fetchProduct;
  