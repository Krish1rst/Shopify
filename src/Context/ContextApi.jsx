import React, {createContext,useContext,useState,useEffect,useRef,useReducer} from 'react'
import { FetchData } from '../Utils/FetchApi';
import reducer from '../Utils/Reducer';


const AppContext = createContext(); 
const CART_STORAGE_KEY = 'cart';

const initialState={
  cart: JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [],
  amount:0,
  total:0,
  subTotal:0,
  tax:0,
  shipping:5,
  data:[],
  isDarkMode: false,
  selectCategory: 'All',
  price: 1000,
  sort: '',
  searchProduct: '',
  featuredData:[],
  loading:false,
  filteredProduct:[]
}

export const ContextProvider=React.memo(({children})=> {

  const [state,dispatch]=useReducer(reducer, initialState);

 const [grid,setGrid]=useState(true);
 const [list,setList]=useState(false);
 const [nav,setNav]=useState(false);
 const navbarRef = useRef(null)
 
//dataFetching----------------------------------------------------

const FetchedApiData=async()=>{
  dispatch({type:'START'})
  try {
          const result= await FetchData(20);
          const featuredResult= await FetchData(3);
          dispatch({type:'FETCH',payload:result})
          dispatch({type:'FEATURED_DATA',payload:featuredResult})
      }
  catch (error) {
     dispatch({type:'FAILED'})
        }
      }

useEffect(()=>{
        FetchedApiData(dispatch);
    },[])

//paginatiom-----------------------------------------------------------------
const [currentPage,setCurrentPage]=useState(1);
const productPerPage=9;
const endIndex = currentPage*productPerPage;
const startIndex = endIndex-productPerPage ;
const currentData = state.filteredProduct.slice(startIndex, endIndex);
const handlePageChange=(e,value)=>{
    setCurrentPage(value); 
  }
  
//MenuHandling---------------------------------------------------------------

const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNav(false);
      }
    };
  
useEffect(() => {
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);    

//uiConditional display----------------------------------------------  
const handleGrid = () => {
        setGrid(true)
        setList(false)
    };
const handleList = () => {
      setGrid(false)
      setList(true)
  };


//cart-----------------------------------------------------



useEffect(() => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
}, [state.cart]);

const addToCart = (item) => {
  dispatch({ type: 'ADD_TO_CART', payload: item });
};

const remove=(id)=>{
  dispatch({type:'REMOVE',payload:id})
}
const increase=(id)=>{
  dispatch({type:'INCREASE',payload:id})
}
const decrease=(id)=>{
  dispatch({type:'DECREASE',payload:id})
}
const handleOnChange = (selectedValue, itemId) => {
  dispatch({ type: 'SET_AMOUNT', payload: { id: itemId, amount: selectedValue } });
};


//theme-----------------------------------------------------------

const toggleTheme = () => {
  const newTheme = !state.isDarkMode;
  dispatch({ type: 'TOGGLE_THEME', payload: newTheme });
  document.body.classList.toggle('dark-theme');
};

useEffect(()=>{
dispatch({type:'GET_TOTAL'})
},[state.cart])

//filtering-------------------------------------------------------

  const handleCategoryChange = (e) => {
  dispatch({ type: 'SET_CATEGORY', payload: e.target.value })
  };
  const handlePriceChange = (selectedPrice) => {
    dispatch({ type: 'SET_PRICE', payload: selectedPrice });
  };

  const handleSortChange = (selectedSort) => {
    dispatch({ type: 'SET_SORT', payload: selectedSort });
  };

  const handleSearchProductChange = (searchValue) => {
    dispatch({ type: 'SET_SEARCH_PRODUCT', payload: searchValue });
  };

  const handleFilter=(data)=>{
    dispatch({type:'FILTER',payload:data})
  }
  const handleReset=(data)=>{
    dispatch({type:'RESET',payload:data})
  }

return (

   <AppContext.Provider value={{ 
        handleCategoryChange,handlePriceChange,handleSortChange,handleSearchProductChange,
        handleFilter,handleReset,
        grid,list,
        handleGrid,
        handleList,
        nav,setNav,
        currentData,
        productPerPage,
        currentPage,handlePageChange, 
       ...state,dispatch,
       addToCart,remove,increase,decrease,handleOnChange,
       navbarRef,toggleTheme,
   }}>
        {children}
   </AppContext.Provider>
   
  )
})

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
