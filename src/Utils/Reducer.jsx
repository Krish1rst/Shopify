

const reducer =  (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const { id } = action.payload;
    
    if (!state.cart.find(item => item.id === id)) {
      return {
        ...state,
        cart: [...state.cart, {...action.payload,items:0}]
      };
    }
  }

  if (action.type === 'REMOVE') {
   
    const remain = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: remain
    };
  
  }

  return state;
};

export default reducer;
