const reducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
      if (!state.cart.includes(action.payload)) {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      }
    }
    if(action.type==='REMOVE'){
        const remain=state.cart.filter((items)=>items.id!==action.payload);
        return {
            ...state,cart:remain
        };
    }
    return state;
  };
  
  export default reducer;
  