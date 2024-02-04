import React,{createContext,useState,useEffect, useContext} from 'react'

const AppContext = createContext();

export const ContextApi=({children})=> {



  return (
   <AppContext.Provider value={{ }}>
        {children}
   </AppContext.Provider>
  )
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}