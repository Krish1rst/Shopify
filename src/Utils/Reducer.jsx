const reducer =  (state, action) => {

  if(action.type==='TOGGLE_THEME'){
    return {
      ...state,
      isDarkMode: !state.isDarkMode,
    };
  }

  if (action.type === 'ADD_TO_CART') {
    const { id } = action.payload;
    if (!state.cart.find(item => item.id === id)) {
      return {
        ...state,
        cart: [...state.cart, {...action.payload,amount:1,tax:1}]
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

  if (action.type === 'SET_AMOUNT') {
    const { id, amount } = action.payload;
    let tempCart = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: parseInt(amount) };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  
  if(action.type==='GET_TOTAL'){
    let {total,amount,subTotal,shipping,tax}=state.cart.reduce((cartTotal,cartItem)=>{
     const {price,amount,tax}=cartItem;

    cartTotal.amount+=amount;
    cartTotal.subTotal+=price*amount;
    cartTotal.tax+=tax*amount;

     return cartTotal;
    },{total:0,amount:0,subTotal:0,shipping:5,tax:0});
    total=subTotal+tax+shipping;
    subTotal=parseFloat(subTotal.toFixed(2));
    total=parseFloat(total.toFixed(2));

    return {...state,amount,total,subTotal,shipping,tax}
  }
 if(action.type==='SET_CATEGORY'){
  return { ...state, selectCategory: action.payload };
 }
 if(action.type==='SET_PRICE'){
  return { ...state, price: action.payload };
 }
 if(action.type==='SET_SORT'){
  return { ...state, sort: action.payload };
 }
 if(action.type==='SET_SEARCH_PRODUCT'){
  
  return { ...state, searchProduct: action.payload };
 }
  return state;
};

export default reducer;
