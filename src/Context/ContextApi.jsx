import React,{createContext,useState,useEffect, useContext} from 'react'
import { FetchData } from '../Utils/FetchApi';

const AppContext = createContext();

export const ContextProvider=({children})=> {

 const [data,setData]=useState([]);
 const [loading,setLoading]=useState(false);
 const [featuredData,setFeaturedData]=useState([]);
    useEffect(()=>{
        const FetchedApiData=async()=>{
            setLoading(true);
            const result= await FetchData(20);
            const featuredResult= await FetchData(3);
            setLoading(false);
            setData(result);
            setFeaturedData(featuredResult);
        }
        FetchedApiData();
    },[])

    const [grid,setGrid]=useState(true);
    const [list,setList]=useState(false);
    const handleGrid = () => {
        setGrid(true)
        setList(false)
    };
    const handleList = () => {
      setGrid(false)
      setList(true)
  };

    
return (

   <AppContext.Provider value={{ 
        data,
        featuredData,
        grid,list,
        handleGrid,
        handleList,
        loading
   }}>

        {children}

   </AppContext.Provider>
  )
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}