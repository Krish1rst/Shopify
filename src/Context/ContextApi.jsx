import React,{createContext,useState,useEffect, useContext} from 'react'
import { FetchData } from '../Utils/FetchApi';


const AppContext = createContext();

export const ContextProvider=({children})=> {

 const [data,setData]=useState([]);
 const [loading,setLoading]=useState(false);
 const [featuredData,setFeaturedData]=useState([]);
 const [currentPage,setCurrentPage]=useState(1);
 const [grid,setGrid]=useState(true);
 const [list,setList]=useState(false);
 const [error, setError] = useState(null);
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
            setError(error.message);
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

        
        
   }}>

        {children}

   </AppContext.Provider>
  )
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}