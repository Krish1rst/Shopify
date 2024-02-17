import React,{createContext,useState,useEffect,useRef, useContext, useReducer} from 'react'

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
  isDarkMode: false,
}

export const ContextProvider=({children})=> {

 const [data,setData]=useState([]);
 const [loading,setLoading]=useState(false);
 const [featuredData,setFeaturedData]=useState([]);
 const [currentPage,setCurrentPage]=useState(1);
 const [grid,setGrid]=useState(true);
 const [list,setList]=useState(false);
 const [nav,setNav]=useState(false);
 const navbarRef = useRef(null)

useEffect(()=>{
    const FetchedApiData=async()=>{
    try {
            setLoading(true);
            const result= await FetchData(20);
            const featuredResult= await FetchData(3);
            console.log(result);
            setLoading(false);
            setData(result);
            setFeaturedData(featuredResult);
        }
    catch (error) {
        console.error(error);
        setLoading(false);
          }
        }
       
        FetchedApiData();
    },[])

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
    
  

const handleGrid = () => {
        setGrid(true)
        setList(false)
    };
const handleList = () => {
      setGrid(false)
      setList(true)
  };
  
const productPerPage=6;
const endIndex = currentPage*productPerPage;
const startIndex = endIndex-productPerPage ;
const currentData = data.slice(startIndex, endIndex);
const handlePageChange=(e,value)=>{
    setCurrentPage(value); 
  }
    
const [state,dispatch]=useReducer(reducer, initialState);

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

const toggleTheme = () => {
  const newTheme = !state.isDarkMode; // Toggle the theme
  dispatch({ type: 'TOGGLE_THEME', payload: newTheme });
  document.body.classList.toggle('dark-theme');


};

useEffect(()=>{
dispatch({type:'GET_TOTAL'})
},[state.cart])


return (

   <AppContext.Provider value={{ 
        data,
        featuredData,
        grid,list,
        handleGrid,
        handleList,
        loading,
        currentData,
        currentPage,
        setCurrentPage,
        startIndex,
        endIndex,
        productPerPage,
        handlePageChange,
        nav,setNav,
       ...state,dispatch,addToCart,remove,increase,decrease,handleOnChange,navbarRef,toggleTheme  
   }}>
        {children}
   </AppContext.Provider>
   
  )
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
