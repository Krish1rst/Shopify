

const reducer =  (state, action) => {

  if (action.type === 'ADD_TO_CART') {
    const { id } = action.payload;
    if (!state.cart.find(item => item.id === id)) {
      return {
        ...state,
        cart: [...state.cart, {...action.payload,amount:1,tax:0}]
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

  if(action.type==='INCREASE'){
    let tempCart = state.cart.map((item)=>{
      if(item.id===action.payload){
        const amount=item.amount+1;
         return {...item,amount:amount}
      }
      return item;
    });
    return {...state,cart:tempCart}
  }

  if(action.type==='DECREASE'){
    let tempCart = state.cart.map((item)=>{
      if(item.id===action.payload){
         return {...item,amount:item.amount-1,}
      }
      return item;
    }).filter((item)=>item.amount!==0);
    return {...state,cart:tempCart}
  }
  if (action.type === 'GET_TOTAL') {
    return { ...state, total: state.total };
  }
  

  return state;
};

export default reducer;
// let { total, amount } = state.cart.reduce(
//   (cartTotal, cartItem) => {
//     const { price, amount } = cartItem;
//     const itemTotal = price * amount;

//     cartTotal.total += itemTotal;
//     cartTotal.amount += amount;

//     return cartTotal;
//   },
//   {
//     total: 0,
//     amount: 0,
//   }
// );

// total = parseFloat(total.toFixed(2));

// return { ...state, total, amount };