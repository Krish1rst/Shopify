import React,{createContext,useState,useEffect, useContext, useReducer} from 'react'
import { FetchData } from '../Utils/FetchApi';
import { Reducer } from 'react';
const AppContext = createContext();
import reducer from '../Utils/Reducer';

const CART_STORAGE_KEY = 'cart';
const initialState={
  cart: JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || []
}

export const ContextProvider=({children})=> {

 
 const [data,setData]=useState([]);
 const [loading,setLoading]=useState(false);
 const [featuredData,setFeaturedData]=useState([]);
 const [currentPage,setCurrentPage]=useState(1);
 const [grid,setGrid]=useState(true);
 const [list,setList]=useState(false);

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
       ...state,dispatch,addToCart,remove

        
        
   }}>

        {children}

   </AppContext.Provider>
   
  )
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
